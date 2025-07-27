-- Create the courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  long_description TEXT,
  duration TEXT,
  level TEXT,
  learning_objetives TEXT[],
  curriculum JSONB,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the enrollments table
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  progress INT DEFAULT 0,
  completed_at TIMESTAMPTZ,
  UNIQUE(user_id, course_id)
);

-- Create the lesson_completions table
CREATE TABLE lesson_completions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id, lesson_id)
);

-- Seed the courses table with data
INSERT INTO courses (title, description, long_description, duration, level, learning_objetives, curriculum, image)
VALUES
  (
    'Claude with the Anthropic API',
    'Learn to use the powerful Claude large language model via the Anthropic API.',
    'This course provides a comprehensive introduction to the Anthropic API, empowering you to build applications on top of Claude, one of the most advanced large language models available. You will learn the fundamentals of interacting with the API, exploring its various features to generate creative text, solve complex problems, and build intelligent applications.',
    '3 hours',
    'Beginner',
    '{"Understand the basics of the Anthropic API.","Learn how to generate text with Claude.","Explore different API parameters for controlling output.","Build a simple application using the API."}',
    '[
      {
        "module": 1,
        "title": "Introduction to the Anthropic API",
        "topics": ["What is Claude?", "Setting up your environment", "Making your first API call"]
      },
      {
        "module": 2,
        "title": "Generating Content",
        "topics": ["Creative writing with Claude", "Summarization and translation", "Controlling creativity with temperature"]
      },
      {
        "module": 3,
        "title": "Building Applications",
        "topics": ["Designing prompts for specific tasks", "Building a simple Q&A bot", "Error handling and best practices"]
      }
    ]',
    '/src/assets/hero-aithinkr.jpg'
  ),
  (
    'Introduction to Prompt Engineering',
    'Master the art of crafting effective prompts for large language models.',
    'In this course, you will learn the essential techniques of prompt engineering to get the best results from large language models like Claude. You will explore how to design, refine, and test prompts to guide the model towards generating accurate, relevant, and creative outputs for a wide range of applications.',
    '4 hours',
    'Intermediate',
    '{"Understand the principles of prompt engineering.","Learn techniques for writing clear and effective prompts.","Explore advanced prompting strategies.","Develop a workflow for testing and refining prompts."}',
    '[
      {
        "module": 1,
        "title": "The Fundamentals of Prompting",
        "topics": ["Anatomy of a prompt", "The role of context and constraints", "Iterative prompt development"]
      },
      {
        "module": 2,
        "title": "Advanced Prompting Techniques",
        "topics": ["Few-shot prompting", "Chain-of-thought prompting", "Generating structured data"]
      },
      {
        "module": 3,
        "title": "Building a Prompt Library",
        "topics": ["Organizing and reusing prompts", "Creating a style guide for prompts", "Collaborating on prompt engineering"]
      }
    ]',
    '/src/assets/ai-hero-bg.jpg'
  );
