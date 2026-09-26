# 🚀 AI Learning Hub

> Your complete platform for mastering AI, Generative AI, and Agentic AI — with interactive learning modules, real-world case studies, GitHub repositories, hands-on exercises, and practical tools.

![AI Learning Hub](https://img.shields.io/badge/AI-Learning%20Hub-blue) ![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan) ![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)

## ✨ Features

### 📚 Learning Modules
- **AI Fundamentals** — ML, Deep Learning, Neural Networks, NLP
- **Generative AI** — LLMs, Prompt Engineering, Multimodal AI
- **Agentic AI** — Agent Architecture, Multi-Agent Systems, Real Applications
- **AI Engineering** — RAG, Fine-Tuning, Production Architecture

### 🐙 GitHub Integration
- **40+ curated repositories** organized by topic and difficulty
- **Module-specific GitHub links** for each learning topic
- **Real open-source projects** from Microsoft, OpenAI, Meta, Google, and more
- **Searchable & filterable** by level, language, and tags

### 🏢 Real-World Case Studies
- Microsoft Copilot, Google DeepMind AlphaFold, Klarna AI
- Amazon ML, OpenAI GPT-4, IBM watsonx
- Challenge → Solution → Results format

### 🎮 Interactive Features
- **Prompt Engineering Playground** — Ready-to-use templates with examples
- **Knowledge Quiz** — Test your understanding with instant feedback
- **ROI Calculator** — Calculate time and money saved with AI
- **Progress Tracking** — Track completed topics (saved to localStorage)
- **AI Glossary** — 22+ key terms with definitions and related concepts

### 🛠️ Tools & Resources
- **12+ AI Tools Compared** — With ratings, pricing, and best-for categories
- **8 Industries Covered** — Healthcare, Finance, Education, Dev, Marketing, etc.
- **AI Timeline** — From Turing (1950) to Agentic AI (2025)
- **Certification Guide** — 8 recognized certifications with details
- **16+ Curated Resources** — Free courses, tools, newsletters, and blogs
- **Daily Tips** — 7-day AI improvement plan with actionable tasks

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd ai-learning-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/ai-learning-hub.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click **Deploy**

3. **Done!** Your site is live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ai-learning-hub)

### Vercel Configuration

The `vercel.json` file is already configured with:
- ✅ SPA routing rewrites (all routes → index.html)
- ✅ Asset caching headers (1 year for /assets/*)
- ✅ Security headers (X-Content-Type-Options, X-Frame-Options)
- ✅ Vite framework detection

### Custom Domain

After deployment, you can add a custom domain:
1. Go to your Vercel project settings
2. Navigate to **Domains**
3. Add your domain (e.g., `ai-learning.example.com`)
4. Follow the DNS configuration instructions

### Environment Variables

No environment variables are required — all data is static. The app works entirely client-side.

## 📁 Project Structure

```
ai-learning-hub/
├── public/              # Static assets
├── src/
│   ├── data/
│   │   ├── content.ts   # All learning content, case studies, tools
│   │   └── github.ts    # Curated GitHub repositories
│   ├── App.tsx          # Main application with all sections
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── vercel.json          # Vercel deployment config
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── README.md            # This file
```

## 🎨 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework |
| **Vite 6** | Build tool & dev server |
| **Tailwind CSS 4** | Styling |
| **TypeScript** | Type safety |
| **Vercel** | Deployment & hosting |

## 📊 Content Overview

| Section | Items | Description |
|---------|-------|-------------|
| Learning Modules | 4 modules, 15+ topics | Structured learning paths |
| GitHub Repos | 40+ repositories | Curated open-source projects |
| Case Studies | 6 companies | Real-world AI implementations |
| AI Tools | 12+ tools | Compared and categorized |
| Industries | 8 sectors | AI applications by industry |
| Prompt Templates | 6 templates | Ready-to-use with examples |
| Quiz Questions | 12+ questions | Test your knowledge |
| Glossary Terms | 22+ terms | Key AI concepts defined |
| Certifications | 8 programs | Career advancement paths |
| Resources | 16+ links | Curated learning materials |
| Daily Tips | 7 days | Weekly improvement plan |

## 🔗 Key GitHub Repositories Featured

### AI Fundamentals
- [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) — 70k+ ⭐
- [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) — 60k+ ⭐
- [fastai/fastai](https://github.com/fastai/fastai) — 26k+ ⭐

### Generative AI
- [openai/openai-cookbook](https://github.com/openai/openai-cookbook) — 60k+ ⭐
- [huggingface/transformers](https://github.com/huggingface/transformers) — 135k+ ⭐
- [ollama/ollama](https://github.com/ollama/ollama) — 100k+ ⭐

### Agentic AI
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — 100k+ ⭐
- [microsoft/autogen](https://github.com/microsoft/autogen) — 40k+ ⭐
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — 25k+ ⭐

### AI Engineering
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — 40k+ ⭐
- [chroma-core/chroma](https://github.com/chroma-core/chroma) — 17k+ ⭐
- [langgenius/dify](https://github.com/langgenius/dify) — 60k+ ⭐

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Add more case studies
- Expand the glossary
- Add new prompt templates
- Include more GitHub repositories
- Improve accessibility
- Add translations

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

Content and inspiration from:
- [Microsoft Learn](https://learn.microsoft.com) — AI learning paths
- [IBM SkillsBuild](https://skillsbuild.org) — Enterprise AI training
- [Google AI](https://ai.google) — Research and education
- [DeepLearning.AI](https://www.deeplearning.ai) — Andrew Ng's courses
- [Hugging Face](https://huggingface.co) — Open-source AI community

---

**Built with ❤️ for AI learners everywhere**

*The future belongs to those who learn to work with AI today.*
