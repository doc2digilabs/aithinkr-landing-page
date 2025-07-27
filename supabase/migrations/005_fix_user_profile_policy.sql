-- Drop the existing policy if it exists, to avoid conflicts
DROP POLICY IF EXISTS "Users can view their own profile." ON public.profiles;

-- Create a new policy that allows users to view their own profile
CREATE POLICY "Users can view their own profile."
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- Also, ensure users can update their own profile
CREATE POLICY "Users can update their own profile."
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
