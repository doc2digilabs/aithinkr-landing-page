-- Create a policy to allow admins to view all profiles
CREATE POLICY "Admins can view all profiles."
  ON public.profiles FOR SELECT
  USING (is_admin());

-- Update the existing policy to allow users to view their own profile
ALTER POLICY "Users can view their own profile."
  ON public.profiles
  WITH CHECK (auth.uid() = id);
