// ============================================================
// AI LEARNING HUB - COMPREHENSIVE DATA
// ============================================================

export interface Module {
  id: string;
  title: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: Topic[];
}

export interface Topic {
  title: string;
  content: string;
  keyPoints: string[];
  example?: string;
  exercise?: string;
}

export interface CaseStudy {
  company: string;
  logo: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  aiType: string;
  color: string;
}

export interface AITool {
  name: string;
  category: string;
  description: string;
  bestFor: string;
  pricing: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  icon: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms: string[];
}

export interface PromptTemplate {
  id: string;
  title: string;
  category: string;
  prompt: string;
  explanation: string;
  output: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  category: 'milestone' | 'model' | 'tool' | 'concept';
}

export interface IndustryApp {
  industry: string;
  icon: string;
  color: string;
  applications: string[];
  tools: string[];
  roi: string;
  caseStudy: string;
}

export interface Certification {
  name: string;
  provider: string;
  level: string;
  duration: string;
  cost: string;
  topics: string[];
  url: string;
  icon: string;
}

// ============================================================
// LEARNING MODULES
// ============================================================

export const modules: Module[] = [
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals',
    icon: '🧠',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-700',
    description: 'Build a rock-solid foundation in Artificial Intelligence',
    level: 'Beginner',
    duration: '2-3 weeks',
    topics: [
      {
        title: 'What is Artificial Intelligence?',
        content: 'Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (acquiring information and rules), reasoning (using rules to reach conclusions), and self-correction. AI has evolved from simple rule-based systems to complex neural networks that can understand language, recognize images, and make decisions.',
        keyPoints: [
          'AI enables machines to learn from data and improve over time without explicit programming',
          'It encompasses machine learning, deep learning, natural language processing, and computer vision',
          'AI can be narrow/weak (task-specific like Siri) or general/strong (human-like, still theoretical)',
          'Modern AI breakthroughs are powered by large datasets, GPU computing, and transformer architectures',
          'The field was coined in 1956 at the Dartmouth Conference by John McCarthy'
        ],
        example: 'Think of AI like teaching a child to recognize animals. Instead of programming "if it has four legs and fur, it\'s a cat," you show thousands of cat photos and the AI learns the patterns itself — whiskers, ear shapes, eye positions — just like a child would.',
        exercise: 'List 5 tasks you do daily that could potentially be assisted by AI. For each, identify what type of AI capability would be needed (e.g., language understanding, image recognition, prediction).'
      },
      {
        title: 'Machine Learning: The Engine of Modern AI',
        content: 'Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data. Instead of being explicitly programmed with rules, ML systems identify patterns in data and make decisions with minimal human intervention. The quality and quantity of training data directly impacts model performance.',
        keyPoints: [
          'Supervised Learning: Training with labeled examples (e.g., spam detection with labeled emails)',
          'Unsupervised Learning: Finding hidden patterns in unlabeled data (e.g., customer segmentation)',
          'Reinforcement Learning: Learning through trial and error with reward signals (e.g., game-playing AI)',
          'Transfer Learning: Reusing a pre-trained model on a new but related problem (e.g., using image recognition for medical scans)',
          'Feature Engineering: The art of selecting and transforming variables to improve model performance'
        ],
        example: 'Netflix uses ML for recommendations. When you watch a movie, the system learns your preferences. It doesn\'t have rules like "user likes action movies." Instead, it analyzes patterns across millions of users to predict what you\'ll enjoy next — this is collaborative filtering, a type of ML.',
        exercise: 'Imagine you\'re building a spam email detector. What features (attributes) would you extract from emails? What type of ML would you use? How would you collect training data?'
      },
      {
        title: 'Deep Learning & Neural Networks',
        content: 'Deep Learning uses artificial neural networks with multiple layers (deep architectures) to model complex patterns. Inspired by the human brain\'s neural structure, these networks can automatically discover hierarchical representations from raw data — from simple edges in images to complex objects and scenes.',
        keyPoints: [
          'Neural networks consist of interconnected nodes (neurons) organized in layers: input, hidden, and output',
          'Deep learning uses many hidden layers — "deep" refers to the number of layers',
          'CNNs (Convolutional Neural Networks) excel at image and video processing',
          'RNNs and LSTMs handle sequential data like text, speech, and time series',
          'Transformers revolutionized NLP with self-attention mechanisms (basis of GPT, BERT)',
          'Training requires massive datasets and GPU/TPU computing power'
        ],
        example: 'A CNN analyzing a photo of a dog works hierarchically: Layer 1 detects edges and colors → Layer 2 detects shapes like circles and lines → Layer 3 detects features like eyes and noses → Layer 4 detects the overall "dog" pattern. Each layer builds on the previous one.',
        exercise: 'Draw a simple neural network on paper with 3 inputs, 1 hidden layer of 4 neurons, and 2 outputs. Calculate how many connections (weights) exist. Why do you think more layers can capture more complex patterns?'
      },
      {
        title: 'Natural Language Processing (NLP)',
        content: 'NLP is the branch of AI that enables machines to understand, interpret, and generate human language. It bridges the gap between human communication and computer understanding, powering everything from voice assistants to translation services and chatbots.',
        keyPoints: [
          'Tokenization: Breaking text into words, subwords, or characters',
          'Word Embeddings: Representing words as numerical vectors (Word2Vec, GloVe)',
          'Attention Mechanism: Allowing models to focus on relevant parts of input',
          'Transformer Architecture: The foundation of modern LLMs (GPT, BERT, T5)',
          'Applications: Translation, summarization, sentiment analysis, question answering, text generation'
        ],
        example: 'When Google Translate converts "The cat sat on the mat" to French, it doesn\'t translate word-by-word. The NLP model understands the entire sentence structure, context, and meaning, then generates the most natural French equivalent: "Le chat s\'est assis sur le tapis."',
        exercise: 'Try to identify NLP in your daily life: voice assistants, autocorrect, spam filters, search engines. How many NLP-powered interactions do you have in a typical day?'
      }
    ]
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    icon: '✨',
    color: 'purple',
    gradient: 'from-purple-500 to-purple-700',
    description: 'Master the art of creating with AI-powered generation',
    level: 'Beginner',
    duration: '3-4 weeks',
    topics: [
      {
        title: 'What is Generative AI?',
        content: 'Generative AI refers to AI systems that can create new, original content — text, images, music, code, video, and more — by learning patterns from vast amounts of training data. Unlike traditional AI that classifies or predicts, generative AI creates. It\'s the difference between AI that says "this is a cat" and AI that can draw a cat from scratch.',
        keyPoints: [
          'Generates new, original content rather than just analyzing or classifying existing data',
          'Powered by large foundation models trained on billions of parameters',
          'Can produce text (GPT), images (DALL-E), audio (MusicLM), video (Sora), and code (Copilot)',
          'Uses architectures like transformers, diffusion models, and GANs',
          'The "generative" in GenAI means it generates probability distributions over possible outputs'
        ],
        example: 'Traditional AI: "Is this image a cat or a dog?" → Classification. Generative AI: "Draw me a cat wearing a space suit on Mars" → Creation. The model has never seen this exact image but combines learned concepts of cats, space suits, and Mars to create something new.',
        exercise: 'Open ChatGPT or Claude and ask it to write a short story about a robot learning to paint. Then ask it to rewrite the same story in the style of Shakespeare. Notice how the same underlying knowledge produces completely different outputs based on your instructions.'
      },
      {
        title: 'Large Language Models (LLMs) Deep Dive',
        content: 'LLMs are AI models trained on massive text datasets (trillions of tokens) to understand and generate human-like text. They work by predicting the next token in a sequence, but at scale, this simple objective produces emergent capabilities like reasoning, coding, translation, and creative writing.',
        keyPoints: [
          'GPT-4 (OpenAI): 1.8T parameters, multimodal, excels at reasoning and coding',
          'Claude (Anthropic): Strong at analysis, long context (200K tokens), safety-focused',
          'Gemini (Google): Multimodal native, integrated with Google ecosystem',
          'Llama (Meta): Open-source, customizable, runs locally',
          'Mistral: Efficient European alternative, strong performance per parameter',
          'Context windows determine how much information the model can process at once',
          'Temperature controls creativity vs. determinism in outputs'
        ],
        example: 'When you type "The capital of France is" into an LLM, it doesn\'t look up a database. It predicts that "Paris" is the most likely next token based on patterns learned from billions of texts. This prediction capability, scaled up, enables everything from essay writing to code generation.',
        exercise: 'Compare the same prompt across 2-3 different AI tools (ChatGPT, Claude, Gemini). Note differences in tone, accuracy, creativity, and formatting. Why do you think they differ?'
      },
      {
        title: 'Prompt Engineering Mastery',
        content: 'Prompt engineering is the systematic practice of crafting inputs to get optimal outputs from AI models. It\'s part art, part science — combining clear communication, structured thinking, and iterative refinement. Master prompters can extract 10x more value from the same AI tools.',
        keyPoints: [
          'Zero-shot: Direct instruction without examples ("Summarize this article")',
          'Few-shot: Providing examples to guide the output format and style',
          'Chain-of-Thought: Asking the model to reason step-by-step before answering',
          'Role-playing: Setting a persona ("You are a senior data analyst...")',
          'Structured output: Requesting JSON, tables, or specific formats',
          'System prompts: Setting persistent instructions for the conversation',
          'Iterative refinement: Improving prompts based on initial outputs'
        ],
        example: 'BAD PROMPT: "Write about marketing"\nBETTER: "Write a 500-word blog post about email marketing strategies for small e-commerce businesses. Include 3 specific examples, use a conversational tone, and end with a call-to-action."\nBEST: "You are a marketing consultant with 15 years of experience in e-commerce. Write a 500-word blog post about email marketing strategies specifically for small businesses with under $1M revenue. Include: (1) segmentation tactics, (2) automation workflows, (3) A/B testing approaches. Use a friendly, authoritative tone. Include real-world examples from companies like Warby Parker or Glossier. End with 3 actionable takeaways."',
        exercise: 'Take a simple task (writing an email) and create 3 versions of a prompt: basic, intermediate, and expert-level. Compare the outputs. What specific elements made the expert prompt better?'
      },
      {
        title: 'Multimodal AI & Content Generation',
        content: 'Multimodal AI systems can process and generate multiple types of content simultaneously — combining text, images, audio, and video understanding. This enables richer interactions and more versatile applications, from describing images to generating videos from text descriptions.',
        keyPoints: [
          'Image Generation: DALL-E 3, Midjourney, Stable Diffusion create images from text',
          'Video Generation: Sora, Runway Gen-2, Pika create videos from descriptions',
          'Audio Generation: ElevenLabs, MusicLM create speech and music',
          'Vision-Language Models: GPT-4V, Gemini can analyze images alongside text',
          '3D Generation: Creating 3D models from text or images',
          'Cross-modal: Converting between modalities (text-to-speech, image-to-text)'
        ],
        example: 'An architect uses multimodal AI: describes a building concept in text → generates concept images with DALL-E → refines with Midjourney → creates a video walkthrough with Sora → generates ambient sound for the presentation. All from text descriptions, in under an hour.',
        exercise: 'Use an image generation tool to create 3 images with the same concept but different styles (photorealistic, cartoon, oil painting). Then write a description of each as if you were an art critic. How does the AI interpret style instructions?'
      }
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    icon: '🤖',
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-700',
    description: 'Build autonomous AI agents that plan, reason, and act',
    level: 'Intermediate',
    duration: '4-6 weeks',
    topics: [
      {
        title: 'What is Agentic AI?',
        content: 'Agentic AI refers to AI systems that can autonomously plan, reason, and take actions to achieve complex goals. Unlike simple chatbots that respond to individual prompts, agents can break down complex tasks into subtasks, use external tools, maintain memory across interactions, and execute multi-step workflows with minimal human oversight.',
        keyPoints: [
          'Agents can plan and execute multi-step tasks autonomously',
          'They use tools like web search, code execution, APIs, and databases',
          'Memory systems (short-term and long-term) allow agents to maintain context',
          'Agents can collaborate with each other in multi-agent systems',
          'The agent loop: Perceive → Think → Act → Observe → Reflect → Repeat',
          'Human-in-the-loop patterns ensure safety and quality control'
        ],
        example: 'Simple AI: You ask "What\'s the weather?" → It answers.\nAgentic AI: You say "Plan my weekend trip to NYC" → It searches flights, compares hotels, checks weather, builds an itinerary, books reservations, and adds everything to your calendar — all autonomously, asking for confirmation at key decision points.',
        exercise: 'Think of a complex task you do weekly (e.g., preparing a report). Break it down into subtasks. Which could an AI agent handle autonomously? Which need human judgment? Where would you want approval checkpoints?'
      },
      {
        title: 'Agent Architecture & Design Patterns',
        content: 'Modern AI agents follow sophisticated architectures that combine reasoning, tool use, memory, and planning. Understanding these patterns is crucial for building effective agents and knowing when to use them.',
        keyPoints: [
          'ReAct (Reasoning + Acting): Agent reasons about what to do, then acts, then observes results',
          'Plan-and-Execute: Agent creates a full plan first, then executes step by step',
          'Tool Use: Agents call external APIs, search engines, code interpreters, databases',
          'RAG (Retrieval-Augmented Generation): Agents retrieve relevant information before responding',
          'Reflection: Agents evaluate their own outputs and self-correct',
          'Memory: Conversation history (short-term) + vector databases (long-term)',
          'Guardrails: Safety mechanisms to prevent harmful or incorrect actions'
        ],
        example: 'A customer support agent using ReAct pattern:\n1. THINK: "Customer is asking about refund status. I need to check their order."\n2. ACT: Call order API with customer ID\n3. OBSERVE: "Order #1234, shipped 3 days ago, no refund requested"\n4. THINK: "No refund in system. Customer might be confused about return policy."\n5. ACT: Respond with shipping status and return policy details',
        exercise: 'Design an AI agent for booking meeting rooms. Define: (1) What tools does it need? (2) What\'s its decision process? (3) What guardrails should it have? (4) When should it escalate to a human?'
      },
      {
        title: 'Multi-Agent Systems & Frameworks',
        content: 'Multi-agent systems involve multiple AI agents working together, each with specialized roles, to solve complex problems. This mirrors how human teams work — with specialists collaborating toward a common goal.',
        keyPoints: [
          'LangChain/LangGraph: Build chains and stateful graphs of AI operations',
          'CrewAI: Define agent roles, goals, and collaboration patterns',
          'AutoGen (Microsoft): Multi-agent conversation framework',
          'Semantic Kernel (Microsoft): Enterprise-grade AI orchestration',
          'OpenAI Assistants API: Built-in tools for code, search, and file analysis',
          'Swarm (OpenAI): Lightweight multi-agent orchestration',
          'Agent protocols: MCP (Model Context Protocol) for tool standardization'
        ],
        example: 'A software development crew:\n- Product Manager Agent: Analyzes requirements, creates user stories\n- Architect Agent: Designs system architecture\n- Developer Agent: Writes code\n- Tester Agent: Creates and runs tests\n- Reviewer Agent: Reviews code quality\nAll communicate through a shared project board, with a human orchestrator approving major decisions.',
        exercise: 'Design a multi-agent system for content creation. What agents would you need? (e.g., Researcher, Writer, Editor, SEO Specialist, Fact-Checker). How would they communicate? What\'s the workflow?'
      },
      {
        title: 'Real-World Agent Applications',
        content: 'Agentic AI is being deployed across industries to automate complex workflows, from software development to scientific research to business operations. These real-world implementations show the transformative potential of agents.',
        keyPoints: [
          'GitHub Copilot Workspace: Agent that plans and implements code changes across files',
          'Devin (Cognition): Full-stack software engineering agent',
          'Research Agents: Scan papers, synthesize findings, generate hypotheses',
          'Data Analysis Agents: Process datasets, create visualizations, generate reports',
          'Sales Agents: Research prospects, draft personalized outreach, manage pipelines',
          'DevOps Agents: Monitor systems, diagnose issues, auto-remediate incidents',
          'Personal Assistants: Manage schedules, emails, travel, and tasks end-to-end'
        ],
        example: 'Klarna (fintech company) deployed an AI assistant that handles 2/3 of customer service chats — 2.3 million conversations in its first month. It resolves issues in 2 minutes vs. 11 minutes for human agents, with equal customer satisfaction. This is agentic AI in production at scale.',
        exercise: 'Identify 3 workflows in your organization that involve multiple steps, tools, and decisions. For each, design an agent that could automate it. What tools would it need? What decisions should remain human?'
      }
    ]
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    icon: '⚙️',
    color: 'orange',
    gradient: 'from-orange-500 to-orange-700',
    description: 'Build production-ready AI applications and systems',
    level: 'Advanced',
    duration: '6-8 weeks',
    topics: [
      {
        title: 'RAG (Retrieval-Augmented Generation)',
        content: 'RAG combines the power of LLMs with external knowledge retrieval. Instead of relying solely on training data, RAG systems fetch relevant documents from a knowledge base before generating responses, ensuring accuracy and up-to-date information.',
        keyPoints: [
          'Embeddings: Convert text into numerical vectors for similarity search',
          'Vector Databases: Pinecone, Weaviate, Chroma, Milvus store embeddings',
          'Chunking: Split documents into optimal sizes for retrieval',
          'Retrieval: Find relevant chunks using semantic similarity',
          'Augmentation: Inject retrieved context into the prompt',
          'Generation: LLM produces answer using retrieved context',
          'Evaluation: Measure retrieval quality and answer accuracy'
        ],
        example: 'A company\'s internal Q&A bot: Employee asks "What\'s our parental leave policy?" → RAG retrieves the HR handbook section about leave → LLM generates a clear, specific answer citing the actual policy. Without RAG, the LLM would guess or give generic advice.',
        exercise: 'Design a RAG system for a law firm. What documents would you index? How would you chunk legal documents? What retrieval strategy would ensure the most relevant precedent is found?'
      },
      {
        title: 'Fine-Tuning & Model Customization',
        content: 'Fine-tuning adapts a pre-trained model to specific tasks or domains by training it on additional specialized data. This produces models that outperform general-purpose LLMs on specific tasks while maintaining broad capabilities.',
        keyPoints: [
          'Full Fine-Tuning: Update all model parameters (expensive, powerful)',
          'LoRA/QLoRA: Low-rank adaptation — train small adapters, freeze base model',
          'PEFT: Parameter-Efficient Fine-Tuning methods',
          'Data Quality > Quantity: 1000 high-quality examples can outperform 100K noisy ones',
          'Evaluation: Always test on held-out data to prevent overfitting',
          'RLHF: Reinforcement Learning from Human Feedback for alignment',
          'DPO: Direct Preference Optimization as an alternative to RLHF'
        ],
        example: 'A hospital fine-tunes Llama 2 on 5,000 radiology reports to create a model that generates structured reports from scan descriptions. The fine-tuned model uses correct medical terminology, follows hospital formatting standards, and flags critical findings — something the base model couldn\'t do reliably.',
        exercise: 'When would you choose fine-tuning vs. prompt engineering vs. RAG? Create a decision framework for a company deciding how to customize AI for their domain.'
      },
      {
        title: 'AI Application Architecture',
        content: 'Building production AI applications requires careful architecture decisions around model selection, infrastructure, caching, monitoring, and user experience. This topic covers the engineering patterns that make AI apps reliable and scalable.',
        keyPoints: [
          'Model Selection: Choosing the right model for cost, latency, and quality tradeoffs',
          'Caching: Semantic caching to reduce API costs and latency',
          'Streaming: Real-time token streaming for better UX',
          'Fallbacks: Graceful degradation when primary model fails',
          'Monitoring: Tracking quality, latency, cost, and user satisfaction',
          'Guardrails: Input/output filtering for safety and compliance',
          'Evaluation: Automated and human evaluation pipelines'
        ],
        example: 'A production chatbot architecture:\nUser Input → Guardrail Filter → Router (simple→small model, complex→large model) → RAG Retrieval → LLM Generation → Output Guardrail → Response\nWith caching for common queries, streaming for UX, and monitoring for quality metrics.',
        exercise: 'Design the architecture for a customer-facing AI assistant for an e-commerce company. Consider: model selection, cost optimization, safety guardrails, latency requirements, and monitoring.'
      }
    ]
  }
];

// ============================================================
// CASE STUDIES
// ============================================================

export const caseStudies: CaseStudy[] = [
  {
    company: 'Microsoft',
    logo: '🟦',
    title: 'Copilot: AI-Powered Productivity Across All Products',
    industry: 'Technology',
    challenge: 'Knowledge workers spend 57% of time on communication, 14% on finding information, and only 4% on decision-making. Microsoft needed to help users work smarter.',
    solution: 'Deployed AI Copilots across the entire product suite: Copilot in Windows for OS-level assistance, Copilot in Microsoft 365 for document/email/meeting help, GitHub Copilot for coding, and Security Copilot for threat analysis.',
    result: '70% of Copilot users report being more productive. GitHub Copilot increases developer coding speed by 55%. Microsoft 365 Copilot users finish tasks 29% faster on average. Over 100 million users now have access to Copilot features.',
    aiType: 'Generative AI + Agentic AI',
    color: 'blue'
  },
  {
    company: 'Google DeepMind',
    logo: '🔵',
    title: 'AlphaFold: Solving the 50-Year Protein Folding Problem',
    industry: 'Healthcare / Science',
    challenge: 'Predicting how proteins fold from their amino acid sequence is critical for drug discovery and disease understanding. This 50-year-old grand challenge in biology was unsolved.',
    solution: 'DeepMind created AlphaFold, a deep learning system that predicts protein 3D structures from amino acid sequences with atomic-level accuracy. Uses attention-based neural networks trained on known protein structures.',
    result: 'Predicted structures for 200+ million proteins (essentially all known proteins). Accuracy matches experimental methods. Accelerated drug discovery timelines from years to months. Won the 2024 Nobel Prize in Chemistry. Now used by 1M+ researchers globally.',
    aiType: 'Deep Learning',
    color: 'green'
  },
  {
    company: 'Klarna',
    logo: '🟪',
    title: 'AI Assistant Handles 2/3 of Customer Service Chats',
    industry: 'Finance / Fintech',
    challenge: 'Klarna handles millions of customer service conversations monthly across 17 markets in 35 languages. Scaling human agents was costly and inconsistent.',
    solution: 'Deployed an AI assistant built on OpenAI technology that handles customer inquiries autonomously — answering questions, processing returns, providing order status, and escalating complex cases to humans.',
    result: 'Handles 2.3 million conversations in first month (2/3 of all chats). Resolves issues in 2 minutes vs. 11 minutes for humans. Same customer satisfaction score as human agents. Equivalent to 700 full-time agents. Estimated $40M annual savings.',
    aiType: 'Generative AI + Agentic AI',
    color: 'purple'
  },
  {
    company: 'Amazon',
    logo: '🟧',
    title: 'AI-Powered Logistics & Recommendation Engine',
    industry: 'E-Commerce',
    challenge: 'Amazon needs to recommend the right products to 300M+ customers, optimize delivery routes for millions of packages daily, and predict demand across thousands of warehouses.',
    solution: 'Multi-layered AI system: Recommendation engine (35% of purchases come from recommendations), ML-powered demand forecasting, route optimization algorithms, computer vision for warehouse automation, and Alexa for voice commerce.',
    result: 'Recommendation engine drives 35% of total revenue. ML forecasting reduced stockout rates by 10%. Delivery route optimization saves millions of miles daily. Warehouse robots process 50% more items per hour. AI reduces delivery prediction errors by 30%.',
    aiType: 'Machine Learning + Computer Vision',
    color: 'orange'
  },
  {
    company: 'OpenAI',
    logo: '⬛',
    title: 'GPT-4: From Research to Real-World Impact',
    industry: 'Technology / Cross-Industry',
    challenge: 'Create an AI system that can assist humans across virtually any intellectual task — from writing code to analyzing legal documents to tutoring students.',
    solution: 'Developed GPT-4, a large multimodal model trained on vast datasets with RLHF alignment. Deployed through API to enable thousands of companies to build AI-powered products. Created ChatGPT as a consumer interface.',
    result: '200M+ weekly active users on ChatGPT. 2M+ developers building on the API. Used in 92% of Fortune companies. Powers applications from education (Khan Academy Khanmigo) to healthcare (diagnosis support) to legal (contract analysis).',
    aiType: 'Generative AI / Foundation Model',
    color: 'gray'
  },
  {
    company: 'IBM',
    logo: '🔷',
    title: 'watsonx: Enterprise AI Platform for Business',
    industry: 'Enterprise Technology',
    challenge: 'Enterprises need AI that\'s trustworthy, governed, and tailored to their specific data and compliance requirements. Off-the-shelf models don\'t meet enterprise needs.',
    solution: 'Built watsonx platform with three pillars: watsonx.ai for model training/fine-tuning, watsonx.data for data management, and watsonx.governance for AI lifecycle management. Focused on trust, transparency, and domain-specific customization.',
    result: 'Serving Fortune 500 companies across finance, healthcare, and government. Reduced model development time by 70%. AI governance framework adopted as industry standard. Processed 800B+ parameters in foundation models. Enabled regulated industries to adopt AI safely.',
    aiType: 'Enterprise AI Platform',
    color: 'blue'
  }
];

// ============================================================
// AI TOOLS COMPARISON
// ============================================================

export const aiTools: AITool[] = [
  { name: 'ChatGPT (OpenAI)', category: 'General AI Assistant', description: 'Versatile conversational AI for writing, analysis, coding, and creative tasks', bestFor: 'General-purpose tasks, writing, brainstorming', pricing: 'Free / $20/mo Plus', difficulty: 'Easy', rating: 4.8, icon: '💬' },
  { name: 'Claude (Anthropic)', category: 'General AI Assistant', description: 'Advanced AI with strong reasoning, long context, and safety focus', bestFor: 'Long documents, analysis, careful reasoning', pricing: 'Free / $20/mo Pro', difficulty: 'Easy', rating: 4.7, icon: '🟠' },
  { name: 'Gemini (Google)', category: 'General AI Assistant', description: 'Google\'s multimodal AI deeply integrated with Google services', bestFor: 'Google ecosystem users, multimodal tasks', pricing: 'Free / $20/mo Advanced', difficulty: 'Easy', rating: 4.5, icon: '🔵' },
  { name: 'GitHub Copilot', category: 'Code Assistant', description: 'AI pair programmer that suggests code in your IDE', bestFor: 'Software development, code completion', pricing: '$10-39/mo', difficulty: 'Easy', rating: 4.6, icon: '🐙' },
  { name: 'Cursor', category: 'Code Assistant', description: 'AI-first code editor with deep codebase understanding', bestFor: 'Full-stack development, refactoring', pricing: 'Free / $20/mo', difficulty: 'Medium', rating: 4.7, icon: '⚡' },
  { name: 'Midjourney', category: 'Image Generation', description: 'Premium AI image generation with stunning artistic quality', bestFor: 'Creative visuals, concept art, marketing', pricing: '$10-60/mo', difficulty: 'Easy', rating: 4.8, icon: '🎨' },
  { name: 'DALL-E 3', category: 'Image Generation', description: 'OpenAI\'s image generator with excellent prompt following', bestFor: 'Accurate text in images, precise visuals', pricing: 'Included with ChatGPT Plus', difficulty: 'Easy', rating: 4.5, icon: '🖼️' },
  { name: 'ElevenLabs', category: 'Audio/Voice', description: 'AI voice generation and cloning with natural-sounding speech', bestFor: 'Voiceovers, podcasts, accessibility', pricing: 'Free / $5-99/mo', difficulty: 'Easy', rating: 4.6, icon: '🎙️' },
  { name: 'LangChain', category: 'Developer Framework', description: 'Framework for building applications with LLMs', bestFor: 'Building AI apps, RAG systems, agents', pricing: 'Open source / Plus plan', difficulty: 'Hard', rating: 4.4, icon: '🦜' },
  { name: 'Hugging Face', category: 'ML Platform', description: 'Open-source ML model hub with thousands of pre-trained models', bestFor: 'Model deployment, fine-tuning, NLP tasks', pricing: 'Free / Pro $9/mo', difficulty: 'Medium', rating: 4.7, icon: '🤗' },
  { name: 'Notion AI', category: 'Productivity', description: 'AI writing and organization assistant built into Notion', bestFor: 'Note-taking, project management, writing', pricing: '$10/mo add-on', difficulty: 'Easy', rating: 4.3, icon: '📝' },
  { name: 'Perplexity', category: 'Research / Search', description: 'AI-powered search engine that cites sources', bestFor: 'Research, fact-checking, deep dives', pricing: 'Free / $20/mo Pro', difficulty: 'Easy', rating: 4.6, icon: '🔍' },
];

// ============================================================
// GLOSSARY
// ============================================================

export const glossary: GlossaryTerm[] = [
  { term: 'AI (Artificial Intelligence)', definition: 'The broad field of creating machines that can perform tasks requiring human-like intelligence, including learning, reasoning, and perception.', category: 'Core Concepts', relatedTerms: ['Machine Learning', 'Deep Learning'] },
  { term: 'Machine Learning (ML)', definition: 'A subset of AI where systems learn patterns from data to make predictions or decisions without being explicitly programmed for each scenario.', category: 'Core Concepts', relatedTerms: ['Supervised Learning', 'Neural Network'] },
  { term: 'Deep Learning', definition: 'A subset of ML using multi-layered neural networks to learn hierarchical representations of data, excelling at complex tasks like image and speech recognition.', category: 'Core Concepts', relatedTerms: ['Neural Network', 'CNN'] },
  { term: 'LLM (Large Language Model)', definition: 'A type of AI model trained on massive text data that can understand, generate, and reason about human language. Examples: GPT-4, Claude, Gemini.', category: 'Models', relatedTerms: ['Transformer', 'Token'] },
  { term: 'Transformer', definition: 'A neural network architecture using self-attention mechanisms, introduced in 2017. Foundation of modern LLMs like GPT, BERT, and T5.', category: 'Architecture', relatedTerms: ['Attention', 'LLM'] },
  { term: 'Token', definition: 'The basic unit of text processing in LLMs. Can be a word, subword, or character. "Hello world" = 2 tokens. Used to measure model input/output and pricing.', category: 'Core Concepts', relatedTerms: ['LLM', 'Context Window'] },
  { term: 'Context Window', definition: 'The maximum amount of text (in tokens) an LLM can process in a single interaction. GPT-4: 128K tokens, Claude: 200K tokens. Larger windows = more context.', category: 'Models', relatedTerms: ['Token', 'LLM'] },
  { term: 'Prompt', definition: 'The input text/instruction given to an AI model to generate a response. Quality of prompts directly affects quality of outputs.', category: 'Usage', relatedTerms: ['Prompt Engineering', 'System Prompt'] },
  { term: 'Prompt Engineering', definition: 'The practice of designing effective inputs to get optimal outputs from AI models. Includes techniques like few-shot, chain-of-thought, and role-playing.', category: 'Usage', relatedTerms: ['Prompt', 'Few-Shot', 'Chain-of-Thought'] },
  { term: 'RAG (Retrieval-Augmented Generation)', definition: 'A technique that enhances LLM responses by first retrieving relevant information from external knowledge bases, improving accuracy and reducing hallucinations.', category: 'Techniques', relatedTerms: ['Vector Database', 'Embedding'] },
  { term: 'Embedding', definition: 'A numerical representation of text (or other data) as a vector of numbers. Similar concepts have similar vectors, enabling semantic search and comparison.', category: 'Techniques', relatedTerms: ['Vector Database', 'RAG'] },
  { term: 'Vector Database', definition: 'A database optimized for storing and searching embeddings (vector representations). Enables fast semantic similarity search. Examples: Pinecone, Weaviate, Chroma.', category: 'Infrastructure', relatedTerms: ['Embedding', 'RAG'] },
  { term: 'Fine-Tuning', definition: 'The process of adapting a pre-trained model to a specific task or domain by training it on additional specialized data.', category: 'Techniques', relatedTerms: ['LoRA', 'Transfer Learning'] },
  { term: 'Hallucination', definition: 'When an AI model generates information that sounds confident but is factually incorrect or fabricated. A key challenge in LLM deployment.', category: 'Challenges', relatedTerms: ['RAG', 'Grounding'] },
  { term: 'Agent', definition: 'An AI system that can autonomously plan, use tools, and take actions to achieve goals. Goes beyond simple Q&A to multi-step task execution.', category: 'Architecture', relatedTerms: ['Tool Use', 'Multi-Agent'] },
  { term: 'Multi-Agent System', definition: 'A system where multiple AI agents with different roles collaborate to solve complex problems, similar to a team of human specialists.', category: 'Architecture', relatedTerms: ['Agent', 'Orchestration'] },
  { term: 'GAN (Generative Adversarial Network)', definition: 'Two neural networks competing against each other — a generator creates content, a discriminator evaluates it. Used for image generation.', category: 'Architecture', relatedTerms: ['Generative AI', 'Diffusion Model'] },
  { term: 'Diffusion Model', definition: 'An AI model that generates data by learning to reverse a gradual noising process. Powers modern image generators like DALL-E and Stable Diffusion.', category: 'Architecture', relatedTerms: ['Generative AI', 'Image Generation'] },
  { term: 'RLHF (Reinforcement Learning from Human Feedback)', definition: 'A training method where human raters rank AI outputs, and the model is fine-tuned to produce responses humans prefer. Key to making ChatGPT helpful and harmless.', category: 'Training', relatedTerms: ['Alignment', 'Fine-Tuning'] },
  { term: 'Temperature', definition: 'A parameter controlling the randomness of LLM outputs. Low temperature (0-0.3) = more deterministic, high temperature (0.7-1.0) = more creative and varied.', category: 'Usage', relatedTerms: ['LLM', 'Prompt'] },
  { term: 'Inference', definition: 'The process of using a trained AI model to make predictions or generate outputs on new data. Distinct from training.', category: 'Core Concepts', relatedTerms: ['Latency', 'Throughput'] },
  { term: 'Multimodal AI', definition: 'AI systems that can process and generate multiple types of data — text, images, audio, video — in a unified model.', category: 'Models', relatedTerms: ['GPT-4V', 'Gemini'] },
];

// ============================================================
// PROMPT LIBRARY
// ============================================================

export const promptLibrary: PromptTemplate[] = [
  {
    id: 'email-draft',
    title: 'Professional Email Draft',
    category: 'Writing',
    prompt: 'You are a professional communication expert. Draft a [formal/friendly] email to [recipient] about [topic]. Include: a clear subject line, concise body (under 200 words), specific call-to-action, and professional closing. Tone: [professional/warm/urgent]. Context: [relevant background].',
    explanation: 'This prompt sets a clear role, specifies format requirements, and provides context for personalized output.',
    output: 'Subject: Q3 Marketing Budget Review — Action Needed by Friday\n\nHi Sarah,\n\nI hope this email finds you well. I\'m writing to request your review of the Q3 marketing budget proposal before our leadership meeting next Monday.\n\nKey highlights:\n• Total proposed budget: $150K (12% increase from Q2)\n• New allocation: 30% to digital channels, up from 20%\n• Expected ROI improvement: 15-20% based on Q2 pilot data\n\nCould you review the attached proposal and share any concerns by EOD Friday? I\'d like to incorporate your feedback before presenting to the team.\n\nHappy to jump on a quick call if that\'s easier.\n\nBest regards,\n[Your name]',
    difficulty: 'Beginner' as const
  },
  {
    id: 'meeting-summary',
    title: 'Meeting Notes Summarizer',
    category: 'Productivity',
    prompt: 'Summarize the following meeting transcript into a structured format with:\n1. **Key Decisions Made** (bullet points)\n2. **Action Items** (with owners and deadlines)\n3. **Open Questions** (unresolved topics)\n4. **Next Steps** (what happens next)\n\nKeep it concise but comprehensive. Highlight any risks or blockers.\n\n[Meeting transcript here]',
    explanation: 'Structured output format ensures consistent, actionable meeting summaries every time.',
    output: '## Meeting Summary: Product Launch Planning\n**Date:** March 15, 2025 | **Attendees:** Product, Marketing, Engineering\n\n### Key Decisions\n• Launch date confirmed: April 28, 2025\n• Pricing set at $29/mo (Basic) and $79/mo (Pro)\n• Marketing budget approved: $50K for launch month\n\n### Action Items\n| Task | Owner | Deadline |\n|------|-------|----------|\n| Finalize landing page | Marketing (Lisa) | March 22 |\n| Complete load testing | Engineering (Raj) | March 25 |\n| Prepare press kit | Marketing (Tom) | March 28 |\n\n### Open Questions\n• Enterprise pricing tier — needs leadership input\n• International launch timing — pending localization review\n\n### Risks\n⚠️ Load testing timeline is tight — potential 3-day slip',
    difficulty: 'Beginner'
  },
  {
    id: 'code-review',
    title: 'Code Review Assistant',
    category: 'Development',
    prompt: 'You are a senior software engineer conducting a code review. Analyze the following code for:\n1. **Bugs & Logic Errors**: Any incorrect behavior\n2. **Security Issues**: Vulnerabilities or unsafe patterns\n3. **Performance**: Inefficient operations or bottlenecks\n4. **Code Quality**: Naming, structure, readability\n5. **Best Practices**: Language-specific conventions\n\nFor each issue found, provide:\n- Severity (Critical/High/Medium/Low)\n- Location (line/function)\n- Problem description\n- Suggested fix with code\n\nBe constructive and specific.\n\n```[language]\n[code here]\n```',
    explanation: 'Multi-dimensional review prompt ensures thorough analysis across all important code quality aspects.',
    output: '## Code Review: auth.js\n\n### 🔴 Critical\n**SQL Injection** (Line 23)\n```js\n// BAD\nconst query = `SELECT * FROM users WHERE email = \'${email}\'`;\n// FIX\nconst query = `SELECT * FROM users WHERE email = ?`;\ndb.execute(query, [email]);\n```\n\n### 🟡 High\n**Missing Error Handling** (Line 45)\nAsync operation lacks try/catch. Unhandled rejection could crash server.\n\n### 🟢 Medium\n**Magic Numbers** (Line 67)\nReplace `86400` with `SECONDS_PER_DAY` constant for readability.',
    difficulty: 'Intermediate'
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Insights',
    category: 'Analysis',
    prompt: 'You are a senior data analyst. Analyze the following dataset/metrics and provide:\n\n1. **Executive Summary** (2-3 sentences on key findings)\n2. **Key Metrics** (most important numbers with context)\n3. **Trends** (what\'s improving, declining, stable)\n4. **Anomalies** (anything unusual that needs attention)\n5. **Recommendations** (3 data-driven action items)\n6. **Questions for Deeper Analysis** (what else should we investigate)\n\nPresent findings in a clear, non-technical format suitable for leadership.\n\n[Data/metrics here]',
    explanation: 'Structured analytical framework transforms raw data into actionable business intelligence.',
    output: '## Q2 Sales Performance Analysis\n\n### Executive Summary\nQ2 revenue grew 23% YoY to $4.2M, driven primarily by enterprise segment expansion. However, customer acquisition cost increased 18%, signaling diminishing returns in current channels.\n\n### Key Metrics\n• Revenue: $4.2M (+23% YoY, +8% QoQ)\n• New Customers: 342 (-5% from Q1)\n• CAC: $285 (+18% from Q1)\n• LTV:CAC Ratio: 4.2x (healthy, target >3x)\n\n### Trends\n📈 Enterprise deals up 45% — product-market fit strengthening\n📉 SMB acquisition slowing — channel saturation?\n→ Retention stable at 94% monthly\n\n### ⚠️ Anomalies\n• June spike in churn (8% vs. normal 4%) — correlated with pricing change\n• APAC growth 3x faster than other regions\n\n### Recommendations\n1. Investigate June churn spike — was it pricing or product?\n2. Double down on APAC — allocate 20% more budget\n3. Test new SMB acquisition channels (partnerships, content)',
    difficulty: 'Intermediate'
  },
  {
    id: 'learning-plan',
    title: 'Personalized Learning Plan',
    category: 'Learning',
    prompt: 'Create a personalized learning plan for me based on:\n\n**Current Level:** [Beginner/Intermediate/Advanced]\n**Goal:** [What I want to achieve]\n**Time Available:** [Hours per week]\n**Timeline:** [How many weeks/months]\n**Learning Style:** [Visual/Hands-on/Reading/Video]\n**Resources:** [Budget for courses/tools]\n\nProvide:\n1. Week-by-week breakdown with specific topics\n2. Best resources for each topic (free + paid)\n3. Hands-on projects to build portfolio\n4. Milestones and self-assessment checkpoints\n5. Common pitfalls to avoid',
    explanation: 'Comprehensive learning plan prompt creates a structured, personalized roadmap with accountability.',
    output: '## 12-Week AI Engineering Learning Plan\n**Goal:** Become job-ready AI engineer | **Time:** 10 hrs/week\n\n### Phase 1: Foundations (Weeks 1-4)\n**Week 1-2: Python & Math Essentials**\n• Resources: Fast.ai "Practical Deep Learning" (free)\n• Project: Build a image classifier from scratch\n• ✅ Checkpoint: Can explain backpropagation\n\n**Week 3-4: ML Fundamentals**\n• Resources: Andrew Ng\'s ML Course (Coursera)\n• Project: Predict housing prices with sklearn\n• ✅ Checkpoint: Can explain bias-variance tradeoff\n\n### Phase 2: Deep Learning (Weeks 5-8)\n**Week 5-6: Neural Networks & CNNs**\n• Resources: "Dive into Deep Learning" (free book)\n• Project: Build a CNN for medical image classification\n\n### Phase 3: Production AI (Weeks 9-12)\n**Week 9-10: LLMs & RAG**\n• Resources: LangChain documentation + tutorials\n• Project: Build a RAG chatbot over your company docs\n\n### ⚠️ Common Pitfalls\n• Don\'t skip math foundations — you\'ll hit walls later\n• Don\'t just watch tutorials — build projects from day 1\n• Don\'t try to learn everything — specialize early',
    difficulty: 'Beginner'
  },
  {
    id: 'strategic-analysis',
    title: 'Strategic Business Analysis',
    category: 'Strategy',
    prompt: 'You are a McKinsey-level strategy consultant. Analyze the following business situation using structured frameworks:\n\n**Situation:** [Describe the business challenge]\n**Industry:** [Industry context]\n**Key Stakeholders:** [Who is affected]\n\nProvide analysis using:\n1. **Situation Assessment** (What\'s really happening?)\n2. **Root Cause Analysis** (Why is this happening? Use 5 Whys)\n3. **Options Analysis** (3 viable strategies with pros/cons)\n4. **Recommendation** (Best option with rationale)\n5. **Implementation Plan** (First 90 days)\n6. **Risk Mitigation** (What could go wrong and how to prevent it)\n\nBe specific, data-driven where possible, and actionable.',
    explanation: 'Consulting-framework prompt produces structured, executive-ready strategic analysis.',
    output: '## Strategic Analysis: Declining Market Share in SaaS\n\n### Situation Assessment\nCompany X has lost 15% market share over 18 months despite growing revenue 8% YoY. The market is growing 25% — we\'re expanding but being outpaced.\n\n### Root Cause Analysis (5 Whys)\n1. Why losing share? → New competitors offering AI-native products\n2. Why no AI features? → Engineering focused on legacy architecture\n3. Why legacy focus? → 70% of eng time on technical debt\n4. Why so much debt? → No architectural investment since 2019\n5. Why no investment? → Leadership prioritized short-term margins\n\n### Options\n| Option | Investment | Timeline | Market Share Impact |\n|--------|-----------|----------|-------------------|\n| A: AI Integration | $5M | 12 months | Recover 8-10% |\n| B: Acquire AI startup | $15M | 6 months | Recover 12-15% |\n| C: Build new AI-native product | $8M | 18 months | Gain 5-8% new |\n\n### Recommendation: Option B (Acquisition)\nFastest path to AI capability. Target: [specific companies].',
    difficulty: 'Advanced'
  }
];

// ============================================================
// QUIZ QUESTIONS
// ============================================================

export const quizQuestions: QuizQuestion[] = [
  { question: 'What is the primary difference between AI and Machine Learning?', options: ['AI is a subset of ML', 'ML is a subset of AI', 'They are the same thing', 'AI only works with text'], correct: 1, explanation: 'Machine Learning is a subset of Artificial Intelligence. AI is the broader concept of machines performing intelligent tasks, while ML specifically refers to systems that learn from data.', category: 'AI Fundamentals' },
  { question: 'What does "LLM" stand for?', options: ['Low-Level Machine', 'Large Language Model', 'Linear Logic Module', 'Learning Language Machine'], correct: 1, explanation: 'LLM stands for Large Language Model — AI models trained on massive text data that can understand and generate human language (e.g., GPT-4, Claude).', category: 'Generative AI' },
  { question: 'What is "prompt engineering"?', options: ['Writing code for AI prompts', 'Designing effective inputs to get optimal AI outputs', 'Building physical prompts for robots', 'Engineering hardware for AI'], correct: 1, explanation: 'Prompt engineering is the practice of crafting effective inputs (prompts) to get the best possible outputs from AI models. It\'s a key skill for working with LLMs.', category: 'Generative AI' },
  { question: 'What is RAG in the context of AI?', options: ['Random Access Generation', 'Retrieval-Augmented Generation', 'Rapid Algorithm Growth', 'Recursive Agent Graph'], correct: 1, explanation: 'RAG (Retrieval-Augmented Generation) enhances LLM responses by first retrieving relevant information from external knowledge bases, improving accuracy and reducing hallucinations.', category: 'AI Engineering' },
  { question: 'What is an "AI Agent"?', options: ['A customer service chatbot', 'An AI that can autonomously plan, use tools, and take actions', 'A sales representative using AI', 'A type of neural network'], correct: 1, explanation: 'An AI Agent is a system that can autonomously plan, reason, use tools, and execute multi-step tasks to achieve goals — going beyond simple Q&A interactions.', category: 'Agentic AI' },
  { question: 'What is a "token" in the context of LLMs?', options: ['A cryptocurrency', 'The basic unit of text processing (word, subword, or character)', 'A security credential', 'A type of memory'], correct: 1, explanation: 'A token is the basic unit of text that LLMs process. It can be a whole word, part of a word, or a character. Tokens are used to measure model capacity and API pricing.', category: 'Generative AI' },
  { question: 'What is "fine-tuning" in AI?', options: ['Making AI responses shorter', 'Adapting a pre-trained model to a specific task with additional data', 'Fixing bugs in AI code', 'Optimizing AI for speed'], correct: 1, explanation: 'Fine-tuning is the process of taking a pre-trained model and training it further on specialized data to adapt it to a specific task or domain.', category: 'AI Engineering' },
  { question: 'What does "multimodal AI" mean?', options: ['AI that works on multiple devices', 'AI that can process multiple types of data (text, image, audio, video)', 'AI with multiple users', 'AI that uses multiple languages'], correct: 1, explanation: 'Multimodal AI can process and generate multiple types of data — text, images, audio, video — in a unified system, enabling richer interactions.', category: 'Generative AI' },
  { question: 'What is "hallucination" in AI?', options: ['AI seeing images that aren\'t there', 'When AI generates confident but incorrect information', 'AI becoming self-aware', 'A type of AI error that crashes the system'], correct: 1, explanation: 'Hallucination occurs when an AI model generates information that sounds plausible and confident but is actually incorrect or fabricated. It\'s a key challenge in deploying LLMs.', category: 'Generative AI' },
  { question: 'What is the "context window" of an LLM?', options: ['The screen size for AI applications', 'The maximum amount of text the model can process at once', 'The time limit for a conversation', 'The number of users who can access the model'], correct: 1, explanation: 'The context window is the maximum amount of text (measured in tokens) that an LLM can process in a single interaction. Larger context windows allow the model to handle more information at once.', category: 'Generative AI' },
  { question: 'Which technique helps AI agents remember past interactions?', options: ['Caching', 'Memory systems (short-term and long-term)', 'Compression', 'Encryption'], correct: 1, explanation: 'AI agents use memory systems including short-term memory (conversation context) and long-term memory (vector databases) to maintain context across interactions and learn from experience.', category: 'Agentic AI' },
  { question: 'What is "temperature" in LLM settings?', options: ['How fast the model runs', 'A parameter controlling randomness/creativity of outputs', 'The model\'s processing heat', 'A measure of model size'], correct: 1, explanation: 'Temperature controls the randomness of LLM outputs. Low temperature (0-0.3) produces more deterministic, focused responses. High temperature (0.7-1.0) produces more creative, varied outputs.', category: 'Generative AI' },
];

// ============================================================
// TIMELINE
// ============================================================

export const timeline: TimelineEvent[] = [
  { year: '1950', title: 'Turing Test', description: 'Alan Turing proposes the "Imitation Game" — can machines think?', icon: '🧪', category: 'concept' },
  { year: '1956', title: 'AI is Born', description: 'John McCarthy coins "Artificial Intelligence" at Dartmouth Conference', icon: '🎓', category: 'milestone' },
  { year: '1966', title: 'ELIZA', description: 'First chatbot created at MIT — simulates a psychotherapist', icon: '💬', category: 'tool' },
  { year: '1997', title: 'Deep Blue', description: 'IBM\'s Deep Blue defeats world chess champion Garry Kasparov', icon: '♟️', category: 'milestone' },
  { year: '2011', title: 'Watson wins Jeopardy', description: 'IBM Watson defeats human champions on the TV quiz show', icon: '🏆', category: 'milestone' },
  { year: '2012', title: 'AlexNet', description: 'Deep learning revolution begins — CNN wins ImageNet by huge margin', icon: '🖼️', category: 'model' },
  { year: '2014', title: 'GANs Invented', description: 'Ian Goodfellow creates Generative Adversarial Networks', icon: '🎨', category: 'model' },
  { year: '2017', title: 'Transformers', description: '"Attention Is All You Need" paper introduces the Transformer architecture', icon: '⚡', category: 'model' },
  { year: '2018', title: 'GPT-1 & BERT', description: 'Pre-trained language models revolutionize NLP', icon: '📝', category: 'model' },
  { year: '2020', title: 'GPT-3', description: '175B parameter model demonstrates few-shot learning at scale', icon: '🚀', category: 'model' },
  { year: '2022', title: 'ChatGPT Launch', description: 'OpenAI releases ChatGPT — reaches 100M users in 2 months', icon: '💥', category: 'milestone' },
  { year: '2023', title: 'GPT-4 & Multimodal AI', description: 'GPT-4 brings reasoning + vision. AI goes mainstream in every industry.', icon: '🌟', category: 'model' },
  { year: '2024', title: 'Agentic AI Era', description: 'AI agents that plan, use tools, and act autonomously emerge. Claude 3, Gemini Ultra, open-source models flourish.', icon: '🤖', category: 'milestone' },
  { year: '2025', title: 'AI Everywhere', description: 'AI agents integrated into every workflow. Multi-agent systems, real-time video generation, and AI-native applications become standard.', icon: '🌍', category: 'milestone' },
];

// ============================================================
// INDUSTRY APPLICATIONS
// ============================================================

export const industries: IndustryApp[] = [
  {
    industry: 'Healthcare',
    icon: '🏥',
    color: 'red',
    applications: ['Medical image analysis (X-rays, MRIs)', 'Drug discovery & molecular design', 'Patient diagnosis assistance', 'Clinical trial optimization', 'Medical documentation (AI scribes)', 'Personalized treatment plans'],
    tools: ['AlphaFold', 'Google Med-PaLM', 'Nuance DAX', 'PathAI'],
    roi: '30-40% reduction in diagnostic time, 50% faster drug discovery',
    caseStudy: 'AlphaFold predicted structures for 200M+ proteins, accelerating drug development by years.'
  },
  {
    industry: 'Finance',
    icon: '💰',
    color: 'green',
    applications: ['Fraud detection & prevention', 'Algorithmic trading', 'Risk assessment & credit scoring', 'Regulatory compliance automation', 'Personalized financial advice', 'Market analysis & prediction'],
    tools: ['Bloomberg GPT', 'Kensho (S&P)', 'Stripe Radar', 'Klarna AI Assistant'],
    roi: '60% reduction in fraud losses, 3x faster loan processing',
    caseStudy: 'Klarna\'s AI assistant handles 2/3 of customer service, saving $40M annually.'
  },
  {
    industry: 'Education',
    icon: '🎓',
    color: 'blue',
    applications: ['Personalized learning paths', 'AI tutoring & homework help', 'Automated grading & feedback', 'Content generation for teachers', 'Language learning (conversation practice)', 'Accessibility (text-to-speech, translation)'],
    tools: ['Khanmigo (Khan Academy)', 'Duolingo Max', 'Coursera Coach', 'Socratic (Google)'],
    roi: '40% improvement in learning outcomes, 80% time savings for teachers',
    caseStudy: 'Khan Academy\'s Khanmigo provides personalized Socratic tutoring to millions of students.'
  },
  {
    industry: 'Software Development',
    icon: '💻',
    color: 'purple',
    applications: ['Code generation & completion', 'Bug detection & fixing', 'Code review automation', 'Documentation generation', 'Testing & QA automation', 'Architecture design assistance'],
    tools: ['GitHub Copilot', 'Cursor', 'Devin', 'Tabnine', 'Amazon CodeWhisperer'],
    roi: '55% faster development, 40% fewer bugs, 30% faster onboarding',
    caseStudy: 'GitHub Copilot users complete tasks 55% faster. Developers report higher satisfaction and less context-switching.'
  },
  {
    industry: 'Marketing & Sales',
    icon: '📢',
    color: 'orange',
    applications: ['Content creation (blogs, social media)', 'Personalized email campaigns', 'Customer segmentation', 'Ad copy generation & optimization', 'Lead scoring & qualification', 'Competitive analysis'],
    tools: ['Jasper', 'HubSpot AI', 'Salesforce Einstein', 'Copy.ai', 'Midjourney'],
    roi: '3x content output, 25% higher conversion rates, 50% faster campaign creation',
    caseStudy: 'Companies using AI for content creation report 3x output with consistent quality and brand voice.'
  },
  {
    industry: 'Manufacturing',
    icon: '🏭',
    color: 'gray',
    applications: ['Predictive maintenance', 'Quality control (visual inspection)', 'Supply chain optimization', 'Robotics & automation', 'Digital twins', 'Energy optimization'],
    tools: ['Siemens Industrial AI', 'Google DeepMind (energy)', 'C3 AI', 'Rockwell Automation'],
    roi: '25% reduction in downtime, 30% fewer defects, 15% energy savings',
    caseStudy: 'Google DeepMind reduced data center cooling energy by 40% using AI optimization.'
  },
  {
    industry: 'Legal',
    icon: '⚖️',
    color: 'indigo',
    applications: ['Contract analysis & review', 'Legal research automation', 'Document drafting', 'Due diligence acceleration', 'Compliance monitoring', 'Case outcome prediction'],
    tools: ['Harvey AI', 'Casetext (Thomson Reuters)', 'Ironclad', 'Luminance'],
    roi: '60% faster contract review, 80% reduction in legal research time',
    caseStudy: 'Harvey AI is being used by top law firms to analyze contracts, research case law, and draft legal documents.'
  },
  {
    industry: 'Customer Service',
    icon: '🎧',
    color: 'teal',
    applications: ['Intelligent chatbots & virtual assistants', 'Sentiment analysis', 'Ticket routing & prioritization', 'Knowledge base management', 'Voice assistants', 'Customer feedback analysis'],
    tools: ['Intercom Fin', 'Zendesk AI', 'Ada', 'Sierra AI', 'Klarna AI'],
    roi: '70% of queries resolved without humans, 60% faster resolution, 40% cost reduction',
    caseStudy: 'Intercom\'s Fin AI resolves 50%+ of support conversations automatically with high satisfaction scores.'
  }
];

// ============================================================
// CERTIFICATIONS
// ============================================================

export const certifications: Certification[] = [
  { name: 'Google Cloud Digital Leader', provider: 'Google', level: 'Beginner', duration: '20-40 hours', cost: 'Free learning / $99 exam', topics: ['AI/ML fundamentals', 'Google Cloud AI products', 'Data analytics', 'Digital transformation'], url: 'https://cloud.google.com/learn/certification/cloud-digital-leader', icon: '🔵' },
  { name: 'Microsoft AI-900: AI Fundamentals', provider: 'Microsoft', level: 'Beginner', duration: '15-30 hours', cost: 'Free learning / $99 exam', topics: ['AI workloads', 'ML principles', 'Computer vision', 'NLP', 'Conversational AI'], url: 'https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/', icon: '🟦' },
  { name: 'AWS Cloud Practitioner', provider: 'Amazon', level: 'Beginner', duration: '20-40 hours', cost: 'Free learning / $100 exam', topics: ['Cloud concepts', 'AWS AI services', 'Security', 'Architecture'], url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/', icon: '🟧' },
  { name: 'DeepLearning.AI - AI For Everyone', provider: 'Coursera', level: 'Beginner', duration: '6-10 hours', cost: 'Free audit / $49/mo', topics: ['AI fundamentals', 'Building AI projects', 'AI strategy', 'Working with AI teams'], url: 'https://www.coursera.org/learn/ai-for-everyone', icon: '🎓' },
  { name: 'IBM AI Engineering Professional', provider: 'IBM/Coursera', level: 'Intermediate', duration: '3-6 months', cost: '$49/mo', topics: ['ML with Python', 'Deep learning', 'Computer vision', 'NLP', 'Model deployment'], url: 'https://www.coursera.org/professional-certificates/ai-engineer', icon: '🔷' },
  { name: 'LangChain Developer Course', provider: 'LangChain', level: 'Intermediate', duration: '20-30 hours', cost: 'Free', topics: ['LLM applications', 'Chains', 'Agents', 'RAG', 'Memory'], url: 'https://www.langchain.com/langchain-developer-course', icon: '🦜' },
  { name: 'NVIDIA Deep Learning Institute', provider: 'NVIDIA', level: 'Advanced', duration: 'Varies', cost: 'Free - $500', topics: ['GPU computing', 'Deep learning', 'Transformers', 'MLOps', 'Optimization'], url: 'https://www.nvidia.com/en-us/deep-learning-ai/education/', icon: '🟢' },
  { name: 'Stanford ML Specialization', provider: 'Stanford/Coursera', level: 'Intermediate', duration: '3 months', cost: '$49/mo', topics: ['Supervised learning', 'Neural networks', 'Best practices', 'Unsupervised learning', 'Recommender systems'], url: 'https://www.coursera.org/specializations/machine-learning-introduction', icon: '🏛️' },
];

// ============================================================
// DAILY TIPS
// ============================================================

export const dailyTips = [
  { day: 'Monday', title: '🗺️ Start with a Plan', tip: 'Begin your week by using AI to review your goals and create a structured plan. Ask AI to help prioritize tasks based on impact and effort. Try: "Help me plan my week. Here are my top 5 goals..."', category: 'Planning', action: 'Use ChatGPT or Claude to create your weekly plan' },
  { day: 'Tuesday', title: '⚡ Automate Repetitive Tasks', tip: 'Identify one repetitive task and find an AI tool or workflow to automate it. Even saving 15 minutes daily adds up to 65+ hours per year. Common targets: email responses, data entry, report formatting.', category: 'Automation', action: 'Pick ONE task to automate this week' },
  { day: 'Wednesday', title: '📚 Learn One New Thing', tip: 'Spend 20 minutes exploring a new AI tool or feature. Try a new ChatGPT plugin, explore Claude artifacts, or test an image generator. Document what you learn in a personal AI journal.', category: 'Learning', action: 'Try one new AI tool or feature today' },
  { day: 'Thursday', title: '🤝 Collaborate with AI', tip: 'Use AI as a thinking partner today. Brainstorm ideas, challenge your assumptions, or get a second opinion on important decisions. The best results come from human + AI collaboration.', category: 'Collaboration', action: 'Have a brainstorming session with AI' },
  { day: 'Friday', title: '📊 Reflect & Optimize', tip: 'Review your week with AI assistance. Ask it to help you identify patterns in your productivity, what worked well, and what could improve. Create a "lessons learned" document.', category: 'Reflection', action: 'AI-assisted weekly review' },
  { day: 'Saturday', title: '🔬 Deep Dive', tip: 'Spend time on a longer learning project. Take an AI course module, build a small project, experiment with a new framework, or read research papers. Go deep on something that excites you.', category: 'Growth', action: 'Spend 1+ hour on a deep learning project' },
  { day: 'Sunday', title: '🌍 Share Knowledge', tip: 'Share what you learned this week with a colleague, write a short post, or help someone with their AI questions. Teaching others reinforces your own understanding and builds your network.', category: 'Community', action: 'Share one AI insight with someone' }
];

// ============================================================
// RESOURCES
// ============================================================

export const resources = [
  { title: 'OpenAI Playground', url: 'https://platform.openai.com/playground', description: 'Experiment with GPT models directly', type: 'Tool', free: true },
  { title: 'Anthropic Claude', url: 'https://claude.ai', description: 'Advanced AI assistant for complex tasks', type: 'Tool', free: true },
  { title: 'Hugging Face', url: 'https://huggingface.co', description: 'Open-source AI model hub and community', type: 'Platform', free: true },
  { title: 'LangChain Docs', url: 'https://python.langchain.com', description: 'Build applications with LLMs', type: 'Framework', free: true },
  { title: 'DeepLearning.AI', url: 'https://www.deeplearning.ai', description: 'Free and paid AI courses by Andrew Ng', type: 'Course', free: false },
  { title: 'The Batch Newsletter', url: 'https://www.deeplearning.ai/the-batch/', description: 'Weekly AI news digest by Andrew Ng', type: 'Newsletter', free: true },
  { title: 'Papers With Code', url: 'https://paperswithcode.com', description: 'ML papers with code implementations', type: 'Research', free: true },
  { title: 'Microsoft Learn AI', url: 'https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/', description: 'Free AI learning paths from Microsoft', type: 'Course', free: true },
  { title: 'Google AI Studio', url: 'https://aistudio.google.com', description: 'Build with Gemini models', type: 'Tool', free: true },
  { title: 'Fast.ai', url: 'https://www.fast.ai', description: 'Practical deep learning for coders', type: 'Course', free: true },
  { title: 'AI Engineering by Chip Huyen', url: 'https://huyenchip.com', description: 'Insights on ML systems design', type: 'Blog', free: true },
  { title: 'Latent Space Podcast', url: 'https://www.latent.space', description: 'AI engineering podcast and community', type: 'Podcast', free: true },
  { title: 'Replicate', url: 'https://replicate.com', description: 'Run ML models with an API', type: 'Platform', free: false },
  { title: 'Weights & Biases', url: 'https://wandb.ai', description: 'ML experiment tracking and visualization', type: 'Tool', free: true },
  { title: 'AI Snake Oil (Blog)', url: 'https://aisnakeoil.com', description: 'Critical analysis of AI claims', type: 'Blog', free: true },
  { title: 'Stanford CS229 Notes', url: 'https://cs229.stanford.edu', description: 'Stanford ML course materials (free)', type: 'Course', free: true },
];

// ============================================================
// ROI CALCULATOR DATA
// ============================================================

export const roiTasks = [
  { task: 'Writing emails & documents', avgTimeMinutes: 30, aiTimeReduction: 0.7, category: 'Writing' },
  { task: 'Research & information gathering', avgTimeMinutes: 60, aiTimeReduction: 0.6, category: 'Research' },
  { task: 'Data analysis & reporting', avgTimeMinutes: 45, aiTimeReduction: 0.5, category: 'Analysis' },
  { task: 'Meeting summaries & notes', avgTimeMinutes: 20, aiTimeReduction: 0.8, category: 'Meetings' },
  { task: 'Code writing & debugging', avgTimeMinutes: 120, aiTimeReduction: 0.4, category: 'Development' },
  { task: 'Content creation (marketing)', avgTimeMinutes: 90, aiTimeReduction: 0.6, category: 'Marketing' },
  { task: 'Customer support responses', avgTimeMinutes: 15, aiTimeReduction: 0.7, category: 'Support' },
  { task: 'Translation & localization', avgTimeMinutes: 45, aiTimeReduction: 0.8, category: 'Translation' },
  { task: 'Presentation creation', avgTimeMinutes: 60, aiTimeReduction: 0.5, category: 'Design' },
  { task: 'Contract & document review', avgTimeMinutes: 45, aiTimeReduction: 0.6, category: 'Legal' },
];
