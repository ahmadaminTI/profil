import { useState } from 'react';
import { TabType, ProjectItem } from '../types';

interface ProjectsProps {
  onNavigateTab: (tab: TabType) => void;
  onShowToast: (message: string) => void;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'omniflow',
    path: 'github.com/ahmad-amin/omniflow-core',
    title: 'OmniFlow Distributed Broker',
    stars: '1.2k',
    statusBadge: 'PRODUKSI AKTIF',
    statusType: 'production',
    description:
      'Sistem message broker terdistribusi dengan throughput tinggi, zero-copy packet handling, dan latensi sub-milidetik untuk streaming data skala besar.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX8eTRIK2SNMvxt7OU3-wRT0AtIKIMCrmgAZddHGRkmBHlR-4JkMPRxh2zR5qOYCkDp8tlfpwIed-WjKXzqHuJqqm6hbsiZuRcnuSz7DGa06H3VrbilB_ZYp2iNjwxiL_X0AoTwzNZBShXQD4iqq17xmrAGfcL2pMi_s3pX_jnWyaz6OaNgdhBWJXMWYcmYqh5FZ7_JaIBeCb6A-jvpsNnLa7a9l0VYAzeUA0idO9BdCNmDfm7TOv23Q',
    altText: 'Topologi arsitektur sistem broker terdistribusi OmniFlow',
    telemetryLeft: {
      icon: 'speed',
      text: '0.42ms Latensi P99',
    },
    telemetryRight: '2.4M msg/dtk',
    coverageLabel: 'Core Engine (Rust & Go)',
    coveragePercentage: 80,
    coverageGradient: 'from-blue-500 to-cyan-500',
    stackTags: [
      { name: 'Rust', level: 'Core' },
      { name: 'Go', level: 'Clustering' },
      { name: 'gRPC' },
      { name: 'Docker' },
    ],
    categories: ['systems-ai', 'cloud'],
  },
  {
    id: 'cyberpulse',
    path: 'github.com/ahmad-amin/pulse-telemetry',
    title: 'Pulse Telemetry Mobile App',
    statusBadge: 'STORES AKTIF',
    statusType: 'stores',
    description:
      'Aplikasi mobile monitoring performa cluster server secara real-time dengan sinkronisasi WebSocket dua arah, push alert darurat, dan visualisasi grafik interaktif.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqT3FC25WRVWCHHCbpEaaflDSUo1Y9b7mtNyKfxuvIzl5uhAMonNtB7z1uN5PohSV6-QMJS0G7LCUp8q063jfNAeQW4251R37cS1hNZgX8LVA3ztI4xVHxcrh8I856ZS5thmY-qbZz9ms4jKQPxDLAqPFaJX50FLc_fOb4C8ZO9y0gkftyxZhQSNtMpC299VXibc22kruwZXUtdS_GY8eOCzkI5A-wytb34DViTs9evVkJInxuiQL6oA',
    altText: 'Tampilan dashboard mobile analitik server Pulse',
    telemetryLeft: {
      icon: 'cloud_sync',
      text: '60 FPS UI Smoothness',
    },
    telemetryRight: 'Android & iOS',
    coverageLabel: 'Native Mobile & WebSocket',
    coveragePercentage: 82,
    coverageGradient: 'from-indigo-500 to-purple-500',
    stackTags: [
      { name: 'Kotlin', level: 'Android' },
      { name: 'Swift', level: 'iOS' },
      { name: 'TypeScript' },
    ],
    categories: ['mobile', 'fullstack'],
  },
  {
    id: 'neuroquery',
    path: 'github.com/ahmad-amin/neuro-search-engine',
    title: 'NeuroQuery AI Semantic Pipeline',
    statusBadge: 'ENTERPRISE',
    statusType: 'enterprise',
    description:
      'Pipeline pencarian semantik dokumen dengan indexing embedding vektor, multi-tenant isolation, caching query cerdas, dan integrasi LLM terstandarisasi.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAb6Iz2VzlDvIQ-k1zaYuPwNWvWBkrNRNdMPafFrIPpNmReT6n-DN_cxDY7cltyNPz5duhRV4Ipue-TcfSBv42jpel7ENPdM5SpTqxaIgoKE78uYelskmietTh6K1X5LRuDunQySkzmhTnahSmZubHtUsR7cA-OMhlfP6FC3Z0fD-QX0xqdcwkDV77OzygkA-29xFJToI8jkqaC2a3e73vJGSPhWsJCtHOgl1FbHRocDxWgBJBh3Tvcqg',
    altText: 'Graf relasi neural network dan embeddings vektor',
    telemetryLeft: {
      icon: 'psychology',
      text: 'Qdrant & FAISS Vector',
    },
    telemetryRight: '128 Dim Cache',
    coverageLabel: 'Python Async & PyTorch',
    coveragePercentage: 80,
    coverageGradient: 'from-emerald-500 to-teal-500',
    stackTags: [
      { name: 'Python', level: 'Backend' },
      { name: 'FastAPI' },
      { name: 'PyTorch' },
      { name: 'PostgreSQL' },
    ],
    categories: ['systems-ai', 'fullstack'],
  },
  {
    id: 'hypercloud',
    path: 'github.com/ahmad-amin/hypercloud-cli',
    title: 'HyperCloud Orchestration CLI',
    statusBadge: 'OPEN SOURCE',
    statusType: 'cli',
    description:
      'Utilitas CLI berkecepatan tinggi dikompilasi native tanpa dependensi eksternal, dirancang untuk orchestrasi multi-cluster Kubernetes otomatis.',
    telemetryLeft: {
      icon: 'terminal',
      text: 'Biner Mandiri 2.1 MB',
    },
    telemetryRight: 'POSIX & Windows',
    coverageLabel: 'C++20 & Systems Bash',
    coveragePercentage: 78,
    coverageGradient: 'from-blue-600 to-indigo-600',
    stackTags: [
      { name: 'C++', level: 'Core' },
      { name: 'Rust' },
      { name: 'Bash' },
    ],
    categories: ['cloud', 'systems-ai'],
    terminalSnippet: {
      command: 'hypercloud deploy --cluster=prod-asia-1',
      result: 'Topologi klaster sinkron dalam 14.8ms',
    },
  },
];

type ProjectCategory = 'all' | 'fullstack' | 'systems-ai' | 'mobile' | 'cloud';

export function Projects({ onNavigateTab, onShowToast }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.categories.includes(activeCategory);
  });

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto px-4 py-4 space-y-4">
      {/* Header */}
      <section className="pt-1 flex flex-col gap-1">
        <h1 className="font-display-hero text-xl font-bold text-on-surface tracking-tight">
          Portofolio Proyek Rekayasa
        </h1>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          Pilihan proyek terdistribusi, engine berkecepatan tinggi, dan aplikasi multi-platform yang dibangun dengan standar produksi industri.
        </p>
      </section>

      {/* Category Filter Chips */}
      <section className="overflow-x-auto no-scrollbar -mx-4 px-4 py-0.5">
        <div className="flex items-center gap-2 w-max">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Semua (4)
          </button>
          <button
            onClick={() => setActiveCategory('systems-ai')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'systems-ai'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Systems &amp; AI
          </button>
          <button
            onClick={() => setActiveCategory('fullstack')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'fullstack'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Full-Stack
          </button>
          <button
            onClick={() => setActiveCategory('mobile')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'mobile'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Mobile App
          </button>
          <button
            onClick={() => setActiveCategory('cloud')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === 'cloud'
                ? 'bg-primary text-[#040d21]'
                : 'bg-surface-container-low border border-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Cloud Native
          </button>
        </div>
      </section>

      {/* Projects List */}
      <section className="flex flex-col gap-3.5">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="bg-surface-container-low border border-surface-container-high/70 rounded-xl p-4 flex flex-col gap-3 shadow-sm hover:border-surface-container-highest transition-colors"
          >
            {/* Card Top Info Bar */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-on-surface-variant font-normal">
                {project.path}
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container text-emerald-400 font-mono text-[10px] font-medium border border-surface-container-high">
                {project.statusBadge}
              </span>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h2 className="font-display-hero text-base font-semibold text-on-surface tracking-tight">
                  {project.title}
                </h2>
                {project.stars && (
                  <div className="flex items-center gap-1 text-on-surface-variant font-mono text-xs">
                    <span className="material-symbols-outlined text-[15px] text-amber-400">star</span>
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Media/Terminal */}
            {project.image ? (
              <div className="relative w-full h-36 rounded-lg overflow-hidden border border-surface-container-high/60">
                <img
                  className="w-full h-full object-cover"
                  alt={project.altText || project.title}
                  src={project.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/90 via-transparent to-transparent flex items-end p-2.5">
                  <div className="flex items-center justify-between w-full text-xs font-medium text-on-surface">
                    <span className="flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[15px]">
                        {project.telemetryLeft.icon}
                      </span>
                      {project.telemetryLeft.text}
                    </span>
                    <span className="text-on-surface-variant text-[11px] font-mono">
                      {project.telemetryRight}
                    </span>
                  </div>
                </div>
              </div>
            ) : project.terminalSnippet ? (
              <div className="w-full bg-surface-container-lowest border border-surface-container-high/60 rounded-lg p-3 font-mono text-xs flex flex-col gap-1.5 text-on-surface-variant">
                <div className="flex items-center justify-between pb-1.5 border-b border-surface-container-high/50 text-[11px]">
                  <span className="text-on-surface-variant">Bash Session</span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <div className="pt-1 flex items-center gap-1.5 text-on-surface">
                  <span className="text-primary font-bold">$</span>
                  <span>{project.terminalSnippet.command}</span>
                </div>
                <div className="text-emerald-400 text-[11px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span>
                  <span>{project.terminalSnippet.result}</span>
                </div>
              </div>
            ) : null}

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {project.stackTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container border border-surface-container-high text-xs text-on-surface-variant font-mono"
                >
                  <span>{tag.name}</span>
                  {tag.level && (
                    <span className="text-[10px] text-primary font-sans font-medium">({tag.level})</span>
                  )}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => onShowToast(`Membuka demo: ${project.title}...`)}
                className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high border border-surface-container-high text-on-surface text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">open_in_new</span>
                <span>Demo Langsung</span>
              </button>
              <button
                onClick={() => onShowToast(`Membuka repositori: ${project.path}`)}
                className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high border border-surface-container-high text-on-surface text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">code</span>
                <span>Lihat Kode</span>
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Inquiry Footer Card */}
      <section className="bg-surface-container-low border border-surface-container-high/60 rounded-xl p-3.5 flex items-center justify-between shadow-sm mb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-surface-container border border-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[18px]">engineering</span>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-on-surface">Butuh Arsitektur Khusus?</h3>
            <p className="text-[11px] text-on-surface-variant">Diskusi implementasi &amp; konsultasi teknis</p>
          </div>
        </div>
        <button
          onClick={() => onNavigateTab('contact')}
          className="px-3 py-1.5 rounded-lg bg-surface-container border border-surface-container-high hover:bg-surface-container-highest text-primary text-xs font-medium flex items-center gap-1 transition-colors"
        >
          <span>Kontak</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </section>
    </div>
  );
}
