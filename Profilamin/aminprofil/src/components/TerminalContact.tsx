import { useState, useId, FormEvent } from 'react';

interface TerminalContactProps {
  onShowToast: (message: string) => void;
}

interface CommandOutput {
  command: string;
  output: string | string[];
}

export function TerminalContact({ onShowToast }: TerminalContactProps) {
  const [terminalHistory, setTerminalHistory] = useState<CommandOutput[]>([]);
  const [activeCommand, setActiveCommand] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectSubject, setProjectSubject] = useState('Kolaborasi Arsitektur / Open-Source');
  const [messagePayload, setMessagePayload] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [hasTransmitted, setHasTransmitted] = useState(false);

  const senderId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const handleRunCommand = (cmd: string) => {
    setActiveCommand(cmd);
    let output: string | string[] = '';

    if (cmd === 'cat skills.json') {
      output = [
        '{',
        '  "nama": "Ahmad Amin",',
        '  "spesialisasi": "Polyglot Software Architect & Distributed Systems",',
        '  "bahasa_utama": ["Rust", "Go", "TypeScript", "Python", "C++", "Kotlin", "Swift"],',
        '  "pendidikan": "UIN Ar-Raniry Banda Aceh (Teknologi Informasi)",',
        '  "status": "Available for contract / remote opportunities"',
        '}',
      ];
    } else if (cmd === 'whoami') {
      output = 'Ahmad Amin — Software Engineer & Mahasiswa TI UIN Ar-Raniry. Fokus pada skalabilitas sistem, backend efisien, dan aplikasi modern.';
    } else if (cmd === 'contact --email') {
      output = 'Email: dev.ahmadamin@gmail.com | Respon aktif 1x24 jam';
    } else if (cmd === 'curl /socials') {
      output = [
        'GitHub:    https://github.com/developer',
        'WhatsApp:  0852-6833-5031',
        'Instagram: @oiamin._',
        'Domisili:  Banda Aceh, Indonesia',
      ];
    } else {
      output = `zsh: command not found: ${cmd}. Pilihan: whoami, cat skills.json, contact --email, curl /socials`;
    }

    setTerminalHistory((prev) => [...prev.slice(-3), { command: cmd, output }]);
    onShowToast(`CLI: Menjalankan "${cmd}"`);
  };

  const handleTransmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !messagePayload.trim()) {
      onShowToast('Harap isi nama dan pesan Anda.');
      return;
    }

    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setHasTransmitted(true);
      onShowToast('Pesan berhasil terkirim ke Ahmad Amin!');
    }, 800);
  };

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto px-4 py-4 space-y-4">
      {/* Interactive Developer Terminal */}
      <div className="rounded-xl bg-surface-container-lowest border border-surface-container-high/80 p-4 shadow-sm flex flex-col gap-3 font-mono text-xs">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between pb-2 border-b border-surface-container-high/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
            <span className="ml-2 text-on-surface-variant text-[11px]">
              amin@macbook ~ zsh
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 font-sans font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Online
          </span>
        </div>

        {/* Intro */}
        <div className="space-y-1 text-on-surface-variant text-[11px] leading-relaxed">
          <p className="text-on-surface font-medium">
            Ahmad Amin — Portfolio Terminal
          </p>
          <p>
            Mahasiswa Teknologi Informasi @ UIN Ar-Raniry Banda Aceh.
          </p>
          <p className="text-slate-400">
            Jalankan perintah cepat di bawah untuk melihat rincian profil via CLI:
          </p>
        </div>

        {/* History */}
        {terminalHistory.map((item, idx) => (
          <div key={idx} className="space-y-1 pt-1 border-t border-surface-container-high/40">
            <div className="flex items-center gap-1.5 text-on-surface">
              <span className="text-primary font-semibold">amin@mbp %</span>
              <span>{item.command}</span>
            </div>
            {Array.isArray(item.output) ? (
              <div className="text-on-surface-variant pl-2 space-y-0.5 text-[11px] bg-surface-container-low p-2 rounded border border-surface-container-high/40">
                {item.output.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            ) : (
              <div className="text-on-surface-variant pl-2 text-[11px] bg-surface-container-low p-2 rounded border border-surface-container-high/40">
                {item.output}
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center gap-1.5 pt-1 text-on-surface">
          <span className="text-primary font-semibold">amin@mbp %</span>
          <span>{activeCommand}</span>
          <span className="w-2 h-3.5 bg-primary/80 animate-pulse inline-block"></span>
        </div>

        {/* Quick Commands */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            onClick={() => handleRunCommand('whoami')}
            className="px-2 py-1 rounded bg-surface-container border border-surface-container-high text-on-surface-variant hover:text-on-surface text-[11px] transition-colors"
          >
            whoami
          </button>
          <button
            onClick={() => handleRunCommand('cat skills.json')}
            className="px-2 py-1 rounded bg-surface-container border border-surface-container-high text-on-surface-variant hover:text-on-surface text-[11px] transition-colors"
          >
            cat skills.json
          </button>
          <button
            onClick={() => handleRunCommand('contact --email')}
            className="px-2 py-1 rounded bg-surface-container border border-surface-container-high text-on-surface-variant hover:text-on-surface text-[11px] transition-colors"
          >
            contact --email
          </button>
          <button
            onClick={() => handleRunCommand('curl /socials')}
            className="px-2 py-1 rounded bg-surface-container border border-surface-container-high text-on-surface-variant hover:text-on-surface text-[11px] transition-colors"
          >
            curl /socials
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-xl bg-surface-container-low border border-surface-container-high/80 p-5 flex flex-col gap-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="font-display-hero text-base font-bold text-on-surface">
              Kirim Pesan Langsung
            </h2>
            <p className="text-xs text-on-surface-variant">
              Ada tawaran proyek, peluang karir, atau konsultasi arsitektur?
            </p>
          </div>
        </div>

        {hasTransmitted ? (
          <div className="bg-surface-container border border-surface-container-high rounded-xl p-5 flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
              <span className="material-symbols-outlined text-[22px]">check</span>
            </div>
            <h3 className="text-sm font-semibold text-on-surface">Pesan Berhasil Terkirim!</h3>
            <p className="text-xs text-on-surface-variant max-w-xs">
              Terima kasih telah menghubungi. Ahmad Amin akan membalas pesan Anda melalui email sesegera mungkin.
            </p>
            <button
              onClick={() => {
                setHasTransmitted(false);
                setSenderName('');
                setSenderEmail('');
                setMessagePayload('');
              }}
              className="mt-2 px-3.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-surface-container-high text-xs text-on-surface transition-colors"
            >
              Kirim Pesan Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleTransmit} className="flex flex-col gap-3">
            {/* Nama */}
            <div className="flex flex-col gap-1">
              <label htmlFor={senderId} className="text-xs font-medium text-on-surface">
                Nama Lengkap / Instansi
              </label>
              <input
                id={senderId}
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="cth. Budi Santoso / PT Solusi Digital"
                required
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-surface-container-high text-on-surface text-xs focus:outline-none focus:border-primary placeholder:text-on-surface-variant/50"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor={emailId} className="text-xs font-medium text-on-surface">
                Alamat Email
              </label>
              <input
                id={emailId}
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="nama@perusahaan.com"
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-surface-container-high text-on-surface text-xs focus:outline-none focus:border-primary placeholder:text-on-surface-variant/50"
              />
            </div>

            {/* Keperluan */}
            <div className="flex flex-col gap-1">
              <label htmlFor={subjectId} className="text-xs font-medium text-on-surface">
                Kategori Keperluan
              </label>
              <div className="relative">
                <select
                  id={subjectId}
                  value={projectSubject}
                  onChange={(e) => setProjectSubject(e.target.value)}
                  className="w-full px-3 py-2 pr-8 rounded-lg bg-surface-container border border-surface-container-high text-on-surface text-xs focus:outline-none focus:border-primary appearance-none"
                >
                  <option value="Kolaborasi Arsitektur / Open-Source">Kolaborasi Arsitektur / Open-Source</option>
                  <option value="Tawaran Full-time / Remote Engineering">Tawaran Full-time / Remote Engineering</option>
                  <option value="Konsultasi Sistem & Optimasi Kode">Konsultasi Sistem &amp; Optimasi Kode</option>
                  <option value="Proyek Aplikasi Web & Mobile">Proyek Aplikasi Web &amp; Mobile</option>
                </select>
                <span className="absolute right-2.5 top-2.5 material-symbols-outlined text-on-surface-variant text-[16px] pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Pesan */}
            <div className="flex flex-col gap-1">
              <label htmlFor={messageId} className="text-xs font-medium text-on-surface">
                Pesan / Ringkasan Proyek
              </label>
              <textarea
                id={messageId}
                rows={4}
                value={messagePayload}
                onChange={(e) => setMessagePayload(e.target.value)}
                placeholder="Ceritakan tentang kebutuhan proyek, perkiraan timeline, atau tech stack yang ingin digunakan..."
                required
                className="w-full p-3 rounded-lg bg-surface-container border border-surface-container-high text-on-surface text-xs focus:outline-none focus:border-primary placeholder:text-on-surface-variant/50 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isTransmitting}
              className="w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-fixed-dim text-[#040d21] font-medium text-xs flex items-center justify-center gap-2 transition-colors active:scale-[0.99] disabled:opacity-60"
            >
              {isTransmitting ? (
                <span>Mengirim pesan...</span>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  <span>Kirim Pesan</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Saluran Kontak & Media Sosial Langsung */}
      <div className="flex flex-col gap-2.5 mb-2">
        <span className="text-xs font-semibold text-on-surface">
          Saluran Komunikasi Langsung
        </span>

        <div className="grid grid-cols-2 gap-2">
          {/* WhatsApp */}
          <button
            onClick={() => onShowToast('Membuka WhatsApp: +62 852-6833-5031')}
            className="p-3 rounded-lg bg-surface-container-low border border-surface-container-high/70 hover:bg-surface-container transition-colors flex items-center gap-2.5 text-left"
          >
            <div className="w-8 h-8 rounded-md bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-on-surface">WhatsApp</span>
              <span className="text-[11px] text-on-surface-variant font-mono">0852-6833-5031</span>
            </div>
          </button>

          {/* Instagram */}
          <button
            onClick={() => onShowToast('Membuka Instagram: @oiamin._')}
            className="p-3 rounded-lg bg-surface-container-low border border-surface-container-high/70 hover:bg-surface-container transition-colors flex items-center gap-2.5 text-left"
          >
            <div className="w-8 h-8 rounded-md bg-surface-container flex items-center justify-center text-secondary border border-surface-container-high">
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-on-surface">Instagram</span>
              <span className="text-[11px] text-on-surface-variant font-mono">@oiamin._</span>
            </div>
          </button>

          {/* GitHub */}
          <button
            onClick={() => onShowToast('Membuka GitHub: github.com/ahmad-amin')}
            className="p-3 rounded-lg bg-surface-container-low border border-surface-container-high/70 hover:bg-surface-container transition-colors flex items-center gap-2.5 text-left"
          >
            <div className="w-8 h-8 rounded-md bg-surface-container flex items-center justify-center text-on-surface border border-surface-container-high">
              <span className="material-symbols-outlined text-[18px]">code</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-on-surface">GitHub</span>
              <span className="text-[11px] text-on-surface-variant font-mono">@ahmad-amin</span>
            </div>
          </button>

          {/* Email */}
          <button
            onClick={() => onShowToast('Membuka Email: dev.ahmadamin@gmail.com')}
            className="p-3 rounded-lg bg-surface-container-low border border-surface-container-high/70 hover:bg-surface-container transition-colors flex items-center gap-2.5 text-left"
          >
            <div className="w-8 h-8 rounded-md bg-surface-container flex items-center justify-center text-primary border border-surface-container-high">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-on-surface">Email</span>
              <span className="text-[11px] text-on-surface-variant font-mono">dev.ahmadamin</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
