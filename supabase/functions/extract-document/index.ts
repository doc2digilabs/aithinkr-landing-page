import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { GoogleGenerativeAI } from 'npm:@google/generative-ai';

// IMPORTANT: Set these environment variables in your Supabase project's secrets.
// - SUPABASE_URL: Your project's URL
// - SUPABASE_ANON_KEY: Your project's anon key
// - GEMINI_API_KEY: Your Google AI Studio API key
const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
const genAI = new GoogleGenerativeAI(geminiApiKey);

serve(async (req) => {
  const { filePath } = await req.json();

  if (!filePath) {
    return new Response(JSON.stringify({ error: 'filePath is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Create a Supabase client with the service role key
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Download the file from storage
    const { data: fileData, error: downloadError } = await supabaseAdmin.storage
      .from('document_extractions')
      .download(filePath);

    if (downloadError) {
      throw downloadError;
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
    
    const arrayBuffer = await fileData.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const imagePart = {
      inlineData: {
        data: btoa(String.fromCharCode(...buffer)),
        mimeType: fileData.type,
      },
    };

    const prompt = `
      Extract the following information from this document:
      - Invoice Number
      - Invoice Date
      - Total Amount Due
      - Billed To (Name and Address)
      - List of line items with description, quantity, unit price, and total.
      
      Return the data in a structured JSON format.
    `;

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();

    // Assuming the model returns a JSON string, we parse it.
    // In a real-world scenario, you'd add more robust error handling and parsing.
    const extractedData = JSON.parse(text);

    return new Response(JSON.stringify(extractedData), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});