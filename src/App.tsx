import { useState, useEffect } from 'react';

// Types
interface Module {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  topics: Topic[];
}

interface Topic {
  title: string;
  content: string;
  keyPoints: string[];
}

interface DailyTip {
  day: string;
  title: string;
  tip: string;
  category: string;
}

// Data
const modules: Module[] = [
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals',
    icon: '🧠',
    color: 'from-blue-500 to-blue-700',
    description: 'Understanding the foundation of Artificial Intelligence',
    topics: [
      {
        title: 'What is Artificial Intelligence?',
        content: 'Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (acquiring information and rules), reasoning (using rules to reach conclusions), and self-correction.',
        keyPoints: [
          'AI enables machines to learn from data and improve over time',
          'It encompasses machine learning, deep learning, and neural networks',
          'AI can be narrow (task-specific) or general (human-like capabilities)',
          'Modern AI is powered by large datasets and computational power'
        ]
      },
      {
        title: 'Machine Learning Basics',
        content: 'Machine Learning is a subset of AI that focuses on building systems that learn from data. Instead of being explicitly programmed, these systems improve their performance on tasks through experience.',
        keyPoints: [
          'Supervised Learning: Learning from labeled examples',
          'Unsupervised Learning: Finding patterns in unlabeled data',
          'Reinforcement Learning: Learning through trial and error with rewards',
          'Transfer Learning: Applying knowledge from one domain to another'
        ]
      },
      {
        title: 'Neural Networks & Deep Learning',
        content: 'Deep Learning uses artificial neural networks with multiple layers to model complex patterns. These networks are inspired by the human brain and can automatically discover representations from raw data.',
        keyPoints: [
          'Neural networks consist of interconnected nodes (neurons) in layers',
          'Deep learning uses many hidden layers for complex pattern recognition',
          'Convolutional Neural Networks (CNNs) excel at image processing',
          'Recurrent Neural Networks (RNNs) handle sequential data like text'
        ]
      }
    ]
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    icon: '✨',
    color: 'from-purple-500 to-purple-700',
    description: 'Creating new content with AI-powered generation',
    topics: [
      {
        title: 'What is Generative AI?',
        content: 'Generative AI refers to AI systems that can create new content — text, images, music, code, and more — by learning patterns from vast amounts of training data. Unlike traditional AI that classifies or predicts, generative AI creates original outputs.',
        keyPoints: [
          'Generates new, original content rather than just analyzing existing data',
          'Powered by large language models (LLMs) like GPT, Claude, and Gemini',
          'Can produce text, images, audio, video, and code',
          'Uses transformers architecture for understanding context and patterns'
        ]
      },
      {
        title: 'Large Language Models (LLMs)',
        content: 'LLMs are AI models trained on massive text datasets to understand and generate human-like text. They can answer questions, write essays, translate languages, summarize documents, and much more.',
        keyPoints: [
          'GPT-4, Claude, Gemini, and Llama are popular LLMs',
          'They work by predicting the next word/token in a sequence',
          'Prompt engineering is key to getting useful outputs',
          'Context windows determine how much information the model can process at once'
        ]
      },
      {
        title: 'Prompt Engineering',
        content: 'Prompt engineering is the art and science of crafting effective inputs to get the best outputs from AI models. Well-crafted prompts can dramatically improve the quality and relevance of AI responses.',
        keyPoints: [
          'Be specific and clear about what you want',
          'Provide context and examples (few-shot prompting)',
          'Use role-playing: "Act as a..." to set the AI\'s persona',
          'Break complex tasks into smaller, sequential prompts',
          'Iterate and refine based on initial outputs'
        ]
      },
      {
        title: 'Multimodal AI',
        content: 'Multimodal AI systems can process and generate multiple types of content — combining text, images, audio, and video. This enables richer interactions and more versatile applications.',
        keyPoints: [
          'DALL-E, Midjourney, and Stable Diffusion generate images from text',
          'Whisper converts speech to text with high accuracy',
          'GPT-4V can analyze images alongside text',
          'Video generation tools like Sora create video from descriptions'
        ]
      }
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    icon: '🤖',
    color: 'from-emerald-500 to-emerald-700',
    description: 'Autonomous AI agents that take action',
    topics: [
      {
        title: 'What is Agentic AI?',
        content: 'Agentic AI refers to AI systems that can autonomously plan, reason, and take actions to achieve goals. Unlike simple chatbots that respond to prompts, agents can break down complex tasks, use tools, and execute multi-step workflows independently.',
        keyPoints: [
          'Agents can plan and execute multi-step tasks autonomously',
          'They use tools like web search, code execution, and APIs',
          'Memory systems allow agents to maintain context over time',
          'Agents can collaborate with each other to solve complex problems'
        ]
      },
      {
        title: 'Agent Architecture',
        content: 'Modern AI agents follow a perception-reasoning-action loop. They observe their environment, reason about what to do, take actions using available tools, and learn from the results to improve future decisions.',
        keyPoints: [
          'Perception: Gathering information from environment and tools',
          'Reasoning: Planning and deciding on next actions',
          'Action: Executing tasks using tools and APIs',
          'Reflection: Evaluating outcomes and adjusting strategy',
          'Memory: Storing and retrieving past experiences'
        ]
      },
      {
        title: 'Popular Agent Frameworks',
        content: 'Several frameworks have emerged for building AI agents, each with different strengths. These tools make it easier to create agents that can handle real-world tasks.',
        keyPoints: [
          'LangChain/LangGraph: Build chains and graphs of AI operations',
          'AutoGPT: Autonomous task completion with minimal human input',
          'CrewAI: Multi-agent collaboration for complex workflows',
          'Microsoft AutoGen: Multi-agent conversation framework',
          'OpenAI Assistants API: Built-in tools for code, search, and files'
        ]
      },
      {
        title: 'Real-World Agent Applications',
        content: 'Agentic AI is being applied across industries to automate complex workflows, from customer service to software development to scientific research.',
        keyPoints: [
          'Coding agents like GitHub Copilot and Devin write and debug code',
          'Research agents scan papers and synthesize findings',
          'Customer service agents handle multi-turn conversations with tool use',
          'Data analysis agents process datasets and generate reports',
          'Personal assistants manage schedules, emails, and tasks'
        ]
      }
    ]
  }
];

const workplaceApplications = [
  {
    category: 'Writing & Communication',
    icon: '✍️',
    items: [
      'Draft emails, reports, and presentations in seconds',
      'Summarize long documents and meeting notes',
      'Translate and localize content for global teams',
      'Generate creative marketing copy and social media posts'
    ]
  },
  {
    category: 'Data & Analysis',
    icon: '📊',
    items: [
      'Analyze spreadsheets and generate insights automatically',
      'Create data visualizations from raw data',
      'Build predictive models without coding expertise',
      'Automate repetitive data cleaning tasks'
    ]
  },
  {
    category: 'Development & IT',
    icon: '💻',
    items: [
      'Write and debug code with AI assistants',
      'Automate testing and quality assurance',
      'Generate documentation from code',
      'Optimize system performance with AI recommendations'
    ]
  },
  {
    category: 'Creative Work',
    icon: '🎨',
    items: [
      'Generate design concepts and mockups',
      'Create video scripts and storyboards',
      'Produce music and sound effects',
      'Edit and enhance photos with AI tools'
    ]
  },
  {
    category: 'Project Management',
    icon: '📋',
    items: [
      'Automate task prioritization and scheduling',
      'Generate project plans from requirements',
      'Monitor progress and flag risks automatically',
      'Facilitate team collaboration with AI summaries'
    ]
  },
  {
    category: 'Learning & Development',
    icon: '📚',
    items: [
      'Create personalized learning paths',
      'Generate training materials and quizzes',
      'Get instant answers from company knowledge bases',
      'Practice skills with AI-powered simulations'
    ]
  }
];

const dailyTips: DailyTip[] = [
  { day: 'Monday', title: 'Start with a Plan', tip: 'Begin your week by using AI to review your goals and create a structured plan. Ask AI to help prioritize tasks based on impact and effort.', category: 'Planning' },
  { day: 'Tuesday', title: 'Automate Repetitive Tasks', tip: 'Identify one repetitive task and find an AI tool or workflow to automate it. Even saving 15 minutes daily adds up to hours per month.', category: 'Automation' },
  { day: 'Wednesday', title: 'Learn One New Tool', tip: 'Spend 20 minutes exploring a new AI tool or feature. Try ChatGPT plugins, Claude artifacts, or a new image generator. Document what you learn.', category: 'Learning' },
  { day: 'Thursday', title: 'Collaborate with AI', tip: 'Use AI as a thinking partner. Brainstorm ideas, challenge your assumptions, or get a second opinion on important decisions.', category: 'Collaboration' },
  { day: 'Friday', title: 'Reflect & Optimize', tip: 'Review your week with AI assistance. Ask it to help you identify patterns in your productivity and suggest improvements for next week.', category: 'Reflection' },
  { day: 'Saturday', title: 'Deep Dive', tip: 'Spend time on a longer learning project. Take an AI course, build a small project, or read research papers on topics that interest you.', category: 'Growth' },
  { day: 'Sunday', title: 'Share Knowledge', tip: 'Share what you learned this week with a colleague or on social media. Teaching others reinforces your own understanding and builds community.', category: 'Community' }
];

const resources = [
  { title: 'OpenAI Playground', url: 'https://platform.openai.com/playground', description: 'Experiment with GPT models directly', type: 'Tool' },
  { title: 'Anthropic Claude', url: 'https://claude.ai', description: 'Advanced AI assistant for complex tasks', type: 'Tool' },
  { title: 'Hugging Face', url: 'https://huggingface.co', description: 'Open-source AI model hub and community', type: 'Platform' },
  { title: 'LangChain Docs', url: 'https://python.langchain.com', description: 'Build applications with LLMs', type: 'Framework' },
  { title: 'DeepLearning.AI', url: 'https://www.deeplearning.ai', description: 'Free and paid AI courses by Andrew Ng', type: 'Learning' },
  { title: 'AI Engineering by Chip Huyen', url: 'https://huyenchip.com', description: 'Insights on ML systems design', type: 'Blog' },
  { title: 'The Batch by Andrew Ng', url: 'https://www.deeplearning.ai/the-batch/', description: 'Weekly AI news digest', type: 'Newsletter' },
  { title: 'Papers With Code', url: 'https://paperswithcode.com', description: 'ML papers with code implementations', type: 'Research' }
];

// Components
function Navigation({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (s: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'learn', label: 'Learn' },
    { id: 'workplace', label: 'At Work' },
    { id: 'daily', label: 'Daily Tips' },
    { id: 'resources', label: 'Resources' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Learning Hub</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveSection(item.id); setMobileOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection({ setActiveSection }: { setActiveSection: (s: string) => void }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-gray-700 dark:text-gray-300">Your AI Learning Journey Starts Here</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-900 dark:text-white">Master </span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">AI</span>
          <br />
          <span className="text-gray-900 dark:text-white">Get Better Every Day</span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Learn AI, Generative AI, and Agentic AI from the ground up. Discover practical ways to use these technologies 
          in your job to boost productivity, creativity, and career growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => setActiveSection('learn')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
          >
            Start Learning →
          </button>
          <button
            onClick={() => setActiveSection('workplace')}
            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-0.5"
          >
            Apply at Work 💼
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: '🧠', label: 'AI Fundamentals', desc: 'Build your foundation' },
            { icon: '✨', label: 'Generative AI', desc: 'Create with AI' },
            { icon: '🤖', label: 'Agentic AI', desc: 'Automate workflows' }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform cursor-pointer" onClick={() => setActiveSection('learn')}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-900 dark:text-white">{item.label}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningSection() {
  const [activeModule, setActiveModule] = useState<string>('ai-fundamentals');
  const [activeTopic, setActiveTopic] = useState<number>(0);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const currentModule = modules.find(m => m.id === activeModule)!;
  const currentTopic = currentModule.topics[activeTopic];

  const toggleComplete = () => {
    const key = `${activeModule}-${activeTopic}`;
    setCompletedTopics(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const isCompleted = completedTopics.has(`${activeModule}-${activeTopic}`);
  const totalTopics = modules.reduce((acc, m) => acc + m.topics.length, 0);
  const progress = Math.round((completedTopics.size / totalTopics) * 100);

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Learning Progress</span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{completedTopics.size} of {totalTopics} topics completed</p>
        </div>

        {/* Module tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {modules.map(module => (
            <button
              key={module.id}
              onClick={() => { setActiveModule(module.id); setActiveTopic(0); }}
              className={`p-6 rounded-2xl text-left transition-all ${
                activeModule === module.id
                  ? `bg-gradient-to-br ${module.color} text-white shadow-lg scale-[1.02]`
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-[1.01]'
              }`}
            >
              <div className="text-3xl mb-2">{module.icon}</div>
              <h3 className={`font-bold text-lg ${activeModule === module.id ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {module.title}
              </h3>
              <p className={`text-sm mt-1 ${activeModule === module.id ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                {module.description}
              </p>
              <div className={`text-xs mt-3 ${activeModule === module.id ? 'text-white/70' : 'text-gray-400'}`}>
                {module.topics.length} topics
              </div>
            </button>
          ))}
        </div>

        {/* Topic content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Topic list */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Topics</h4>
              {currentModule.topics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTopic(index)}
                  className={`w-full text-left p-3 rounded-xl mb-2 transition-all text-sm ${
                    activeTopic === index
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {completedTopics.has(`${activeModule}-${index}`) && <span className="text-green-500">✓</span>}
                    <span>{topic.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{currentTopic.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">{currentTopic.content}</p>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-6 border border-blue-100 dark:border-blue-900/50">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>💡</span> Key Points to Remember
                </h3>
                <ul className="space-y-3">
                  {currentTopic.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={toggleComplete}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    isCompleted
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25'
                  }`}
                >
                  {isCompleted ? '✓ Completed' : 'Mark as Complete'}
                </button>

                <div className="flex gap-2">
                  {activeTopic > 0 && (
                    <button
                      onClick={() => setActiveTopic(activeTopic - 1)}
                      className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                      ← Previous
                    </button>
                  )}
                  {activeTopic < currentModule.topics.length - 1 && (
                    <button
                      onClick={() => setActiveTopic(activeTopic + 1)}
                      className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                      Next →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkplaceSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI at <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Practical ways to use AI in your daily work to boost productivity and stand out
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {workplaceApplications.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{workplaceApplications[activeCategory].icon}</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {workplaceApplications[activeCategory].category}
              </h3>
            </div>

            <div className="space-y-4">
              {workplaceApplications[activeCategory].items.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick tip */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800/50">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Pro Tip</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Start small. Pick ONE area from above and implement it this week. Once it becomes a habit, 
                  move to the next. Consistent small improvements compound into massive results over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DailyTipsSection() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Daily AI <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Improvement Plan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A week-by-week plan to integrate AI into your daily routine and continuously improve
          </p>
        </div>

        {/* Day selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {dailyTips.map((tip, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                selectedDay === index
                  ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-300'
              }`}
            >
              {tip.day.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Selected tip */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
                {dailyTips[selectedDay].category}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{dailyTips[selectedDay].day}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{dailyTips[selectedDay].title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{dailyTips[selectedDay].tip}</p>
          </div>
        </div>

        {/* All tips overview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dailyTips.map((tip, index) => (
            <div
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`p-5 rounded-xl cursor-pointer transition-all hover:scale-[1.02] ${
                selectedDay === index
                  ? 'bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  selectedDay === index ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>{tip.day}</span>
                <span className={`text-xs ${selectedDay === index ? 'text-white/70' : 'text-gray-400'}`}>{tip.category}</span>
              </div>
              <h4 className={`font-semibold ${selectedDay === index ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {tip.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  const [filter, setFilter] = useState('All');
  const types = ['All', ...new Set(resources.map(r => r.type))];
  const filtered = filter === 'All' ? resources : resources.filter(r => r.type === filter);

  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learning <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Curated tools, courses, and communities to accelerate your AI journey
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {types.map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === type
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filtered.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-medium">
                  {resource.type}
                </span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{resource.description}</p>
            </a>
          ))}
        </div>

        {/* Additional learning path */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl border border-purple-200 dark:border-purple-800/50 p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">🗺️ Recommended Learning Path</h3>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Understand AI Basics', duration: '1-2 weeks', desc: 'Learn what AI is, how ML works, and key terminology' },
                { step: 2, title: 'Use AI Tools Daily', duration: 'Ongoing', desc: 'Start using ChatGPT, Claude, or similar tools for everyday tasks' },
                { step: 3, title: 'Master Prompt Engineering', duration: '2-3 weeks', desc: 'Learn to write effective prompts for better AI outputs' },
                { step: 4, title: 'Explore Generative AI', duration: '2-4 weeks', desc: 'Try image generation, code generation, and content creation' },
                { step: 5, title: 'Build with Agents', duration: '4-6 weeks', desc: 'Create simple AI agents and automate workflows' },
                { step: 6, title: 'Share & Teach', duration: 'Ongoing', desc: 'Help others learn, write about your experiences, build community' }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{item.duration}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🚀</span>
          <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Learning Hub</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-6">
          Empowering you to understand and leverage AI for personal and professional growth. 
          The future belongs to those who learn to work with AI today.
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <span>Built with ❤️ for learners everywhere</span>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HeroSection setActiveSection={setActiveSection} />;
      case 'learn': return <LearningSection />;
      case 'workplace': return <WorkplaceSection />;
      case 'daily': return <DailyTipsSection />;
      case 'resources': return <ResourcesSection />;
      default: return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Theme toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {renderSection()}
      <Footer />
    </div>
  );
}
