export interface Course {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    learningObjectives: string[];
    curriculum: {
      module: number;
      title: string;
      topics: { name: string; videoUrl: string; }[];
    }[];
    image: string;
    price: number;
    isFree?: boolean;
  }
  
  export const courses: Course[] = [
    {
      id: 'claude-with-the-anthropic-api',
      title: 'Claude with the Anthropic API',
      shortDescription: 'Learn to use the powerful Claude large language model via the Anthropic API.',
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
          topics: [
            { name: 'What is Claude?', videoUrl: 'https://www.youtube.com/watch?v=NJu_vB1b3gU' },
            { name: 'Setting up your environment', videoUrl: 'https://www.youtube.com/watch?v=NJu_vB1b3gU' },
            { name: 'Making your first API call', videoUrl: 'https://www.youtube.com/watch?v=NJu_vB1b3gU' },
          ],
        },
        {
          module: 2,
          title: 'Generating Content',
          topics: [
            { name: 'Creative writing with Claude', videoUrl: 'https://www.youtube.com/watch?v=NJu_vB1b3gU' },
            { name: 'Summarization and translation', videoUrl: 'https://www.youtube.com/watch?v=NJu_vB1b3gU' },
            { name: 'Controlling creativity with temperature', videoUrl: 'https://www.youtube.com/watch?v=NJu_vB1b3gU' },
          ],
        },
        {
          module: 3,
          title: 'Building Applications',
          topics: [
            { name: 'Designing prompts for specific tasks', videoUrl: 'https://www.youtube.com/watch?v=NJu_vB1b3gU' },
            { name: 'Building a simple Q&A bot', videoUrl: 'https://www.youtube.com/watch?v=NJu_vB1b3gU' },
            { name: 'Error handling and best practices', videoUrl: 'https://www.youtube.com/watch?v=NJu_vB1b3gU' },
          ],
        },
      ],
      image: '/src/assets/hero-aithinkr.jpg',
      price: 4999, // Price in INR (e.g., ₹4999)
    },
    {
      id: 'introduction-to-prompt-engineering',
      title: 'Introduction to Prompt Engineering',
      shortDescription: 'Master the art of crafting effective prompts for large language models.',
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
          topics: [
            { name: 'Anatomy of a prompt', videoUrl: 'https://www.youtube.com/watch?v=d_q_tA9gV6A' },
            { name: 'The role of context and constraints', videoUrl: 'https://www.youtube.com/watch?v=d_q_tA9gV6A' },
            { name: 'Iterative prompt development', videoUrl: 'https://www.youtube.com/watch?v=d_q_tA9gV6A' },
          ],
        },
        {
          module: 2,
          title: 'Advanced Prompting Techniques',
          topics: [
            { name: 'Few-shot prompting', videoUrl: 'https://www.youtube.com/watch?v=d_q_tA9gV6A' },
            { name: 'Chain-of-thought prompting', videoUrl: 'https://www.youtube.com/watch?v=d_q_tA9gV6A' },
            { name: 'Generating structured data', videoUrl: 'https://www.youtube.com/watch?v=d_q_tA9gV6A' },
          ],
        },
        {
          module: 3,
          title: 'Building a Prompt Library',
          topics: [
            { name: 'Organizing and reusing prompts', videoUrl: 'https://www.youtube.com/watch?v=d_q_tA9gV6A' },
            { name: 'Creating a style guide for prompts', videoUrl: 'https://www.youtube.com/watch?v=d_q_tA9gV6A' },
            { name: 'Collaborating on prompt engineering', videoUrl: 'https://www.youtube.com/watch?v=d_q_tA9gV6A' },
          ],
        },
      ],
      image: '/src/assets/ai-hero-bg.jpg',
      price: 0,
      isFree: true,
    },
  ];
  