// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qosuxyychkwqcwnuuesn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvc3V4eXljaGt3cWN3bnV1ZXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NjE4NTIsImV4cCI6MjA1MDUzNzg1Mn0.ZVk72NbmBO2k4mx-ssIOtTHwLkUlmaHX2tkNT6kPUbs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);