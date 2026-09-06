import { useEffect, useRef, useState } from 'react'
import './index.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Tentang' },
  { href: '#skills', label: 'Skill' },
  { href: '#projects', label: 'Proyek' },
  { href: '#contact', label: 'Kontak' },
]

const ROLES = [
  'Polyglot SW Engineer',
  'Systems Architect',
  'Distributed Systems',
  'Problem Solver',
]

const TECH_MARQUEE = [
  'Rust', 'Go', 'TypeScript', 'Python', 'Kotlin', 'Swift',
  'C++', 'Java', 'PHP', 'Dart', 'PostgreSQL', 'Kubernetes',
  'Docker', 'gRPC', 'Apache Kafka',
]

const STATS = [
  ['80%', 'Index penguasaan · Pareto'],
  ['15+', 'Bahasa aktif'],
  ['48+', 'Repositori & proyek'],
  ['99.9%', 'Target SLA'],
]

const SKILL_GROUPS = [
  {
    num: '01',
    title: 'Systems & High-Throughput',
    desc: 'Microservices, gRPC, konkurensi tinggi, dan runtime dengan performa nyata.',
    level: 80,
    langs: [
      { name: 'Go (Golang)', level: 82, chips: ['Microservices', 'gRPC', 'Goroutines', 'Fiber'] },
      { name: 'Rust', level: 78, chips: ['Tokio', 'Actix', 'Wasm', 'Mem Safety'] },
      { name: 'C / C++', level: 78, chips: ['Embedded', 'POSIX', 'Alg & DSA'] },
      { name: 'Java', level: 80, chips: ['Spring Boot', 'JVM', 'Hibernate'] },
    ],
  },
  {
    num: '02',
    title: 'Web & Mobile',
    desc: 'Aplikasi lintas platform, native mobile, dan API dinamis yang cepat.',
    level: 80,
    langs: [
      { name: 'TypeScript & JS', level: 85, chips: ['React', 'Next.js', 'Node.js', 'Express'] },
      { name: 'Kotlin', level: 80, chips: ['Android', 'Compose', 'Ktor'] },
      { name: 'Swift', level: 76, chips: ['iOS Native', 'SwiftUI', 'Combine'] },
      { name: 'PHP', level: 82, chips: ['Laravel 11', 'PHP 8.3', 'REST APIs'] },
      { name: 'Dart & Flutter', level: 80, chips: ['Flutter SDK', 'Riverpod', 'Desktop'] },
    ],
  },
  {
    num: '03',
    title: 'Data & AI',
    desc: 'Pipelines data, pencarian semantik, embedding vektor, dan database terdistribusi.',
    level: 83,
    langs: [
      { name: 'Python', level: 82, chips: ['FastAPI', 'PyTorch', 'Django', 'Data Pipelines'] },
      { name: 'Database (SQL & NoSQL)', level: 84, chips: ['PostgreSQL', 'Redis', 'MongoDB', 'ClickHouse'] },
    ],
  },
  {
    num: '04',
    title: 'DevOps & Tools',
    desc: 'Infrastruktur cloud-native, orkestrasi, dan otomasi yang andal.',
    level: 78,
    langs: [
      { name: 'Ruby & Shell', level: 78, chips: ['Bash/Zsh', 'Docker CLI', 'Rails'] },
    ],
  },
]

const PROJECTS = [
  {
    num: '01',
    tag: 'Systems · Broker',
    title: 'OmniFlow Distributed Broker',
    desc: 'Message broker terdistribusi throughput tinggi dengan zero-copy packet handling dan latensi 0.42ms P99 — memproses 2.4M pesan/detik.',
    meta: '1.2k ★ · Produksi aktif',
    href: 'https://github.com/ahmad-amin/omniflow-core',
    tags: ['Rust', 'Go', 'gRPC', 'Docker'],
  },
  {
    num: '02',
    tag: 'Mobile · Observability',
    title: 'Pulse Telemetry App',
    desc: 'Monitoring performa cluster server real-time via WebSocket dua arah, push alert darurat, dan grafik interaktif 60 FPS di Android & iOS.',
    meta: 'Android · iOS · Stores',
    href: 'https://github.com/ahmad-amin/pulse-telemetry',
    tags: ['Kotlin', 'Swift', 'TypeScript'],
  },
  {
    num: '03',
    tag: 'Enterprise · AI',
    title: 'NeuroQuery Semantic Pipeline',
    desc: 'Pipeline pencarian semantik dokumen dengan indexing embedding vektor, multi-tenant isolation, dan integrasi LLM terstandarisasi.',
    meta: '128 Dim Cache',
    href: 'https://github.com/ahmad-amin/neuro-search-engine',
    tags: ['Python', 'FastAPI', 'PyTorch', 'PostgreSQL'],
  },
  {
    num: '04',
    tag: 'CLI · Open Source',
    title: 'HyperCloud Orchestration CLI',
    desc: 'CLI native tanpa dependensi eksternal (biner 2.1 MB) untuk orkestrasi multi-cluster Kubernetes — POSIX & Windows.',
    meta: 'Biner mandiri',
    href: 'https://github.com/ahmad-amin/hypercloud-cli',
    tags: ['C++', 'Rust', 'Bash'],
  },
  {
    num: '05',
    tag: 'Web · PHP',
    title: 'Organisasi Kampus',
    desc: 'Sistem manajemen organisasi mahasiswa berbasis web tanpa framework: front-controller routing, autentikasi & sesi anggota via PDO (MySQL), plus dashboard kegiatan, keuangan, dan arsip dokumen.',
    meta: 'Arsitektur MVC ringan · Production',
    href: 'https://github.com/ahmadaminTI/organisasi-kampus',
    tags: ['PHP', 'MySQL', 'PDO', 'JavaScript', 'HTML/CSS'],
    featured: true,
  },
]

const CONTACTS = [
  { label: 'Email', value: 'dev.ahmadamin@gmail.com', href: 'mailto:dev.ahmadamin@gmail.com' },
  { label: 'WhatsApp', value: '+62 852-6833-5031', href: 'https://wa.me/6285268350331' },
  { label: 'GitHub', value: '@ahmad-amin', href: 'https://github.com/ahmad-amin' },
  { label: 'Instagram', value: '@oiamin._', href: 'https://www.instagram.com/oiamin._/' },
]

const HERO_SPARKS = [
  { left: '8%', top: '18%', delay: '0s' },
  { left: '22%', top: '62%', delay: '0.8s' },
  { left: '70%', top: '12%', delay: '1.4s' },
  { left: '85%', top: '55%', delay: '0.4s' },
  { left: '46%', top: '8%', delay: '1.9s' },
  { left: '64%', top: '78%', delay: '2.3s' },
  { left: '14%', top: '38%', delay: '3s' },
  { left: '92%', top: '30%', delay: '2.6s' },
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [loading, setLoading] = useState(true)
  const [hideLoader, setHideLoader] = useState(false)
  const [navLoading, setNavLoading] = useState(false)
  const glowRef = useRef(null)

  /* Loader pembuka */
  useEffect(() => {
    const t1 = setTimeout(() => setHideLoader(true), 1500)
    const t2 = setTimeout(() => setLoading(false), 2100)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  /* Navigasi internal dengan loading bar */
  const handleNav = (e, href) => {
    if (!href.startsWith('#') || navLoading) return
    e.preventDefault()
    setNavLoading(true)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    }
    window.setTimeout(() => setNavLoading(false), 820)
  }

  /* Tilt kartu mengikuti kursor */
  const handleTilt = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - py) * 7
    const ry = (px - 0.5) * 7
    card.style.transform = `perspective(760px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  const resetTilt = (e) => {
    e.currentTarget.style.transform = ''
  }

  /* Kursor glow */
  const handleMouseMove = (e) => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${e.clientX - 220}px, ${e.clientY - 220}px)`
    }
  }

  /* Navbar saat scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Scroll spy */
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  /* Efek ketik peran */
  useEffect(() => {
    let i = 0
    let deleting = false
    let timer

    const tick = () => {
      const word = ROLES[roleIndex % ROLES.length]
      if (!deleting) {
        i++
        setTyped(word.slice(0, i))
        if (i === word.length) {
          deleting = true
          timer = setTimeout(tick, 1400)
          return
        }
        timer = setTimeout(tick, 55)
      } else {
        i--
        if (i === 0) {
          deleting = false
          setRoleIndex((r) => r + 1)
          return
        }
        setTyped(word.slice(0, i))
        timer = setTimeout(tick, 28)
      }
    }
    timer = setTimeout(tick, 300)
    return () => clearTimeout(timer)
  }, [roleIndex])

  /* Scroll reveal yang terulang tiap masuk/sekeluar viewport */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
          else entry.target.classList.remove('is-visible')
        })
      },
      { threshold: 0.18 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [loading])

  return (
    <div className="min-h-screen" onMouseMove={handleMouseMove}>
      {/* Loader pembuka situs */}
      {loading && (
        <div className={`loader ${hideLoader ? 'loader-leave' : ''}`}>
          <div className="flex flex-col items-center gap-7">
            <div className="relative h-20 w-20">
              <div className="loader-ring" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-grotesk text-3xl font-bold text-[#c9a55f]">A</span>
              </div>
            </div>
            <div className="w-52">
              <div className="loader-bar">
                <div className="loader-bar-fill" />
              </div>
            </div>
            <p className="font-grotesk text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              A menginisialisasi arsitektur
            </p>
          </div>
        </div>
      )}

      {/* Loading bar saat pindah menu */}
      {navLoading && (
        <div className="fixed top-0 left-0 right-0 z-[80] h-0.5 overflow-hidden bg-[#0a0a0b]/60">
          <div className="nav-progress" />
        </div>
      )}

      {/* Kursor glow */}
      <div ref={glowRef} className="cursor-glow" />

      {/* Latar blob bercahaya */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#c9a55f]/10 blur-[90px]" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[#8f86d8]/12 blur-[90px]" />
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#67a39a]/10 blur-[90px]" />
      </div>

      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
          scrolled
            ? 'border-zinc-800/80 bg-[#0a0a0b]/85'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            aria-label="Kembali ke beranda"
            className="group inline-flex items-center"
          >
            <img
              src="/profil/logo.png"
              alt="Logo Amin"
              className="animate-float-slow h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`relative transition-colors hover:text-[#c9a55f] ${
                  active === link.href ? 'text-[#c9a55f]' : ''
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-[#c9a55f] transition-all duration-300 ${
                    active === link.href ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="btn-shine rounded-md border border-[#c9a55f] px-4 py-2 text-xs font-bold text-[#c9a55f] transition hover:bg-[#c9a55f] hover:text-[#0a0a0b]"
          >
            Hire Me
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative grid min-h-screen items-center px-6 pt-24 md:grid-cols-2 md:gap-12"
      >
        {/* Partikel hero */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {HERO_SPARKS.map((spark, i) => (
            <span
              key={i}
              className="hero-spark"
              style={{ left: spark.left, top: spark.top, animationDelay: spark.delay }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center md:text-left">
          <span className="hero-fade-in hero-fade-in-1 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a55f]">
            Tersedia untuk proyek & konsultasi
          </span>
          <h1 className="hero-fade-in hero-fade-in-2 font-grotesk text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.95] tracking-tight text-white">
            Code.{' '}
            <span className="animate-gradient bg-gradient-to-r from-[#c9a55f] via-[#8f86d8] to-[#67a39a] bg-clip-text text-transparent">
              Architect.
            </span>
            <br />
            <em className="text-[#c9a55f] italic">Polyglot.</em>
          </h1>
          <p className="hero-fade-in hero-fade-in-3 mx-auto mt-6 min-h-[1.8em] font-grotesk text-xl font-medium text-[#c9a55f] md:mx-0">
            <span className="typing-caret">{typed}</span>
          </p>
          <p className="hero-fade-in hero-fade-in-4 mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 md:mx-0">
            Saya Ahmad Amin — Senior Polyglot Software Engineer &amp; Architect.
            Merancang sistem terdistribusi, backend performa tinggi, dan
            arsitektur multi-bahasa dengan filosofi Pareto 80/20: menguasai 20%
            inti runtime untuk 80% dampak arsitektur nyata.
          </p>
          <div className="hero-fade-in hero-fade-in-5 mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              onClick={(e) => handleNav(e, '#projects')}
              className="btn-shine group inline-flex items-center gap-2 rounded-md bg-[#c9a55f] px-5 py-2.5 text-sm font-bold text-[#0a0a0b] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_rgba(201,165,95,0.45)]"
            >
              Lihat proyek
              <span className="transition-transform group-hover:translate-y-0.5 group-hover:-translate-x-0.5">
                ↗
              </span>
            </a>
            <a
              href="#about"
              onClick={(e) => handleNav(e, '#about')}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-[#c9a55f]"
            >
              Tentang saya
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-lg">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
            <div className="photo-ring" />
            <img
              src="/profil/amin.png"
              alt="Foto profil Amin"
              className="relative z-0 h-full w-full object-cover object-[center_24%] saturate-[0.7] transition-transform duration-700 hover:scale-105"
            />
            <span className="absolute -left-px top-6 z-20 animate-float-slow bg-[#c9a55f] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0a0a0b]">
              ● Tersedia untuk proyek
            </span>
            <span className="absolute bottom-4 right-4 z-20 bg-[#0a0a0b]/85 px-2.5 py-1.5 text-[10px] tracking-[0.13em] text-[#c9a55f]">
              AMIN / POLYGLOT ARCHITECT
            </span>
          </div>
          {/* Kartu mengambang */}
          <div className="animate-float-slow absolute -left-6 top-12 hidden rounded-lg border border-zinc-800 bg-[#0a0a0b]/90 px-4 py-3 backdrop-blur md:block">
            <div className="text-xs text-zinc-500">Bahasa aktif</div>
            <div className="font-grotesk text-2xl font-bold text-[#c9a55f]">15+</div>
          </div>
          <div
            className="animate-float-slow absolute -right-6 bottom-16 hidden rounded-lg border border-zinc-800 bg-[#0a0a0b]/90 px-4 py-3 backdrop-blur md:block"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="text-xs text-zinc-500">Proyek & repo</div>
            <div className="font-grotesk text-2xl font-bold text-[#c9a55f]">48+</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-pause relative border-y border-zinc-800/70 bg-[#101010] py-4">
        <div className="animate-marquee gap-10">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-grotesk text-sm tracking-widest text-zinc-500"
            >
              {tech.toUpperCase()} <span className="text-[#c9a55f]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="relative border-t border-zinc-800/70 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a55f]">
                01 / About me
              </span>
              <h2 className="mt-3 font-grotesk text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
                Arsitektur yang{' '}
                <br className="hidden md:block" />
                <em className="text-[#c9a55f] italic">multi-bahasa.</em>
              </h2>
            </div>
            <p className="reveal reveal-delay-1 max-w-sm text-sm leading-relaxed text-zinc-500">
              Saya percaya teknologi terbaik bukan sekadar berfungsi — ia hemat
              sumber daya, terukur, dan memberi pengalaman berkesan.
            </p>
          </div>

          <div className="mb-14 grid grid-cols-2 gap-0 border-y border-zinc-800 md:grid-cols-4">
            {STATS.map(([value, label], i) => (
              <div
                key={label}
                className={`reveal reveal-delay-${i % 4} border-zinc-800 p-5 md:p-6 ${
                  i % 2 === 0 ? 'border-r' : ''
                } md:border-r ${i === 3 ? 'md:border-r-0' : ''} col-span-1 ${
                  i >= 2 ? 'border-t md:border-t-0' : ''
                }`}
              >
                <strong className="font-grotesk text-4xl font-normal text-[#c9a55f] md:text-5xl">
                  {value}
                </strong>
                <span className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-zinc-500">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <p className="reveal font-grotesk text-3xl italic leading-snug text-[#c9a55f] md:text-4xl">
              "20% inti runtime menghasilkan 80% dampak arsitektur nyata."
            </p>
            <div className="reveal reveal-delay-1 space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                Mahasiswa Teknologi Informasi di UIN Ar-Raniry Banda Aceh dengan
                fokus pada rekayasa sistem terdistribusi, backend performa
                tinggi, dan arsitektur multi-bahasa. Menguasai 80% kemampuan
                mendalam di 15+ bahasa — bukan klaim &quot;100% master&quot;.
              </p>
              <p>
                Pendekatan Pareto 80/20: memilih tool yang tepat untuk problem
                yang tepat. Rust untuk micro-latency, Go untuk API concurrency,
                TypeScript untuk UI dinamis — dan menghubungkannya menjadi satu
                sistem yang kokoh, fault-tolerant, dan siap skala produksi.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Distributed Systems', 'Cloud Native & K8s', 'High-Concurrency'].map((b) => (
                  <span
                    key={b}
                    className="rounded-md border border-zinc-700 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-zinc-400 transition hover:border-[#c9a55f] hover:text-[#c9a55f]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative border-t border-zinc-800/70 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a55f]">
                02 / Capabilities
              </span>
              <h2 className="mt-3 font-grotesk text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
                Keahlian yang saya bawa.
              </h2>
            </div>
            <p className="reveal reveal-delay-1 max-w-sm text-sm leading-relaxed text-zinc-500">
              Penguasaan rata-rata 80% di seluruh ekosistem yang saya gunakan
              untuk membangun produk.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group, i) => (
              <article
                key={group.num}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className={`reveal reveal-delay-${i % 4} card-lift group flex min-h-[260px] flex-col rounded-md border border-zinc-800 bg-zinc-900/40 p-5 hover:border-[#c9a55f]/60`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-grotesk text-2xl text-[#c9a55f]">
                    {group.num}
                  </span>
                  <span className="text-xl opacity-0 transition group-hover:animate-wiggle group-hover:opacity-100">
                    ✦
                  </span>
                </div>
                <h3 className="mt-3 font-grotesk text-lg font-normal text-white">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                  {group.desc}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="animate-grow-x h-full rounded-full bg-[#c9a55f]"
                      style={{ width: `${group.level}%` }}
                    />
                  </div>
                  <span className="font-grotesk text-xs font-medium text-[#c9a55f]">
                    {group.level}%
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-2.5 border-t border-zinc-800/70 pt-4">
                  {group.langs.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-zinc-300">{lang.name}</span>
                        <span className="font-mono text-zinc-500">
                          {lang.level}%
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {lang.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-sm border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-[10px] text-zinc-500"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative border-t border-zinc-800/70 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a55f]">
                03 / Selected Work
              </span>
              <h2 className="mt-3 font-grotesk text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
                Beberapa hal yang pernah dibangun.
              </h2>
            </div>
            <p className="reveal reveal-delay-1 max-w-sm text-sm leading-relaxed text-zinc-500">
              Dari ide mentah menjadi sistem produksi yang terukur, tahan gagal,
              dan bisa dikembangkan.
            </p>
          </div>

          <div className="grid gap-3.5 lg:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <article
                key={project.num}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className={`reveal reveal-delay-${i % 2} card-lift group flex min-h-[300px] flex-col justify-between rounded-md border border-zinc-800 bg-zinc-900/40 p-6 hover:border-[#c9a55f]/50 ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#c9a55f]">
                      {project.tag}
                    </span>
                    <span className="font-grotesk text-3xl font-normal text-zinc-700 transition-colors group-hover:text-[#c9a55f]/40">
                      {project.num}
                    </span>
                  </div>
                  <h3 className="mt-12 font-grotesk text-3xl font-light leading-tight text-white transition-colors group-hover:text-[#c9a55f]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                    {project.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-zinc-800 bg-zinc-900 px-2 py-1 font-mono text-[11px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.12em] text-zinc-600">
                    {project.meta}
                  </div>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#c9a55f] transition hover:gap-3 group-hover:animate-wiggle"
                >
                  Buka di GitHub <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-zinc-800/70 px-6 pt-24 pb-20">
        <div className="mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-[1fr_0.65fr]">
          <div className="reveal">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a55f]">
              04 / Get in touch
            </span>
            <h2 className="mt-3 font-grotesk text-4xl font-light leading-tight tracking-tight text-white md:text-6xl">
              Hubungi saya kapan saja.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
              Ada tawaran proyek, peluang karir, atau konsultasi arsitektur?
              Mari mulai percakapan — merespon aktif dalam 1x24 jam.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#c9a55f]/40 bg-[#c9a55f]/5 px-3.5 py-2 text-xs text-[#c9a55f]">
              <span className="animate-pulse-soft h-1.5 w-1.5 rounded-full bg-[#c9a55f]" />
              Tersedia untuk kontrak & kerja remote
            </div>
          </div>
          <div className="reveal reveal-delay-1 grid gap-3">
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex flex-col justify-between border-b border-zinc-800 py-3.5 text-sm transition sm:flex-row sm:items-center"
              >
                <span className="text-zinc-400 transition group-hover:translate-x-1 group-hover:text-[#c9a55f]">
                  {contact.label}
                </span>
                <span className="mt-1 text-[#c9a55f] sm:mt-0">{contact.value} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800/70 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 text-xs text-zinc-500 sm:flex-row">
          <span className="animate-pulse-soft">© 2026 Ahmad Amin</span>
          <span>Senior Polyglot Architect / Banda Aceh, ID</span>
        </div>
      </footer>
    </div>
  )
}

export default App