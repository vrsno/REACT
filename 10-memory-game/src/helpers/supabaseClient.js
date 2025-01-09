import {createClient} from "@supabase/supabase-js"


// Create a single supabase client for interacting with your database

const URL = 'https://inpnqgvycosjftawxzpu.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlucG5xZ3Z5Y29zamZ0YXd4enB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzODU0ODgsImV4cCI6MjA1MTk2MTQ4OH0.ayWdvp4L6oQXf8G5DUDH9e_KTZys_byq_DjNxMUJnD8'

export const supabase = createClient(URL,KEY)
