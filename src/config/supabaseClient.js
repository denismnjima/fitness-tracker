import { createClient } from "@supabase/supabase-js";
const SupabaseUrl = 'https://gqivnvwmvjvqvlzxzuqo.supabase.co'
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxaXZudndtdmp2cXZsenh6dXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4OTkxMDQsImV4cCI6MjAzOTQ3NTEwNH0.v5dR142Oj6-uBVOOoQvSBBN8NVXxUwiEeBaAZ-Djx88`
export const supabase = createClient(SupabaseUrl,supabaseAnonKey)