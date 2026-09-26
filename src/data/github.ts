// ============================================================
// GITHUB REPOSITORIES - CURATED OPEN SOURCE AI RESOURCES
// ============================================================

export interface GitHubRepo {
  name: string;
  owner: string;
  url: string;
  description: string;
  stars: string;
  language: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  whyLearn: string;
  icon: string;
}

export interface GitHubCollection {
  title: string;
  description: string;
  icon: string;
  repos: GitHubRepo[];
}

// ============================================================
// CURATED REPOSITORIES BY CATEGORY
// ============================================================

export const githubCollections: GitHubCollection[] = [
  {
    title: 'AI Fundamentals & Machine Learning',
    description: 'Core ML libraries and educational resources to build your foundation',
    icon: '🧠',
    repos: [
      {
        name: 'scikit-learn',
        owner: 'scikit-learn',
        url: 'https://github.com/scikit-learn/scikit-learn',
        description: 'Machine learning in Python. Simple and efficient tools for predictive data analysis.',
        stars: '60k+',
        language: 'Python',
        category: 'Machine Learning',
        level: 'Beginner',
        tags: ['ML', 'Classification', 'Regression', 'Clustering'],
        whyLearn: 'The go-to library for classical ML. Perfect for learning fundamentals like decision trees, SVMs, and clustering.',
        icon: '📊'
      },
      {
        name: 'fastai',
        owner: 'fastai',
        url: 'https://github.com/fastai/fastai',
        description: 'The fastai deep learning library, plus lessons and tutorials.',
        stars: '26k+',
        language: 'Python',
        category: 'Deep Learning',
        level: 'Beginner',
        tags: ['Deep Learning', 'Education', 'Computer Vision', 'NLP'],
        whyLearn: 'Best educational deep learning library. Comes with free courses that take you from beginner to practitioner.',
        icon: '⚡'
      },
      {
        name: 'tensorflow',
        owner: 'tensorflow',
        url: 'https://github.com/tensorflow/tensorflow',
        description: 'An open-source machine learning framework for everyone.',
        stars: '187k+',
        language: 'Python/C++',
        category: 'Deep Learning',
        level: 'Intermediate',
        tags: ['Deep Learning', 'Neural Networks', 'Production', 'Mobile'],
        whyLearn: 'Industry-standard framework by Google. Used in production at massive scale. Great for learning ML engineering.',
        icon: '🔷'
      },
      {
        name: 'pytorch',
        owner: 'pytorch',
        url: 'https://github.com/pytorch/pytorch',
        description: 'Tensors and dynamic neural networks in Python with strong GPU acceleration.',
        stars: '85k+',
        language: 'Python/C++',
        category: 'Deep Learning',
        level: 'Intermediate',
        tags: ['Deep Learning', 'Research', 'GPU', 'Dynamic Graphs'],
        whyLearn: 'The preferred framework for AI research. Most cutting-edge papers are implemented in PyTorch first.',
        icon: '🔥'
      },
      {
        name: 'ML-For-Beginners',
        owner: 'microsoft',
        url: 'https://github.com/microsoft/ML-For-Beginners',
        description: '12 weeks, 26 lessons, 52 quizzes of classic Machine Learning for all.',
        stars: '70k+',
        language: 'Python',
        category: 'Education',
        level: 'Beginner',
        tags: ['Course', 'Beginner', 'Comprehensive', 'Microsoft'],
        whyLearn: 'Microsoft\'s free, comprehensive ML course. 26 lessons with quizzes, assignments, and real-world projects.',
        icon: '🎓'
      },
      {
        name: 'hands-on-ml',
        owner: 'ageron',
        url: 'https://github.com/ageron/handson-ml3',
        description: 'Code examples for the "Hands-On Machine Learning" book by Aurélien Géron.',
        stars: '24k+',
        language: 'Python',
        category: 'Education',
        level: 'Beginner',
        tags: ['Book', 'Examples', 'Scikit-learn', 'TensorFlow'],
        whyLearn: 'Companion code for the best-selling ML book. Learn by doing with practical, well-commented examples.',
        icon: '📚'
      }
    ]
  },
  {
    title: 'Generative AI & LLMs',
    description: 'Tools and frameworks for working with large language models and generative AI',
    icon: '✨',
    repos: [
      {
        name: 'openai-cookbook',
        owner: 'openai',
        url: 'https://github.com/openai/openai-cookbook',
        description: 'Examples and guides for using the OpenAI API.',
        stars: '60k+',
        language: 'Python/Jupyter',
        category: 'LLMs',
        level: 'Beginner',
        tags: ['OpenAI', 'GPT', 'API', 'Examples', 'Best Practices'],
        whyLearn: 'Official OpenAI examples. Learn prompt engineering, function calling, embeddings, and real-world patterns.',
        icon: '📘'
      },
      {
        name: 'transformers',
        owner: 'huggingface',
        url: 'https://github.com/huggingface/transformers',
        description: 'State-of-the-art ML for PyTorch, TensorFlow, and JAX. Thousands of pretrained models.',
        stars: '135k+',
        language: 'Python',
        category: 'LLMs',
        level: 'Intermediate',
        tags: ['Transformers', 'BERT', 'GPT', 'Models Hub', 'NLP'],
        whyLearn: 'Access thousands of pretrained models. The foundation of modern NLP and the Hugging Face ecosystem.',
        icon: '🤗'
      },
      {
        name: 'llama',
        owner: 'meta-llama',
        url: 'https://github.com/meta-llama/llama',
        description: 'Meta\'s open-source large language models. State-of-the-art performance.',
        stars: '28k+',
        language: 'Python',
        category: 'LLMs',
        level: 'Intermediate',
        tags: ['Open Source', 'Llama', 'Meta', 'Foundation Models'],
        whyLearn: 'Run state-of-the-art LLMs locally. Understand how foundation models work under the hood.',
        icon: '🦙'
      },
      {
        name: 'ollama',
        owner: 'ollama',
        url: 'https://github.com/ollama/ollama',
        description: 'Get up and running with Llama, Mistral, Gemma, and other large language models locally.',
        stars: '100k+',
        language: 'Go',
        category: 'LLMs',
        level: 'Beginner',
        tags: ['Local', 'Privacy', 'Easy Setup', 'Multiple Models'],
        whyLearn: 'Run LLMs on your own machine in minutes. Perfect for learning without API costs or privacy concerns.',
        icon: '🦙'
      },
      {
        name: 'stable-diffusion-webui',
        owner: 'AUTOMATIC1111',
        url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
        description: 'The most popular web interface for Stable Diffusion image generation.',
        stars: '145k+',
        language: 'Python',
        category: 'Image Generation',
        level: 'Beginner',
        tags: ['Image Gen', 'Stable Diffusion', 'Web UI', 'Creative'],
        whyLearn: 'Create AI art with a powerful, feature-rich interface. Learn about diffusion models hands-on.',
        icon: '🎨'
      },
      {
        name: 'comfyui',
        owner: 'comfyanonymous',
        url: 'https://github.com/comfyanonymous/ComfyUI',
        description: 'The most powerful and modular diffusion model GUI, with graph-based flow.',
        stars: '60k+',
        language: 'Python',
        category: 'Image Generation',
        level: 'Intermediate',
        tags: ['Node-based', 'Workflows', 'Advanced', 'Modular'],
        whyLearn: 'Build complex image generation workflows visually. Understand the pipeline of generative AI.',
        icon: '🎭'
      },
      {
        name: 'prompt-engineering-guide',
        owner: 'dair-ai',
        url: 'https://github.com/dair-ai/Prompt-Engineering-Guide',
        description: 'Guides, papers, lecture, notebooks and resources for prompt engineering.',
        stars: '55k+',
        language: 'Markdown',
        category: 'Prompt Engineering',
        level: 'Beginner',
        tags: ['Prompts', 'Guide', 'Papers', 'Techniques'],
        whyLearn: 'The definitive guide to prompt engineering. Learn techniques from basic to advanced with research papers.',
        icon: '✍️'
      }
    ]
  },
  {
    title: 'Agentic AI & AI Engineering',
    description: 'Build autonomous AI agents and production-ready AI applications',
    icon: '🤖',
    repos: [
      {
        name: 'langchain',
        owner: 'langchain-ai',
        url: 'https://github.com/langchain-ai/langchain',
        description: 'Build context-aware reasoning applications with LLMs.',
        stars: '100k+',
        language: 'Python',
        category: 'Agent Frameworks',
        level: 'Intermediate',
        tags: ['Agents', 'Chains', 'RAG', 'Tools', 'Memory'],
        whyLearn: 'The most popular framework for building LLM applications. Learn agents, RAG, and tool use.',
        icon: '🦜'
      },
      {
        name: 'langgraph',
        owner: 'langchain-ai',
        url: 'https://github.com/langchain-ai/langgraph',
        description: 'Build resilient, stateful agentic applications with multi-actor graphs.',
        stars: '8k+',
        language: 'Python',
        category: 'Agent Frameworks',
        level: 'Advanced',
        tags: ['Graphs', 'State', 'Multi-Agent', 'Cyclic'],
        whyLearn: 'Build complex agent workflows with cycles and state. The next evolution of LangChain for agents.',
        icon: '🕸️'
      },
      {
        name: 'autogen',
        owner: 'microsoft',
        url: 'https://github.com/microsoft/autogen',
        description: 'Enable next-gen large language model applications with multi-agent conversation framework.',
        stars: '40k+',
        language: 'Python',
        category: 'Agent Frameworks',
        level: 'Intermediate',
        tags: ['Multi-Agent', 'Microsoft', 'Conversation', 'Collaboration'],
        whyLearn: 'Build multi-agent systems where AI agents collaborate. Microsoft\'s production-tested framework.',
        icon: '🤝'
      },
      {
        name: 'crewAI',
        owner: 'crewAIInc',
        url: 'https://github.com/crewAIInc/crewAI',
        description: 'Framework for orchestrating role-playing, autonomous AI agents.',
        stars: '25k+',
        language: 'Python',
        category: 'Agent Frameworks',
        level: 'Intermediate',
        tags: ['Role-Playing', 'Teams', 'Tasks', 'Processes'],
        whyLearn: 'Create AI "crews" with defined roles. Intuitive way to build multi-agent systems.',
        icon: '👥'
      },
      {
        name: 'llama_index',
        owner: 'run-llama',
        url: 'https://github.com/run-llama/llama_index',
        description: 'Data framework for LLM applications. Ingest, structure, and access private data.',
        stars: '40k+',
        language: 'Python',
        category: 'RAG & Data',
        level: 'Intermediate',
        tags: ['RAG', 'Data', 'Indexing', 'Knowledge Base'],
        whyLearn: 'Build RAG systems that connect LLMs to your data. Essential for enterprise AI applications.',
        icon: '🦙'
      },
      {
        name: 'chroma',
        owner: 'chroma-core',
        url: 'https://github.com/chroma-core/chroma',
        description: 'The open-source embedding database. AI-native, developer-friendly.',
        stars: '17k+',
        language: 'Python',
        category: 'RAG & Data',
        level: 'Beginner',
        tags: ['Vector DB', 'Embeddings', 'RAG', 'Simple'],
        whyLearn: 'The easiest vector database to get started with. Essential for building RAG applications.',
        icon: '🌈'
      },
      {
        name: 'dspy',
        owner: 'stanfordnlp',
        url: 'https://github.com/stanfordnlp/dspy',
        description: 'The framework for programming—not prompting—foundation models.',
        stars: '20k+',
        language: 'Python',
        category: 'Agent Frameworks',
        level: 'Advanced',
        tags: ['Programming', 'Optimization', 'Stanford', 'Research'],
        whyLearn: 'Program LLMs instead of prompting them. Stanford\'s approach to reliable AI systems.',
        icon: '🎯'
      },
      {
        name: 'semantic-kernel',
        owner: 'microsoft',
        url: 'https://github.com/microsoft/semantic-kernel',
        description: 'Integrate cutting-edge LLM technology quickly and easily into your apps.',
        stars: '22k+',
        language: 'C#/Python',
        category: 'Agent Frameworks',
        level: 'Intermediate',
        tags: ['Enterprise', 'Microsoft', 'Plugins', 'C#'],
        whyLearn: 'Enterprise-grade AI orchestration. Great for .NET developers and enterprise applications.',
        icon: '🔷'
      }
    ]
  },
  {
    title: 'AI Tools & Applications',
    description: 'Production-ready AI tools and applications you can use or learn from',
    icon: '🛠️',
    repos: [
      {
        name: 'open-webui',
        owner: 'open-webui',
        url: 'https://github.com/open-webui/open-webui',
        description: 'User-friendly WebUI for LLMs. Supports Ollama, OpenAI API, and more.',
        stars: '60k+',
        language: 'Svelte/Python',
        category: 'UI Tools',
        level: 'Beginner',
        tags: ['WebUI', 'ChatGPT-like', 'Self-hosted', 'Ollama'],
        whyLearn: 'Build your own ChatGPT-like interface. Learn how modern AI UIs are built.',
        icon: '💬'
      },
      {
        name: 'vanna',
        owner: 'vanna-ai',
        url: 'https://github.com/vanna-ai/vanna',
        description: 'Python-based AI SQL agent trained on your schema. Ask questions in English.',
        stars: '12k+',
        language: 'Python',
        category: 'Data Tools',
        level: 'Intermediate',
        tags: ['SQL', 'Data', 'Analytics', 'Agent'],
        whyLearn: 'Query databases with natural language. See how AI agents interact with structured data.',
        icon: '📊'
      },
      {
        name: 'dify',
        owner: 'langgenius',
        url: 'https://github.com/langgenius/dify',
        description: 'LLM app development platform. Combines AI workflow, RAG, and agents.',
        stars: '60k+',
        language: 'TypeScript/Python',
        category: 'Platforms',
        level: 'Intermediate',
        tags: ['No-code', 'Workflow', 'RAG', 'Agents', 'Production'],
        whyLearn: 'Build production AI apps visually. Understand the full stack of AI application development.',
        icon: '🎯'
      },
      {
        name: 'quivr',
        owner: 'QuivrHQ',
        url: 'https://github.com/QuivrHQ/quivr',
        description: 'Your GenAI second brain. RAG-based personal assistant for your documents.',
        stars: '35k+',
        language: 'Python/TypeScript',
        category: 'Applications',
        level: 'Intermediate',
        tags: ['RAG', 'Personal', 'Documents', 'Second Brain'],
        whyLearn: 'Build a personal AI assistant. Learn how to create RAG apps that work with your own data.',
        icon: '🧠'
      },
      {
        name: 'localGPT',
        owner: 'jtsternberg',
        url: 'https://github.com/PromtEngineer/localGPT',
        description: 'Chat with your documents locally, using GPT models. No data leaves your device.',
        stars: '23k+',
        language: 'Python',
        category: 'Applications',
        level: 'Intermediate',
        tags: ['Privacy', 'Local', 'Documents', 'RAG'],
        whyLearn: 'Private document chat. Learn how to build AI apps that respect data privacy.',
        icon: '🔒'
      },
      {
        name: 'mem0',
        owner: 'mem0ai',
        url: 'https://github.com/mem0ai/mem0',
        description: 'The memory layer for AI. Personalized AI experiences with long-term memory.',
        stars: '25k+',
        language: 'Python',
        category: 'Infrastructure',
        level: 'Advanced',
        tags: ['Memory', 'Personalization', 'Agents', 'State'],
        whyLearn: 'Add long-term memory to AI agents. Essential for building personalized AI experiences.',
        icon: '💾'
      }
    ]
  },
  {
    title: 'Learning & Research',
    description: 'Curated educational resources, papers, and research implementations',
    icon: '📚',
    repos: [
      {
        name: 'papers-we-love',
        owner: 'papers-we-love',
        url: 'https://github.com/papers-we-love/papers-we-love',
        description: 'Papers from the computer science community to read and discuss.',
        stars: '88k+',
        language: 'Various',
        category: 'Research',
        level: 'Advanced',
        tags: ['Papers', 'CS', 'Community', 'Discussion'],
        whyLearn: 'Read foundational CS papers. Many AI breakthroughs started as papers discussed here.',
        icon: '📄'
      },
      {
        name: 'awesome-machine-learning',
        owner: 'josephmisiti',
        url: 'https://github.com/josephmisiti/awesome-machine-learning',
        description: 'A curated list of awesome ML frameworks, libraries and software.',
        stars: '66k+',
        language: 'Various',
        category: 'Curated Lists',
        level: 'Beginner',
        tags: ['Awesome List', 'Frameworks', 'Libraries', 'Tools'],
        whyLearn: 'Discover the best ML tools and libraries. The starting point for any AI project.',
        icon: '🌟'
      },
      {
        name: 'ai-engineering-roadmap',
        owner: 'mlabonne',
        url: 'https://github.com/mlabonne/llm-course',
        description: 'Course to learn about LLMs and become an LLM Engineer.',
        stars: '45k+',
        language: 'Python/Jupyter',
        category: 'Courses',
        level: 'Intermediate',
        tags: ['LLMs', 'Course', 'Roadmap', 'Engineering'],
        whyLearn: 'Complete LLM engineering course. From basics to advanced topics with hands-on notebooks.',
        icon: '🗺️'
      },
      {
        name: 'system-design-primer',
        owner: 'donnemartin',
        url: 'https://github.com/donnemartin/system-design-primer',
        description: 'Learn how to design large-scale systems. Prep for system design interviews.',
        stars: '280k+',
        language: 'Python',
        category: 'Engineering',
        level: 'Advanced',
        tags: ['System Design', 'Scalability', 'Architecture', 'Interviews'],
        whyLearn: 'Essential for building AI systems at scale. Learn how companies design production ML systems.',
        icon: '🏗️'
      },
      {
        name: 'generative-ai-for-beginners',
        owner: 'microsoft',
        url: 'https://github.com/microsoft/generative-ai-for-beginners',
        description: '18 lessons teaching everything you need to know to start building GenAI apps.',
        stars: '75k+',
        language: 'Python',
        category: 'Courses',
        level: 'Beginner',
        tags: ['GenAI', 'Beginner', 'Microsoft', '18 Lessons'],
        whyLearn: 'Microsoft\'s free GenAI course. 18 lessons from basics to building apps with LLMs.',
        icon: '🎓'
      },
      {
        name: 'llm-agents-paper',
        owner: 'Significant-Gravitas',
        url: 'https://github.com/Significant-Gravitas/AutoGPT',
        description: 'AutoGPT: One of the first and most famous AI agent projects.',
        stars: '170k+',
        language: 'Python',
        category: 'Agents',
        level: 'Intermediate',
        tags: ['AutoGPT', 'Autonomous', 'Pioneer', 'Agent'],
        whyLearn: 'Study one of the first AI agents. Understand the evolution of agentic AI.',
        icon: '🤖'
      }
    ]
  }
];

// ============================================================
// MODULE-SPECIFIC GITHUB LINKS
// ============================================================

export const moduleGitHubLinks: Record<string, { title: string; url: string; description: string }[]> = {
  'ai-fundamentals': [
    { title: 'microsoft/ML-For-Beginners', url: 'https://github.com/microsoft/ML-For-Beginners', description: '12-week ML course with 26 lessons' },
    { title: 'scikit-learn/scikit-learn', url: 'https://github.com/scikit-learn/scikit-learn', description: 'Classical ML library in Python' },
    { title: 'fastai/fastai', url: 'https://github.com/fastai/fastai', description: 'Deep learning library + free courses' },
    { title: 'ageron/handson-ml3', url: 'https://github.com/ageron/handson-ml3', description: 'Code for Hands-On ML book' },
  ],
  'generative-ai': [
    { title: 'openai/openai-cookbook', url: 'https://github.com/openai/openai-cookbook', description: 'Official OpenAI API examples & guides' },
    { title: 'dair-ai/Prompt-Engineering-Guide', url: 'https://github.com/dair-ai/Prompt-Engineering-Guide', description: 'Complete prompt engineering resource' },
    { title: 'huggingface/transformers', url: 'https://github.com/huggingface/transformers', description: 'Thousands of pretrained models' },
    { title: 'ollama/ollama', url: 'https://github.com/ollama/ollama', description: 'Run LLMs locally on your machine' },
  ],
  'agentic-ai': [
    { title: 'langchain-ai/langchain', url: 'https://github.com/langchain-ai/langchain', description: 'Build LLM-powered applications' },
    { title: 'microsoft/autogen', url: 'https://github.com/microsoft/autogen', description: 'Multi-agent conversation framework' },
    { title: 'crewAIInc/crewAI', url: 'https://github.com/crewAIInc/crewAI', description: 'Role-playing AI agent teams' },
    { title: 'Significant-Gravitas/AutoGPT', url: 'https://github.com/Significant-Gravitas/AutoGPT', description: 'Pioneering autonomous AI agent' },
  ],
  'ai-engineering': [
    { title: 'run-llama/llama_index', url: 'https://github.com/run-llama/llama_index', description: 'RAG framework for LLM apps' },
    { title: 'chroma-core/chroma', url: 'https://github.com/chroma-core/chroma', description: 'Open-source vector database' },
    { title: 'langgenius/dify', url: 'https://github.com/langgenius/dify', description: 'Visual LLM app builder' },
    { title: 'mlabonne/llm-course', url: 'https://github.com/mlabonne/llm-course', description: 'Complete LLM engineering course' },
  ]
};
