import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or Key is not defined in environment variables')
}
// Create a single supabase client for interacting with your database
if (!supabaseUrl.startsWith('https://')) {
  throw new Error('Supabase URL must start with "https://"')
}
if (!supabaseKey.startsWith('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.')) {
  throw new Error('Supabase Key is not valid')
}
if (supabaseUrl.includes(' ')) {
  throw new Error('Supabase URL should not contain spaces')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
