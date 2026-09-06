import { useState } from 'react';
import { LanguageSkill } from '../types';

const SKILLS_DATA: LanguageSkill[] = [
  {
    id: 'ts-js',
    name: 'TypeScript & JavaScript',
    percentage: 85,
    badge: 'ADVANCED',
    badgeType: 'prod',
    category: 'web',
    gradient: 'from-blue-500 to-indigo-500',
    glowColor: '#3b82f6',
    frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Bun'],
    extraBadge: 'Primary Web Stack',
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    percentage: 82,
    badge: 'CORE',
    badgeType: 'optimal',
    category: 'systems',
    gradient: 'from-cyan-500 to-blue-500',
    glowColor: '#06b6d4',
    frameworks: ['Microservices', 'gRPC', 'Goroutines', 'Fiber', 'Gin'],
    extraBadge: 'Cloud Backend',
  },
  {
    id: 'rust',
    name: 'Rust',
    percentage: 78,
    badge: 'SYSTEMS',
    badgeType: 'safety',
    category: 'systems',
    gradient: 'from-orange-500 to-amber-500',
    glowColor: '#f97316',
    frameworks: ['Tokio', 'Actix Web', 'Memory Safety', 'Wasm', 'CLI'],
    extraBadge: 'Low-Latency',
  },
  {
    id: 'python',
    name: 'Python',
    percentage: 82,
    badge: 'DATA & AI',
    badgeType: 'mastery',
    category: 'data',
    gradient: 'from-blue-400 to-emerald-400',
    glowColor: '#38bdf8',
    frameworks: ['FastAPI', 'PyTorch', 'Django', 'Data Pipelines'],
  },
  {
    id: 'cpp',
    name: 'C / C++',
    percentage: 78,
    badge: 'SYSTEMS',
    badgeType: 'systems',
    category: 'systems',
    gradient: 'from-blue-600 to-cyan-600',
    glowColor: '#2563eb',
    frameworks: ['Embedded Systems', 'Algoritma & Struktur Data', 'POSIX'],
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    percentage: 80,
    badge: 'MOBILE',
    badgeType: 'mobile',
    category: 'web',
    gradient: 'from-purple-500 to-pink-500',
    glowColor: '#a855f7',
    frameworks: ['Android Native', 'Jetpack Compose', 'Ktor Multiplatform'],
  },
  {
    id: 'swift',
    name: 'Swift',
    percentage: 76,
    badge: 'APPLE',
    badgeType: 'apple',
    category: 'web',
    gradient: 'from-orange-500 to-rose-500',
    glowColor: '#f43f5e',
    frameworks: ['iOS Native', 'SwiftUI', 'Combine Framework'],
  },
  {
    id: 'java',
    name: 'Java',
    percentage: 80,
    badge: 'ENTERPRISE',
    badgeType: 'enterprise',
    category: 'systems',
    gradient: 'from-red-500 to-orange-500',
    glowColor: '#ef4444',
    frameworks: ['Spring Boot', 'JVM Architecture', 'Hibernate'],
  },
  {
    id: 'php',
    name: 'PHP',
    percentage: 82,
    badge: 'BACKEND',
    badgeType: 'modern',
    category: 'web',
    gradient: 'from-indigo-400 to-purple-500',
    glowColor: '#818cf8',
    frameworks: ['Laravel 11', 'Modern PHP 8.3', 'REST APIs'],
  },
  {
    id: 'sql',
    name: 'Database (SQL & NoSQL)',
    percentage: 84,
    badge: 'DATABASE',
    badgeType: 'data',
    category: 'data',
    gradient: 'from-emerald-500 to-teal-500',
    glowColor: '#10b981',
    frameworks: ['PostgreSQL', 'Redis Caching', 'MongoDB', 'ClickHouse'],
  },
  {
    id: 'dart',
    name: 'Dart & Flutter',
    percentage: 80,
    badge: 'CROSS-PLATFORM',
    badgeType: 'cross',
    category: 'web',
    gradient: 'from-sky-500 to-blue-500',
    glowColor: '#0ea5e9',
    frameworks: ['Flutter SDK', 'Riverpod', 'Mobile & Desktop UI'],
  },
  {
    id: 'ruby',
    name: 'Ruby & Shell Scripting',
    percentage: 78,
    badge: 'DEVOPS',
    badgeType: 'auto',
    category: 'devops',
    gradient: 'from-rose-500 to-red-500',
    glowColor: '#e11d48',
    frameworks: ['Bash/Zsh Automation', 'Ruby on Rails', 'Docker CLI'],
  },
];

type CategoryFilter = 'all' | 'systems' | 'web' | 'data' | 'devops';

export function SkillsLanguages() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [isParetoModalOpen, setIsParetoModalOpen] = useState(false);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto px-4 py-4 space-y-4">
      {/* Overview Card: 80/20 Pareto Skill Distribution */}
      <div className="rounded-xl bg-surface-container-low border border-surface-container-high/80 p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="space-y-0.5">
            <span className="text-xs text-primary font-medium">
              Metodologi Kemampuan
            </span>
            <h2 className="font-display-hero text-lg font-bold text-on-surface">
              Rata-rata Penguasaan: 80%
            </h2>
            <p className="text-xs text-on-surface-variant">
              Pendekatan Pareto 80/20: Keahlian fungsional mendalam pada 12 bahasa pemrograman utama.
            </p>
          </div>
          <button
            onClick={() => setIsParetoModalOpen(true)}
            className="flex items-center gap-1 bg-surface-container hover:bg-surface-container-high border border-surface-container-high px-2.5 py-1 rounded-md text-primary text-xs font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[15px]">info</span>
            <span>Konsep 80/20</span>
          </button>
        </div>

        {/* Gauge & Metrics */}
        <div className="grid grid-cols-12 gap-3 items-center pt-4">
          {/* SVG Radial Gauge */}
          <div className="col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  className="text-surface-container"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="7"
                ></circle>
                <circle
                  className="text-primary transition-all duration-700"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="40"
                  stroke="currentColor"
                  strokeDasharray="251.32"
                  strokeDashoffset="50.26"
                  strokeLinecap="round"
                  strokeWidth="7"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="font-display-hero text-2xl text-on-surface font-bold">
                  80<span className="text-sm text-primary">%</span>
                </span>
                <span className="text-[9px] text-on-surface-variant uppercase font-medium">
                  Rata-rata
                </span>
              </div>
            </div>
            <span className="text-[11px] text-emerald-400 mt-2 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Produksi Siap Pakai
            </span>
          </div>

          {/* Metric Telemetry Bars */}
          <div className="col-span-7 flex flex-col justify-center space-y-2.5 pl-2">
            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-on-surface-variant">Cakupan Kebutuhan Riil</span>
                <span className="text-on-surface font-semibold font-mono">95%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-on-surface-variant">Efisiensi Implementasi</span>
                <span className="text-on-surface font-semibold font-mono">80%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="pt-1">
              <div className="bg-surface-container border border-surface-container-high p-2 rounded-md flex items-center justify-between">
                <span className="text-[11px] text-on-surface-variant">Profil Rekayasa</span>
                <span className="text-xs font-semibold text-secondary">T-Shaped Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="w-full overflow-x-auto no-scrollbar py-0.5">
        <div className="flex items-center gap-2 min-w-max">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Semua (12)
          </button>
          <button
            onClick={() => setActiveCategory('systems')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'systems'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Systems &amp; Backend
          </button>
          <button
            onClick={() => setActiveCategory('web')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'web'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Web &amp; Mobile
          </button>
          <button
            onClick={() => setActiveCategory('data')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'data'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Data &amp; AI
          </button>
          <button
            onClick={() => setActiveCategory('devops')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'devops'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            DevOps &amp; Tools
          </button>
        </div>
      </div>

      {/* Skills Card List */}
      <div className="flex flex-col space-y-2">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="bg-surface-container-low border border-surface-container-high/70 rounded-xl p-3.5 flex flex-col gap-2 transition-colors hover:border-surface-container-highest"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-on-surface">
                {skill.name}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs text-primary font-semibold">
                  {skill.percentage}%
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant border border-surface-container-high">
                  {skill.badge}
                </span>
              </div>
            </div>

            {/* Clean Progress Bar */}
            <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>

            {/* Frameworks Chips */}
            <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
              {skill.frameworks.map((fw, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-surface-container border border-surface-container-high text-on-surface-variant text-xs"
                >
                  {fw}
                </span>
              ))}
              {skill.extraBadge && (
                <span className="ml-auto text-[10px] text-emerald-400 font-medium">
                  {skill.extraBadge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pareto Principle Explanation Modal */}
      {isParetoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090d12]/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsParetoModalOpen(false);
          }}
        >
          <div className="w-full max-w-md bg-surface-container-low border border-surface-container-high rounded-xl p-5 shadow-2xl flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-surface-container-high/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
                <h3 className="font-display-hero text-base font-bold text-on-surface">
                  Filosofi 80% Pareto Polyglot
                </h3>
              </div>
              <button
                onClick={() => setIsParetoModalOpen(false)}
                className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <div className="space-y-2.5 text-xs text-on-surface-variant leading-relaxed">
              <p>
                <strong className="text-on-surface">Mengapa Rata-rata 80%?</strong> Dalam prinsip Pareto (80/20), 80% nilai dan solusi pada software engineering dicapai dengan menguasai 20% konsep esensial bahasa pemrograman (memory model, type system, concurrency, dan runtime behavior).
              </p>
              <p>
                Daripada mengklaim "100% master" yang tidak realistis pada satu bahasa, seorang <strong className="text-primary">Polyglot Architect</strong> menguasai 80% kemampuan mendalam di berbagai bahasa sehingga dapat:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-on-surface">
                <li>Memilih tool yang tepat untuk problem yang tepat (Right tool for the right job).</li>
                <li>Menghubungkan layanan lintas runtime (Rust untuk micro-latency, Go untuk API concurrency, TypeScript untuk UI dinamis).</li>
                <li>Cepat beradaptasi dengan stack baru tanpa hambatan kurva belajar tinggi.</li>
              </ul>
            </div>

            <button
              onClick={() => setIsParetoModalOpen(false)}
              className="mt-2 w-full py-2 rounded-lg bg-surface-container border border-surface-container-high text-on-surface text-xs font-medium hover:bg-surface-container-highest"
            >
              Mengerti &amp; Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
