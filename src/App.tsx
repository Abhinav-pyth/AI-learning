import { useState, useEffect, useMemo } from 'react';
import {
  modules, caseStudies, aiTools, glossary, promptLibrary,
  quizQuestions, timeline, industries, certifications,
  dailyTips, resources, roiTasks
} from './data/content';
import { githubCollections, moduleGitHubLinks } from './data/github';

// ============================================================
// NAVIGATION
// ============================================================
const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'learn', label: 'Learn', icon: '📚' },
  { id: 'github', label: 'GitHub', icon: '🐙' },
  { id: 'timeline', label: 'Timeline', icon: '📅' },
  { id: 'cases', label: 'Case Studies', icon: '🏢' },
  { id: 'tools', label: 'AI Tools', icon: '🛠️' },
  { id: 'industries', label: 'Industries', icon: '🌍' },
  { id: 'playground', label: 'Playground', icon: '🎮' },
  { id: 'quiz', label: 'Quiz', icon: '🧪' },
  { id: 'glossary', label: 'Glossary', icon: '📖' },
  { id: 'roi', label: 'ROI Calc', icon: '💰' },
  { id: 'daily', label: 'Daily Tips', icon: '💡' },
  { id: 'certs', label: 'Certifications', icon: '🎓' },
  { id: 'resources', label: 'Resources', icon: '🔗' },
];

function Navigation({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (s: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          <button onClick={() => setActiveSection('home')} className="flex items-center gap-2 group">
            <span className="text-xl">🚀</span>
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">AI Learning Hub</span>
          </button>

          <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setMobileOpen(false); }}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================================
// HERO SECTION
// ============================================================
function HeroSection({ setActiveSection }: { setActiveSection: (s: string) => void }) {
  const stats = [
    { value: '4', label: 'Learning Modules', icon: '📚' },
    { value: '15+', label: 'Topics Covered', icon: '🎯' },
    { value: '6', label: 'Real Case Studies', icon: '🏢' },
    { value: '12+', label: 'AI Tools Compared', icon: '🛠️' },
    { value: '22+', label: 'AI Terms Defined', icon: '📖' },
    { value: '8', label: 'Industries Covered', icon: '🌍' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-14">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-300/15 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center py-12">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-gray-700 dark:text-gray-300">Your Complete AI Learning Platform</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-900 dark:text-white">Master </span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">AI</span>
          <br />
          <span className="text-gray-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl">Transform Your Career</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          From AI fundamentals to agentic systems — learn through interactive modules, real-world case studies from 
          Microsoft, Google, OpenAI & more, hands-on exercises, and practical tools you can use at work today.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <button onClick={() => setActiveSection('learn')} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Start Learning →
          </button>
          <button onClick={() => setActiveSection('playground')} className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-0.5">
            🎮 Try Playground
          </button>
          <button onClick={() => setActiveSection('quiz')} className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-0.5">
            🧪 Test Your Knowledge
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick access cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {[
            { section: 'learn', icon: '🧠', title: 'Learn AI', desc: 'Start from scratch', color: 'from-blue-500 to-blue-600' },
            { section: 'github', icon: '🐙', title: 'GitHub Repos', desc: 'Open source projects', color: 'from-gray-700 to-gray-900' },
            { section: 'cases', icon: '🏢', title: 'Case Studies', desc: 'Real companies', color: 'from-purple-500 to-purple-600' },
            { section: 'tools', icon: '🛠️', title: 'AI Tools', desc: 'Compare & choose', color: 'from-emerald-500 to-emerald-600' },
            { section: 'roi', icon: '💰', title: 'ROI Calc', desc: 'Measure impact', color: 'from-orange-500 to-orange-600' },
          ].map((card, i) => (
            <button key={i} onClick={() => setActiveSection(card.section)} className="group p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1 text-left">
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-lg mb-2`}>
                {card.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{card.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{card.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// LEARNING SECTION
// ============================================================
function LearningSection() {
  const [activeModule, setActiveModule] = useState('ai-fundamentals');
  const [activeTopic, setActiveTopic] = useState(0);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('completedTopics');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [showExercise, setShowExercise] = useState(false);

  useEffect(() => {
    localStorage.setItem('completedTopics', JSON.stringify([...completedTopics]));
  }, [completedTopics]);

  const currentModule = modules.find(m => m.id === activeModule)!;
  const currentTopic = currentModule.topics[activeTopic];
  const topicKey = `${activeModule}-${activeTopic}`;
  const isCompleted = completedTopics.has(topicKey);
  const totalTopics = modules.reduce((acc, m) => acc + m.topics.length, 0);
  const progress = Math.round((completedTopics.size / totalTopics) * 100);

  const toggleComplete = () => {
    setCompletedTopics(prev => {
      const next = new Set(prev);
      if (next.has(topicKey)) next.delete(topicKey);
      else next.add(topicKey);
      return next;
    });
  };

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            📚 Learning <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modules</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Structured learning paths from beginner to advanced, with hands-on exercises and real examples</p>
        </div>

        {/* Progress */}
        <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Progress</span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{completedTopics.size} of {totalTopics} topics completed</p>
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {modules.map(module => {
            const moduleCompleted = module.topics.filter((_, i) => completedTopics.has(`${module.id}-${i}`)).length;
            return (
              <button
                key={module.id}
                onClick={() => { setActiveModule(module.id); setActiveTopic(0); setShowExercise(false); }}
                className={`p-4 rounded-xl text-left transition-all ${
                  activeModule === module.id
                    ? `bg-gradient-to-br ${module.gradient} text-white shadow-lg scale-[1.02]`
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-[1.01]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{module.icon}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activeModule === module.id ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                    {module.level}
                  </span>
                </div>
                <h3 className={`font-bold text-sm ${activeModule === module.id ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{module.title}</h3>
                <p className={`text-xs mt-1 ${activeModule === module.id ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>{module.duration}</p>
                <div className={`mt-2 text-xs ${activeModule === module.id ? 'text-white/60' : 'text-gray-400'}`}>
                  {moduleCompleted}/{module.topics.length} topics
                </div>
              </button>
            );
          })}
        </div>

        {/* Topic content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Topics</h4>
              {currentModule.topics.map((topic, index) => {
                const key = `${activeModule}-${index}`;
                return (
                  <button
                    key={index}
                    onClick={() => { setActiveTopic(index); setShowExercise(false); }}
                    className={`w-full text-left p-2.5 rounded-lg mb-1 transition-all text-xs ${
                      activeTopic === index
                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {completedTopics.has(key) && <span className="text-green-500 text-sm">✓</span>}
                      <span className="leading-tight">{topic.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{currentTopic.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">{currentTopic.content}</p>

              {/* Key Points */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-5 border border-blue-100 dark:border-blue-900/50 mb-5">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
                  <span>💡</span> Key Points
                </h3>
                <ul className="space-y-2">
                  {currentTopic.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400 mt-0.5">{index + 1}</span>
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Example */}
              {currentTopic.example && (
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-5 border border-emerald-100 dark:border-emerald-900/50 mb-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
                    <span>🌟</span> Real-World Example
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">{currentTopic.example}</p>
                </div>
              )}

              {/* Exercise */}
              {currentTopic.exercise && (
                <div>
                  <button
                    onClick={() => setShowExercise(!showExercise)}
                    className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-3"
                  >
                    <span>{showExercise ? '▼' : '▶'}</span>
                    <span>🏋️ Hands-On Exercise</span>
                  </button>
                  {showExercise && (
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-5 border border-purple-100 dark:border-purple-900/50">
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{currentTopic.exercise}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                <button onClick={toggleComplete} className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  isCompleted
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25'
                }`}>
                  {isCompleted ? '✓ Completed' : 'Mark as Complete'}
                </button>
                <div className="flex gap-2">
                  {activeTopic > 0 && (
                    <button onClick={() => { setActiveTopic(activeTopic - 1); setShowExercise(false); }} className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      ← Prev
                    </button>
                  )}
                  {activeTopic < currentModule.topics.length - 1 && (
                    <button onClick={() => { setActiveTopic(activeTopic + 1); setShowExercise(false); }} className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Next →
                    </button>
                  )}
                </div>
              </div>

              {/* GitHub Resources for this module */}
              {moduleGitHubLinks[activeModule] && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    Related GitHub Repositories
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {moduleGitHubLinks[activeModule].map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-950/20 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
                      >
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">{link.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{link.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TIMELINE SECTION
// ============================================================
function TimelineSection() {
  const [filter, setFilter] = useState<string>('all');
  const categories = ['all', 'milestone', 'model', 'tool', 'concept'];
  const filtered = filter === 'all' ? timeline : timeline.filter(e => e.category === filter);

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            📅 History of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">From Turing's vision to today's AI revolution</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${filter === cat ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>
          {filtered.map((event, index) => (
            <div key={index} className={`relative flex items-start gap-4 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-12 md:pl-0`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{event.icon}</span>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">{event.year}</span>
                    <span className="text-xs text-gray-400 capitalize">{event.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">{event.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{event.description}</p>
                </div>
              </div>
              <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white dark:border-gray-900 z-10 mt-5"></div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CASE STUDIES SECTION
// ============================================================
function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState(0);
  const cs = caseStudies[activeCase];

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            🏢 Real-World <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">How leading companies are using AI to transform their businesses</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {caseStudies.map((study, index) => (
            <button key={index} onClick={() => setActiveCase(index)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCase === index ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
              <span className="mr-1">{study.logo}</span>{study.company}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{cs.logo}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cs.company}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{cs.industry} • {cs.aiType}</span>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{cs.title}</h4>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
              <h5 className="font-semibold text-red-700 dark:text-red-400 text-sm mb-1">🎯 Challenge</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">{cs.challenge}</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
              <h5 className="font-semibold text-blue-700 dark:text-blue-400 text-sm mb-1">💡 Solution</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">{cs.solution}</p>
            </div>
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30">
              <h5 className="font-semibold text-green-700 dark:text-green-400 text-sm mb-1">📈 Results</h5>
              <p className="text-sm text-gray-700 dark:text-gray-300">{cs.result}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// AI TOOLS SECTION
// ============================================================
function ToolsSection() {
  const [filterCat, setFilterCat] = useState('All');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');
  const categories = ['All', ...new Set(aiTools.map(t => t.category))];

  const filtered = useMemo(() => {
    let result = filterCat === 'All' ? [...aiTools] : aiTools.filter(t => t.category === filterCat);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    else result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [filterCat, sortBy]);

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            🛠️ AI Tools <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Comparison</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Find the right AI tool for your needs</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="flex flex-wrap gap-1">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilterCat(cat)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filterCat === cat ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-1">
            <button onClick={() => setSortBy('rating')} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${sortBy === 'rating' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}>⭐ Rating</button>
            <button onClick={() => setSortBy('name')} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${sortBy === 'name' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}>🔤 Name</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{tool.icon}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{tool.rating}</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{tool.name}</h3>
              <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">{tool.category}</span>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{tool.description}</p>
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 space-y-1">
                <p className="text-xs text-gray-500 dark:text-gray-400"><span className="font-medium">Best for:</span> {tool.bestFor}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400"><span className="font-medium">Price:</span> {tool.pricing}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400"><span className="font-medium">Difficulty:</span> {tool.difficulty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// INDUSTRIES SECTION
// ============================================================
function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const ind = industries[activeIndustry];

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            🌍 AI Across <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Industries</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">See how AI is transforming every sector of the economy</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((item, index) => (
            <button key={index} onClick={() => setActiveIndustry(index)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeIndustry === index ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
              <span className="mr-1">{item.icon}</span>{item.industry}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{ind.icon}</span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{ind.industry}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">🎯 Applications</h4>
              <ul className="space-y-2">
                {ind.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 mt-0.5">•</span>{app}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">🛠️ Key Tools</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {ind.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium">{tool}</span>
                ))}
              </div>
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30">
                <h5 className="font-semibold text-green-700 dark:text-green-400 text-xs mb-1">📈 ROI Impact</h5>
                <p className="text-xs text-gray-700 dark:text-gray-300">{ind.roi}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30">
            <h5 className="font-semibold text-purple-700 dark:text-purple-400 text-sm mb-1">📋 Case Study</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">{ind.caseStudy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROMPT PLAYGROUND
// ============================================================
function PlaygroundSection() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [filterCat, setFilterCat] = useState('All');
  const categories = ['All', ...new Set(promptLibrary.map(p => p.category))];
  const filtered = filterCat === 'All' ? promptLibrary : promptLibrary.filter(p => p.category === filterCat);

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            🎮 Prompt <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Playground</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Ready-to-use prompt templates with examples — copy, customize, and use</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(cat => (
            <button key={cat} onClick={() => { setFilterCat(cat); setSelectedPrompt(0); setShowOutput(false); }} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filterCat === cat ? 'bg-purple-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Prompt list */}
          <div className="lg:col-span-1 space-y-2">
            {filtered.map((prompt, index) => (
              <button
                key={prompt.id}
                onClick={() => { setSelectedPrompt(index); setShowOutput(false); }}
                className={`w-full text-left p-3 rounded-xl transition-all text-sm ${selectedPrompt === index ? 'bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-800' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900 dark:text-white text-xs">{prompt.title}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${prompt.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : prompt.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {prompt.difficulty}
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{prompt.category}</span>
              </button>
            ))}
          </div>

          {/* Prompt detail */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{filtered[selectedPrompt]?.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{filtered[selectedPrompt]?.explanation}</p>

              {/* Prompt template */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">📝 Prompt Template</label>
                  <button onClick={() => navigator.clipboard.writeText(filtered[selectedPrompt]?.prompt || '')} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
                    📋 Copy
                  </button>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <pre className="text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono">{filtered[selectedPrompt]?.prompt}</pre>
                </div>
              </div>

              {/* Show output toggle */}
              <button onClick={() => setShowOutput(!showOutput)} className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-sm hover:opacity-90 transition-opacity mb-4">
                {showOutput ? '▼ Hide Example Output' : '▶ Show Example Output'}
              </button>

              {showOutput && (
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30">
                  <label className="text-sm font-medium text-green-700 dark:text-green-400 mb-2 block">✨ Example Output</label>
                  <pre className="text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono leading-relaxed">{filtered[selectedPrompt]?.output}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// QUIZ SECTION
// ============================================================
function QuizSection() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', ...new Set(quizQuestions.map(q => q.category))];
  const questions = categoryFilter === 'All' ? quizQuestions : quizQuestions.filter(q => q.category === categoryFilter);
  const question = questions[currentQ];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    setAnswered(prev => prev + 1);
    if (index === question.correct) setScore(prev => prev + 1);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <section className="min-h-screen pt-20 pb-16 px-4 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
          <div className="text-6xl mb-4">{percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : '📚'}</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz Complete!</h2>
          <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{score}/{questions.length}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{percentage}% correct</p>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
            <div className={`h-full rounded-full transition-all ${percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            {percentage >= 80 ? 'Excellent! You have a strong understanding of AI concepts!' : percentage >= 60 ? 'Good job! Review the topics you missed and try again.' : 'Keep learning! Review the modules and retake the quiz.'}
          </p>
          <div className="flex gap-3 justify-center">
            <button onClick={resetQuiz} className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700">Try Again</button>
            <button onClick={() => { setCategoryFilter('All'); resetQuiz(); }} className="px-6 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm">All Categories</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            🧪 Test Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Knowledge</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Challenge yourself with AI quiz questions</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(cat => (
            <button key={cat} onClick={() => { setCategoryFilter(cat); resetQuiz(); }} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${categoryFilter === cat ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{currentQ + 1}/{questions.length}</span>
          <span className="text-sm font-bold text-green-600 dark:text-green-400">Score: {score}</span>
        </div>

        {/* Question */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">{question.category}</span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-3 mb-5">{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm ${
                  selectedAnswer === null
                    ? 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20'
                    : index === question.correct
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400'
                    : selectedAnswer === index
                    ? 'border-red-500 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400'
                    : 'border-gray-200 dark:border-gray-700 opacity-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    selectedAnswer !== null && index === question.correct ? 'bg-green-500 text-white' :
                    selectedAnswer === index && index !== question.correct ? 'bg-red-500 text-white' :
                    'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {selectedAnswer !== null && index === question.correct ? '✓' : selectedAnswer === index ? '✗' : String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-5 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
              <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">💡 Explanation:</span> {question.explanation}</p>
            </div>
          )}

          {selectedAnswer !== null && (
            <button onClick={nextQuestion} className="mt-5 w-full py-3 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors">
              {currentQ < questions.length - 1 ? 'Next Question →' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// GLOSSARY SECTION
// ============================================================
function GlossarySection() {
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('All');
  const categories = ['All', ...new Set(glossary.map(g => g.category))];

  const filtered = glossary.filter(g => {
    const matchSearch = g.term.toLowerCase().includes(search.toLowerCase()) || g.definition.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === 'All' || g.category === filterCat;
    return matchSearch && matchCat;
  });

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            📖 AI <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Glossary</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Key terms and concepts in AI — search and learn</p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="🔍 Search terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-wrap gap-1">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilterCat(cat)} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${filterCat === cat ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((term, index) => (
            <div key={index} className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">{term.term}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">{term.category}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{term.definition}</p>
              {term.relatedTerms.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {term.relatedTerms.map((related, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">{related}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-gray-500 dark:text-gray-400 py-8">No terms found matching your search.</p>}
      </div>
    </section>
  );
}

// ============================================================
// ROI CALCULATOR
// ============================================================
function ROISection() {
  const [selectedTasks, setSelectedTasks] = useState<Set<number>>(new Set([0, 1, 2]));
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(50);

  const toggleTask = (index: number) => {
    setSelectedTasks(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const calculations = useMemo(() => {
    let totalMinutesSaved = 0;
    selectedTasks.forEach(index => {
      const task = roiTasks[index];
      totalMinutesSaved += task.avgTimeMinutes * task.aiTimeReduction;
    });
    const hoursSavedPerDay = totalMinutesSaved / 60;
    const hoursSavedPerWeek = hoursSavedPerDay * 5;
    const hoursSavedPerMonth = hoursSavedPerDay * 22;
    const hoursSavedPerYear = hoursSavedPerDay * 260;
    const moneySavedPerMonth = (hoursSavedPerMonth) * hourlyRate;
    const moneySavedPerYear = (hoursSavedPerYear) * hourlyRate;
    const productivityGain = (hoursSavedPerDay / hoursPerDay) * 100;

    return { hoursSavedPerDay, hoursSavedPerWeek, hoursSavedPerMonth, hoursSavedPerYear, moneySavedPerMonth, moneySavedPerYear, productivityGain };
  }, [selectedTasks, hourlyRate, hoursPerDay]);

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            💰 AI ROI <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Calculator</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Calculate how much time and money AI can save you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Task selection */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Select Your Tasks</h3>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {roiTasks.map((task, index) => (
                <label key={index} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${selectedTasks.has(index) ? 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-700/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-600'}`}>
                  <input type="checkbox" checked={selectedTasks.has(index)} onChange={() => toggleTask(index)} className="w-4 h-4 rounded text-green-600" />
                  <div className="flex-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{task.task}</span>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>{task.avgTimeMinutes} min/day</span>
                      <span>•</span>
                      <span className="text-green-600 dark:text-green-400">{Math.round(task.aiTimeReduction * 100)}% faster with AI</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Work hours per day: {hoursPerDay}</label>
                <input type="range" min="4" max="12" value={hoursPerDay} onChange={(e) => setHoursPerDay(Number(e.target.value))} className="w-full mt-1" />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Your hourly rate: ${hourlyRate}</label>
                <input type="range" min="15" max="200" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} className="w-full mt-1" />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">📊 Your AI Savings</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold">{calculations.hoursSavedPerDay.toFixed(1)}h</div>
                  <div className="text-xs text-white/70">Saved per day</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold">{calculations.hoursSavedPerWeek.toFixed(0)}h</div>
                  <div className="text-xs text-white/70">Saved per week</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold">${calculations.moneySavedPerMonth.toFixed(0)}</div>
                  <div className="text-xs text-white/70">Saved per month</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold">${calculations.moneySavedPerYear.toLocaleString()}</div>
                  <div className="text-xs text-white/70">Saved per year</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white/10 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Productivity Gain</span>
                  <span className="text-xl font-bold">{calculations.productivityGain.toFixed(0)}%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-white rounded-full transition-all" style={{ width: `${Math.min(calculations.productivityGain, 100)}%` }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">💡 What You Could Do With Extra Time</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>📚 Learn a new skill: {Math.round(calculations.hoursSavedPerMonth / 5)} courses per month</li>
                <li>🏃 Exercise: {Math.round(calculations.hoursSavedPerWeek)} extra hours for fitness weekly</li>
                <li>👨‍👩‍👧 Family time: {calculations.hoursSavedPerWeek.toFixed(0)} more hours per week</li>
                <li>🚀 Side projects: {Math.round(calculations.hoursSavedPerMonth / 10)} projects per month</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DAILY TIPS SECTION
// ============================================================
function DailyTipsSection() {
  const today = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState(today === 0 ? 6 : today - 1);

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            💡 Daily AI <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Improvement Plan</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">A weekly routine to integrate AI into your life and grow continuously</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {dailyTips.map((tip, index) => (
            <button key={index} onClick={() => setSelectedDay(index)} className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedDay === index ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
              {tip.day.slice(0, 3)}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium">{dailyTips[selectedDay].category}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{dailyTips[selectedDay].day}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{dailyTips[selectedDay].title}</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{dailyTips[selectedDay].tip}</p>
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-100 dark:border-amber-900/30">
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">🎯 Today's Action: {dailyTips[selectedDay].action}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {dailyTips.map((tip, index) => (
            <button key={index} onClick={() => setSelectedDay(index)} className={`p-4 rounded-xl text-left transition-all ${selectedDay === index ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}>
              <span className={`text-xs font-medium ${selectedDay === index ? 'text-white/70' : 'text-gray-400'}`}>{tip.day}</span>
              <h4 className={`font-semibold text-sm mt-1 ${selectedDay === index ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{tip.title}</h4>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CERTIFICATIONS SECTION
// ============================================================
function CertificationsSection() {
  const [filterLevel, setFilterLevel] = useState('All');
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const filtered = filterLevel === 'All' ? certifications : certifications.filter(c => c.level === filterLevel);

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            🎓 AI <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Advance your career with recognized AI credentials</p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {levels.map(level => (
            <button key={level} onClick={() => setFilterLevel(level)} className={`px-4 py-2 rounded-lg text-sm font-medium ${filterLevel === level ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
              {level}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((cert, index) => (
            <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="group p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{cert.name}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{cert.provider}</span>
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${cert.level === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : cert.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {cert.level}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                <span>⏱️ {cert.duration}</span>
                <span>💰 {cert.cost}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {cert.topics.map((topic, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">{topic}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// RESOURCES SECTION
// ============================================================
function ResourcesSection() {
  const [filter, setFilter] = useState('All');
  const types = ['All', ...new Set(resources.map(r => r.type))];
  const filtered = filter === 'All' ? resources : resources.filter(r => r.type === filter);

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            🔗 Learning <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Curated tools, courses, and communities to accelerate your AI journey</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {types.map(type => (
            <button key={type} onClick={() => setFilter(type)} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${filter === type ? 'bg-cyan-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}>
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((resource, index) => (
            <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-600 hover:shadow-lg transition-all hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400">{resource.type}</span>
                {resource.free && <span className="text-xs text-green-600 dark:text-green-400 font-medium">Free ✓</span>}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{resource.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{resource.description}</p>
            </a>
          ))}
        </div>

        {/* Learning path */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-2xl border border-indigo-200 dark:border-indigo-800/50 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">🗺️ Recommended Learning Path</h3>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Understand AI Basics', duration: '1-2 weeks', desc: 'Learn what AI is, how ML works, key terminology' },
                { step: 2, title: 'Use AI Tools Daily', duration: 'Ongoing', desc: 'Start using ChatGPT, Claude, or similar tools for tasks' },
                { step: 3, title: 'Master Prompt Engineering', duration: '2-3 weeks', desc: 'Learn to write effective prompts for better outputs' },
                { step: 4, title: 'Explore Generative AI', duration: '2-4 weeks', desc: 'Try image generation, code generation, content creation' },
                { step: 5, title: 'Build with Agents', duration: '4-6 weeks', desc: 'Create simple AI agents and automate workflows' },
                { step: 6, title: 'Get Certified', duration: '4-8 weeks', desc: 'Earn a recognized certification to validate skills' },
                { step: 7, title: 'Share & Teach', duration: 'Ongoing', desc: 'Help others learn, write about experiences, build community' }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">{item.step}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">{item.duration}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{item.desc}</p>
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

// ============================================================
// GITHUB SECTION
// ============================================================
function GitHubSection() {
  const [activeCollection, setActiveCollection] = useState(0);
  const [levelFilter, setLevelFilter] = useState<string>('All');
  const [search, setSearch] = useState('');

  const collection = githubCollections[activeCollection];
  const filteredRepos = collection.repos.filter(repo => {
    const matchLevel = levelFilter === 'All' || repo.level === levelFilter;
    const matchSearch = search === '' || 
      repo.name.toLowerCase().includes(search.toLowerCase()) ||
      repo.description.toLowerCase().includes(search.toLowerCase()) ||
      repo.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchLevel && matchSearch;
  });

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            🐙 GitHub <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Repositories</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Curated open-source AI projects to learn from, contribute to, and build upon
          </p>
        </div>

        {/* Collection tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {githubCollections.map((col, index) => (
            <button
              key={index}
              onClick={() => { setActiveCollection(index); setLevelFilter('All'); setSearch(''); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCollection === index
                  ? 'bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
            >
              <span className="mr-1">{col.icon}</span>{col.title.split(' ')[0]} {col.title.split(' ').slice(1).join(' ')}
            </button>
          ))}
        </div>

        {/* Collection description */}
        <div className="text-center mb-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm">{collection.description}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="🔍 Search repos, tags, descriptions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <div className="flex gap-1">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
              <button
                key={level}
                onClick={() => setLevelFilter(level)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  levelFilter === level
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Repos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRepos.map((repo, index) => (
            <a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{repo.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {repo.owner}/{repo.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>⭐ {repo.stars}</span>
                      <span>•</span>
                      <span>{repo.language}</span>
                    </div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  repo.level === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  repo.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {repo.level}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{repo.description}</p>
              <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 mb-3">
                <p className="text-xs text-gray-700 dark:text-gray-300"><span className="font-semibold">💡 Why learn:</span> {repo.whyLearn}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {repo.tags.slice(0, 4).map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">{tag}</span>
                ))}
                {repo.tags.length > 4 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">+{repo.tags.length - 4}</span>
                )}
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs text-gray-400 group-hover:text-blue-500 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>View on GitHub →</span>
              </div>
            </a>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p className="text-lg mb-2">No repositories found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </div>
        )}

        {/* GitHub tips */}
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950/30 border border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span>💡</span> How to Learn from GitHub Repos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-blue-500">1.</span>
              <span><strong>Read the README</strong> — It explains the project's purpose and setup</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">2.</span>
              <span><strong>Study examples/</strong> — Most repos have example code to learn from</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">3.</span>
              <span><strong>Check issues</strong> — See real problems people face and how they're solved</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">4.</span>
              <span><strong>Read PRs</strong> — Understand how features are built and reviewed</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">5.</span>
              <span><strong>Fork & experiment</strong> — Clone repos and modify them to learn</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-500">6.</span>
              <span><strong>Contribute</strong> — Start with docs, then small bug fixes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="text-xl">🚀</span>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Learning Hub</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your complete platform for learning AI, Generative AI, and Agentic AI.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">Learning Paths</h4>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <a href="https://github.com/microsoft/ML-For-Beginners" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Microsoft ML Course</a>
              <a href="https://github.com/microsoft/generative-ai-for-beginners" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GenAI for Beginners</a>
              <a href="https://github.com/mlabonne/llm-course" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LLM Course</a>
              <a href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Prompt Guide</a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">Key Repositories</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-xs">
              <a href="https://github.com/langchain-ai/langchain" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LangChain</a>
              <a href="https://github.com/huggingface/transformers" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Transformers</a>
              <a href="https://github.com/ollama/ollama" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Ollama</a>
              <a href="https://github.com/openai/openai-cookbook" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">OpenAI Cookbook</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Built with ❤️ for learners everywhere • References: Microsoft Learn, IBM SkillsBuild, Google AI, DeepLearning.AI
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            <span>Deployed on</span>
            <span className="font-semibold text-gray-900 dark:text-white">▲ Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN APP
// ============================================================
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HeroSection setActiveSection={setActiveSection} />;
      case 'learn': return <LearningSection />;
      case 'github': return <GitHubSection />;
      case 'timeline': return <TimelineSection />;
      case 'cases': return <CaseStudiesSection />;
      case 'tools': return <ToolsSection />;
      case 'industries': return <IndustriesSection />;
      case 'playground': return <PlaygroundSection />;
      case 'quiz': return <QuizSection />;
      case 'glossary': return <GlossarySection />;
      case 'roi': return <ROISection />;
      case 'daily': return <DailyTipsSection />;
      case 'certs': return <CertificationsSection />;
      case 'resources': return <ResourcesSection />;
      default: return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <button onClick={() => setIsDark(!isDark)} className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 transition-transform text-lg" title={isDark ? 'Light Mode' : 'Dark Mode'}>
        {isDark ? '☀️' : '🌙'}
      </button>
      {renderSection()}
      <Footer />
    </div>
  );
}
