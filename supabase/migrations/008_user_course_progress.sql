-- Create the user_course_progress table
CREATE TABLE public.user_course_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  topic_id TEXT NOT NULL, -- Using TEXT to store the topic title as an ID
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- A user can only complete a topic once per course
  UNIQUE (user_id, course_id, topic_id)
);

COMMENT ON TABLE public.user_course_progress IS 'Tracks user progress within courses.';

-- Enable RLS
ALTER TABLE public.user_course_progress ENABLE ROW LEVEL SECURITY;

-- Policies for user_course_progress
CREATE POLICY "Users can view their own course progress."
  ON public.user_course_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own course progress."
  ON public.user_course_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);
