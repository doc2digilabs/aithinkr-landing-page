   
    CREATE TABLE public.profiles (
       id uuid NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
     email VARCHAR,
      name VARCHAR,
      phone_no NUMERIC,
      role TEXT,
      student_stream TEXT,
      student_subject TEXT,
      professional_exp TEXT,
      company_name TEXT,
      wizard_completed BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    COMMENT ON TABLE public.profiles IS 'Stores public user profile information.';

  ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

    CREATE POLICY "Users can view their own profile."
    ON public.profiles FOR SELECT
    USING (auth.uid() = id); 

  CREATE POLICY "Users can insert their own profile."
   ON public.profiles FOR INSERT
   WITH CHECK (auth.uid() = id);

   CREATE POLICY "Users can update their own profile."
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id);

    CREATE OR REPLACE FUNCTION public.handle_new_user()
     RETURNS TRIGGER AS $$
     BEGIN
      INSERT INTO public.profiles (id, email)
       VALUES (new.id, new.email);
       RETURN new;
     END;
     $$ LANGUAGE plpgsql SECURITY DEFINER;
   
    -- Create a trigger to call the function when a new user is created
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();