import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
//import { createClient } from '@supabase/supabase-js@2';
//import { GoogleGenerativeAI } from 'npm:@google/genai';
//import {GoogleGenAI} from '@google/genai';
import { GoogleGenAI } from 'npm:@google/genai';
// --- CORS Headers ---
// These are necessary to allow your frontend application to call this function.
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PUT, GET, HEAD, POST, DELETE, OPTIONS , PATCH',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-goog-api-key'
};
const SupabaseStorageBucketName = 'aithinkr-upload'; // Change this to your actual bucket name
// --- Gemini AI Initialization ---
// IMPORTANT: Set GEMINI_API_KEY in your Supabase project's secrets.
const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
if (!geminiApiKey) {
  console.error("FATAL: GEMINI_API_KEY is not set in project secrets.");
}
serve(async (req)=>{
  // --- Handle Preflight OPTIONS Request for CORS ---
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: corsHeaders
    });
  }
  try {
    const { filePath } = await req.json();
    if (!filePath) {
      throw new Error('filePath is required in the request body.');
    }
    // --- Supabase Admin Client Initialization ---
    // These secrets are automatically available in the Supabase Edge Function environment.
    const supabaseAdmin = createClient(Deno.env.get('SUPABASE_URL'), Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'));
    // --- Download File from Storage ---
    const { data: fileData, error: downloadError } = await supabaseAdmin.storage.from(SupabaseStorageBucketName).download(filePath);
    if (downloadError) {
      throw new Error(`Failed to download file from storage: ${downloadError.message}`);
    }
    const ai = new GoogleGenAI({
      apiKey: geminiApiKey,
      apiVersion: 'v1alpha'
    });
    // Convert file to base64
    const fileBuffer = await fileData.arrayBuffer();
    const uint8Array = new Uint8Array(fileBuffer);
    let binaryString = '';
    for(let i = 0; i < uint8Array.length; i++){
      binaryString += String.fromCharCode(uint8Array[i]);
    }
    const base64String = btoa(binaryString);
    const imagePart = {
      inlineData: {
        data: base64String,
        mimeType: fileData.type
      }
    };
    // --- Define the Prompt for the LLM ---
    const prompt = `
      Analyze the provided document and extract the text .
      text: extracted text.
      confidenceScore: A number between 0 and 1 indicating your confidence in the accuracy of the extracted data.
      return only a JSON with abobe two fileds without any extra character so that I can directly parse the json object
    `;
    // --- Call Gemini API ---
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: [
        prompt,
        imagePart
      ]
    });
    let response = result.text;
    // --- Parse the JSON Response ---
    let extractedData;
    try {
      if (!response) {
        throw new Error("The model did not return any text to parse.");
      }
      //  extractedData = JSON.parse(response);
      extractedData = response;
    } catch (parseError) {
      console.error("Failed to parse JSON from LLM response:", response);
      throw new Error("The model returned an invalid data format. Could not parse JSON.");
    }
    // --- Return Success Response ---
    return new Response(JSON.stringify(extractedData), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 200
    });
  } catch (error) {
    // --- Return Error Response ---
    console.error("Error in Edge Function:", error);
    return new Response(JSON.stringify({
      error: error.message
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 500
    });
  }
});
