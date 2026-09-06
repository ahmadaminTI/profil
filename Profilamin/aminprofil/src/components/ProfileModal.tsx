import { AVATAR_URL } from './Header';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: 'overview' | 'matrix' | 'projects' | 'contact') => void;
}

export function ProfileModal({ isOpen, onClose, onNavigateTab }: ProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090d12]/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-sm bg-surface-container-low border border-surface-container-high rounded-xl p-5 shadow-2xl flex flex-col items-center text-center gap-3.5 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>

        <div className="relative mt-1">
          <img
            src={AVATAR_URL}
            alt="Ahmad Amin"
            className="w-20 h-20 rounded-full object-cover ring-2 ring-surface-container-high shadow-md"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-[#161b22]"></div>
        </div>

        <div className="space-y-1">
          <h3 className="font-display-hero text-lg font-bold text-on-surface">
            Ahmad Amin
          </h3>
          <p className="text-xs font-medium text-primary">
            Senior Polyglot Software Architect
          </p>
          <p className="text-[11px] text-on-surface-variant">
            UIN Ar-Raniry Banda Aceh &bull; Teknologi Informasi
          </p>
        </div>

        <div className="w-full bg-surface-container border border-surface-container-high p-3 rounded-lg flex justify-around items-center">
          <div className="flex flex-col items-center">
            <span className="text-on-surface text-base font-bold">80%</span>
            <span className="text-[10px] text-on-surface-variant">Pareto Ratio</span>
          </div>
          <div className="w-px h-5 bg-surface-container-high"></div>
          <div className="flex flex-col items-center">
            <span className="text-on-surface text-base font-bold">15+</span>
            <span className="text-[10px] text-on-surface-variant">Bahasa Aktif</span>
          </div>
          <div className="w-px h-5 bg-surface-container-high"></div>
          <div className="flex flex-col items-center">
            <span className="text-on-surface text-base font-bold">48+</span>
            <span className="text-[10px] text-on-surface-variant">Proyek</span>
          </div>
        </div>

        <p className="text-xs text-on-surface-variant leading-relaxed">
          Mengutamakan efisiensi arsitektur, pemilihan teknologi tepat guna, dan kecepatan eksekusi sistem berkinerja tinggi.
        </p>

        <div className="w-full grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => {
              onClose();
              onNavigateTab('matrix');
            }}
            className="py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high border border-surface-container-high text-on-surface text-xs font-medium transition-colors"
          >
            Lihat Skill
          </button>
          <button
            onClick={() => {
              onClose();
              onNavigateTab('contact');
            }}
            className="py-2 px-3 rounded-lg bg-primary hover:bg-primary-fixed-dim text-[#040d21] text-xs font-medium transition-colors"
          >
            Hubungi
          </button>
        </div>
      </div>
    </div>
  );
}
