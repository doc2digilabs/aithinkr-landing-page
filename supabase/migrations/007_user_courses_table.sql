-- Create the user_courses table
CREATE TABLE public.user_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  enrolled_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  -- Ensure a user can only enroll in a course once
  UNIQUE (user_id, course_id)
);

COMMENT ON TABLE public.user_courses IS 'Tracks user enrollments in courses.';

-- Enable RLS
ALTER TABLE public.user_courses ENABLE ROW LEVEL SECURITY;

-- Policies for user_courses
CREATE POLICY "Users can view their own enrollments."
  ON public.user_courses FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can enroll in courses."
  ON public.user_courses FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can un-enroll from courses."
  ON public.user_courses FOR DELETE
  USING (auth.uid() = user_id);
