import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kzbrqfgdsnwohsrkhfqm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6YnJxZmdkc253b2hzcmtoZnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc1MDE3NTUsImV4cCI6MjAwMzA3Nzc1NX0.nEK4XsUexhpofyRKOZYLcpOx89hCNp2853msiL5__5E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
