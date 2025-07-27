export interface Course {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    learningObjectives: string[];
    curriculum: {
      module: number;
      title: string;
      topics: string[];
    }[];
    image: string;
  }
  
  export const courses: Course[] = [
    {
      id: 'claude-with-the-anthropic-api',
      title: 'Claude with the Anthropic API',
      description: 'Learn to use the powerful Claude large language model via the Anthropic API.',
      longDescription: 'This course provides a comprehensive introduction to the Anthropic API, empowering you to build applications on top of Claude, one of the most advanced large language models available. You will learn the fundamentals of interacting with the API, exploring its various features to generate creative text, solve complex problems, and build intelligent applications.',
      duration: '3 hours',
      level: 'Beginner',
      learningObjectives: [
        'Understand the basics of the Anthropic API.',
        'Learn how to generate text with Claude.',
        'Explore different API parameters for controlling output.',
        'Build a simple application using the API.',
      ],
      curriculum: [
        {
          module: 1,
          title: 'Introduction to the Anthropic API',
          topics: ['What is Claude?', 'Setting up your environment', 'Making your first API call'],
        },
        {
          module: 2,
          title: 'Generating Content',
          topics: ['Creative writing with Claude', 'Summarization and translation', 'Controlling creativity with temperature'],
        },
        {
          module: 3,
          title: 'Building Applications',
          topics: ['Designing prompts for specific tasks', 'Building a simple Q&A bot', 'Error handling and best practices'],
        },
      ],
      image: '/src/assets/hero-aithinkr.jpg',
    },
    {
      id: 'introduction-to-prompt-engineering',
      title: 'Introduction to Prompt Engineering',
      description: 'Master the art of crafting effective prompts for large language models.',
      longDescription: 'In this course, you will learn the essential techniques of prompt engineering to get the best results from large language models like Claude. You will explore how to design, refine, and test prompts to guide the model towards generating accurate, relevant, and creative outputs for a wide range of applications.',
      duration: '4 hours',
      level: 'Intermediate',
      learningObjectives: [
        'Understand the principles of prompt engineering.',
        'Learn techniques for writing clear and effective prompts.',
        'Explore advanced prompting strategies.',
        'Develop a workflow for testing and refining prompts.',
      ],
      curriculum: [
        {
          module: 1,
          title: 'The Fundamentals of Prompting',
          topics: ['Anatomy of a prompt', 'The role of context and constraints', 'Iterative prompt development'],
        },
        {
          module: 2,
          title: 'Advanced Prompting Techniques',
          topics: ['Few-shot prompting', 'Chain-of-thought prompting', 'Generating structured data'],
        },
        {
          module: 3,
          title: 'Building a Prompt Library',
          topics: ['Organizing and reusing prompts', 'Creating a style guide for prompts', 'Collaborating on prompt engineering'],
        },
      ],
      image: '/src/assets/ai-hero-bg.jpg',
    },
  ];
  