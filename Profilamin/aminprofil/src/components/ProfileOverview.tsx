import { useState } from 'react';
import { TabType } from '../types';

interface ProfileOverviewProps {
  onNavigateTab: (tab: TabType) => void;
  onShowToast: (message: string) => void;
}

const BLUEPRINT_BANNER_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDez8rBimyeksgL-Pmm7Z6dYULsf3YO11mJUh5O7YjdzLMcIQKXS606KwAof5Qrtm0BoC9LTSw3Rl4KEqDTvZaZcAMGacBgRr3MrnLQWzY8XM2hELoDdRS8BkpTgFMlSBsp6b1H6GA3a7jRNl2BrrJrAXTP4--EyrdEcVMrjl5GPhS2q5L_s4JZFJvTWVeWw8C0QpzPQOnaFi5ImQOWkTI2Ldg7QjLMimnKkhGGnxTSe5LMjfn3Wi8jxg';

export function ProfileOverview({ onNavigateTab, onShowToast }: ProfileOverviewProps) {
  const [activeSnippetTab, setActiveSnippetTab] = useState<'rust' | 'ts' | 'go'>('rust');

  const handleDownloadCV = () => {
    onShowToast('Mengunduh CV: Ahmad_Amin_Polyglot_Architect.pdf');
  };

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto px-4 py-4 space-y-4">
      {/* Hero Profile Card */}
      <div className="rounded-xl bg-surface-container-low border border-surface-container-high/80 p-5 flex flex-col gap-4 shadow-sm">
        {/* Availability Badge */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Tersedia untuk Proyek &amp; Konsultasi</span>
          </div>
          <span className="text-xs text-on-surface-variant font-mono">
            Banda Aceh, ID
          </span>
        </div>

        {/* Name & Headline */}
        <div className="space-y-1.5">
          <h1 className="font-display-hero text-2xl font-bold text-on-surface tracking-tight">
            Ahmad Amin
          </h1>
          <h2 className="text-sm font-medium text-primary">
            Senior Polyglot Software Engineer &amp; Architect
          </h2>
          <p className="text-xs text-on-surface-variant leading-relaxed pt-1">
            Mahasiswa Teknologi Informasi di UIN Ar-Raniry Banda Aceh dengan fokus pada rekayasa sistem terdistribusi, backend performa tinggi, dan arsitektur multi-bahasa. Menerapkan filosofi 80/20 Pareto untuk menguasai inti ekosistem komputasi secara pragmatis dan berorientasi hasil.
          </p>
        </div>

        {/* Domain Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="px-2.5 py-1 rounded-md bg-surface-container border border-surface-container-high text-xs text-on-surface-variant font-medium">
            Distributed Systems
          </span>
          <span className="px-2.5 py-1 rounded-md bg-surface-container border border-surface-container-high text-xs text-on-surface-variant font-medium">
            Cloud Native &amp; K8s
          </span>
          <span className="px-2.5 py-1 rounded-md bg-surface-container border border-surface-container-high text-xs text-on-surface-variant font-medium">
            High-Concurrency
          </span>
        </div>
      </div>

      {/* Engineering Stats Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Stat 1 */}
        <div className="rounded-lg bg-surface-container-low p-4 border border-surface-container-high/70 flex flex-col justify-between">
          <div className="flex items-center justify-between text-on-surface-variant mb-2">
            <span className="text-xs font-medium">Index Penguasaan</span>
            <span className="material-symbols-outlined text-[18px] text-primary">analytics</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display-hero text-2xl font-bold text-on-surface">80%</span>
            <span className="text-xs text-on-surface-variant">Pareto Ratio</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-2 leading-tight">
            20% core runtime menghasilkan 80% dampak arsitektur nyata.
          </p>
        </div>

        {/* Stat 2 */}
        <div className="rounded-lg bg-surface-container-low p-4 border border-surface-container-high/70 flex flex-col justify-between">
          <div className="flex items-center justify-between text-on-surface-variant mb-2">
            <span className="text-xs font-medium">Bahasa Pemrograman</span>
            <span className="material-symbols-outlined text-[18px] text-secondary">code</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display-hero text-2xl font-bold text-on-surface">15+</span>
            <span className="text-xs text-on-surface-variant">Aktif</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-2 leading-tight">
            Rust, Go, TypeScript, Python, Kotlin, C++, Swift &amp; lainnya.
          </p>
        </div>

        {/* Stat 3 */}
        <div className="rounded-lg bg-surface-container-low p-4 border border-surface-container-high/70 flex flex-col justify-between">
          <div className="flex items-center justify-between text-on-surface-variant mb-2">
            <span className="text-xs font-medium">Repositori &amp; Modul</span>
            <span className="material-symbols-outlined text-[18px] text-tertiary">inventory_2</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display-hero text-2xl font-bold text-on-surface">48+</span>
            <span className="text-xs text-on-surface-variant">Proyek</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-2 leading-tight">
            Open-source libraries, microservices, dan tools skala produksi.
          </p>
        </div>

        {/* Stat 4 */}
        <div className="rounded-lg bg-surface-container-low p-4 border border-surface-container-high/70 flex flex-col justify-between">
          <div className="flex items-center justify-between text-on-surface-variant mb-2">
            <span className="text-xs font-medium">Standar Reliabilitas</span>
            <span className="material-symbols-outlined text-[18px] text-emerald-400">verified</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display-hero text-2xl font-bold text-on-surface">99.9%</span>
            <span className="text-xs text-on-surface-variant">Target SLA</span>
          </div>
          <p className="text-[11px] text-on-surface-variant mt-2 leading-tight">
            Desain fault-tolerant, auto-scaling, dan zero-downtime deploy.
          </p>
        </div>
      </div>

      {/* Code Showcase Tab (Clean Developer Terminal) */}
      <div className="rounded-xl bg-surface-container-lowest border border-surface-container-high/80 overflow-hidden shadow-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-3 py-2 bg-surface-container-low border-b border-surface-container-high/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
            <span className="ml-2 font-mono text-xs text-on-surface-variant">
              amin/polyglot-engine
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveSnippetTab('rust')}
              className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                activeSnippetTab === 'rust'
                  ? 'bg-surface-container text-primary font-medium'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              engine.rs
            </button>
            <button
              onClick={() => setActiveSnippetTab('ts')}
              className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                activeSnippetTab === 'ts'
                  ? 'bg-surface-container text-primary font-medium'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              client.ts
            </button>
            <button
              onClick={() => setActiveSnippetTab('go')}
              className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${
                activeSnippetTab === 'go'
                  ? 'bg-surface-container text-primary font-medium'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              broker.go
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-3.5 font-mono text-xs leading-relaxed overflow-x-auto text-on-surface-variant">
          {activeSnippetTab === 'rust' && (
            <pre className="text-on-surface">
              <code>
                <span className="text-purple-400">pub async fn</span>{' '}
                <span className="text-blue-400">dispatch_event</span>(
                <span className="text-yellow-300">&amp;self</span>, payload: EventPayload) -&gt; Result&lt;Status, EngineError&gt; &#123;{'\n'}
                {'  '}<span className="text-slate-400">// Zero-copy routing across worker threads</span>{'\n'}
                {'  '}<span className="text-purple-400">let</span> channel = <span className="text-yellow-300">self</span>.ring_buffer.acquire().<span className="text-blue-400">await</span>?;{'\n'}
                {'  '}channel.send(payload).<span className="text-blue-400">map_err</span>(EngineError::from)?;\n
                {'  '}<span className="text-purple-400">Ok</span>(Status::Dispatched &#123; latency_us: <span className="text-emerald-400">42</span> &#125;){'\n'}
                &#125;
              </code>
            </pre>
          )}
          {activeSnippetTab === 'ts' && (
            <pre className="text-on-surface">
              <code>
                <span className="text-purple-400">export async function</span>{' '}
                <span className="text-blue-400">subscribeTelemetry</span>(clusterId: <span className="text-yellow-300">string</span>) &#123;{'\n'}
                {'  '}<span className="text-slate-400">// Resilient WebSocket stream with exponential backoff</span>{'\n'}
                {'  '}<span className="text-purple-400">const</span> stream = <span className="text-purple-400">await</span> connectWebSocket(`/cluster/${'{clusterId}'}/metrics`);{'\n'}
                {'  '}<span className="text-purple-400">return</span> stream.pipe(filter(m =&gt; m.healthStatus === <span className="text-emerald-400">"OPTIMAL"</span>));{'\n'}
                &#125;
              </code>
            </pre>
          )}
          {activeSnippetTab === 'go' && (
            <pre className="text-on-surface">
              <code>
                <span className="text-purple-400">func</span>{' '}
                <span className="text-blue-400">HandleMessageBatch</span>(ctx context.Context, batch []Message) <span className="text-yellow-300">error</span> &#123;{'\n'}
                {'  '}g, ctx := errgroup.WithContext(ctx){'\n'}
                {'  '}<span className="text-purple-400">for</span> _, msg := <span className="text-purple-400">range</span> batch &#123;{'\n'}
                {'    '}m := msg{'\n'}
                {'    '}g.Go(<span className="text-purple-400">func</span>() <span className="text-yellow-300">error</span> &#123; <span className="text-purple-400">return</span> process(ctx, m) &#125;){'\n'}
                {'  '}&#125;{'\n'}
                {'  '}<span className="text-purple-400">return</span> g.Wait(){'\n'}
                &#125;
              </code>
            </pre>
          )}
        </div>
      </div>

      {/* Core Architecture Stacks Section */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">layers</span>
            <h2 className="font-display-hero text-base font-semibold text-on-surface">
              Arsitektur &amp; Ekosistem Utama
            </h2>
          </div>
          <button
            onClick={() => onNavigateTab('matrix')}
            className="text-xs text-primary hover:underline flex items-center gap-0.5"
          >
            Lihat semua
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>

        {/* Stack Card 1: Systems & Backend */}
        <div className="rounded-xl bg-surface-container-low border border-surface-container-high/70 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-surface-container flex items-center justify-center text-primary border border-surface-container-high">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-on-surface">Systems &amp; High-Throughput</h3>
                <p className="text-xs text-on-surface-variant">Rust, Go, C++, gRPC &amp; Kafka</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-container text-primary font-medium border border-surface-container-high">
              Core Stack
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {['Rust', 'Go', 'TypeScript', 'Python', 'C++', 'PostgreSQL'].map((lang) => (
              <span
                key={lang}
                className="px-2 py-0.5 rounded bg-surface-container border border-surface-container-high text-xs text-on-surface-variant font-mono"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Stack Card 2: Cloud Infrastructure */}
        <div className="rounded-xl bg-surface-container-low border border-surface-container-high/70 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-surface-container flex items-center justify-center text-secondary border border-surface-container-high">
                <span className="material-symbols-outlined text-[18px]">cloud</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-on-surface">Cloud Native &amp; DevOps</h3>
                <p className="text-xs text-on-surface-variant">Docker, Kubernetes, AWS &amp; GCP</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-container text-secondary font-medium border border-surface-container-high">
              Production
            </span>
          </div>

          <p className="text-xs text-on-surface-variant leading-relaxed">
            Berpengalaman dalam deployment multi-region, container orchestration, CI/CD pipeline otomatis, dan arsitektur microservices yang terisolasi aman.
          </p>
        </div>
      </div>

      {/* Production Topology Banner */}
      <div className="rounded-xl bg-surface-container-low border border-surface-container-high/70 p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-on-surface">
            Topologi Arsitektur Terdistribusi
          </span>
          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            99.99% Uptime
          </span>
        </div>

        <div className="w-full h-36 rounded-lg overflow-hidden relative border border-surface-container-high/50">
          <img
            className="w-full h-full object-cover"
            alt="Arsitektur infrastruktur terdistribusi"
            src={BLUEPRINT_BANNER_URL}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent flex items-end p-3">
            <span className="text-xs text-on-surface font-medium">
              Global Multi-Cluster Mesh Topology
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2 pt-1 pb-2">
        <button
          onClick={() => onNavigateTab('matrix')}
          className="w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-fixed-dim text-[#040d21] font-medium text-sm flex items-center justify-center gap-2 transition-colors active:scale-[0.99]"
        >
          <span className="material-symbols-outlined text-[18px]">hub</span>
          <span>Buka Matriks Skill Lengkap</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleDownloadCV}
            className="py-2 px-3 rounded-lg bg-surface-container border border-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">download</span>
            <span>Unduh Resume (PDF)</span>
          </button>
          <button
            onClick={() => onNavigateTab('contact')}
            className="py-2 px-3 rounded-lg bg-surface-container border border-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-emerald-400">chat</span>
            <span>Hubungi Saya</span>
          </button>
        </div>
      </div>
    </div>
  );
}
