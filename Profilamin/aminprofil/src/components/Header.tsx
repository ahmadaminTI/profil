import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  onAvatarClick?: () => void;
}

const TAB_TITLES: Record<TabType, string> = {
  overview: 'Ringkasan',
  matrix: 'Skills & Stack',
  projects: 'Portofolio',
  contact: 'Kontak',
};

export const BRAND_LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1WdHFmK9R0yF3pdMopFMjm9UbP-AjNa59Bc1ongFzt3stphu6rsXU3iBy-0f9q5ivlUYwLw_BPXGQAnRUov5ITe5aRrsyfmst_R15F035RMHCbcZIaMPPqSovb1ASc0Kox93piHwCgNWSdMD3hRbQhHToUcMKV2iwnl3v1VYmaEzEyZGruTRLtl4--XBgAOXP0mjiZbgA6Gr_s_c_d6SF4lICi8zJApBtGlGvJ3LkEYK3NaA68RoWRndyQ';

export const AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8YszztNUtg4l9UAmW5li5SWKp_fYqqjA15J8WiwidZGRA_LcICxhyeTshjHavV7U4D20MA8177-JgkA3gbs3eOFg4VRNCqhgjzP30QdRAQcasbN8bAEIuINUeKHup4pk-RcO0SAEH1NyPnfIZGths-lh4pXQOfcYCfAs_w8PpFezm9DVNYbUKuTuTujE7dC3bsEckY_AmPYCaYme5-ZYMoKrNJJiRgtV1uLtEY9F0b3_tVqMSNQAtOw';

export function Header({ activeTab, onAvatarClick }: HeaderProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0d1117]/90 backdrop-blur-md border-b border-surface-container-high/60 pt-safe">
      <div className="h-14 px-4 max-w-lg mx-auto flex items-center justify-between">
        <button
          onClick={onAvatarClick}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="relative">
            <img
              alt="Ahmad Amin"
              className="w-8 h-8 rounded-full object-cover border border-surface-container-highest group-hover:border-primary transition-colors"
              src={AVATAR_URL}
              referrerPolicy="no-referrer"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0d1117]"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display-hero text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                Ahmad Amin
              </span>
              <span className="font-mono text-[10px] text-on-surface-variant px-1.5 py-0.2 rounded bg-surface-container border border-surface-container-high">
                Polyglot Dev
              </span>
            </div>
            <span className="text-[11px] text-on-surface-variant">
              Software Architect &bull; Banda Aceh
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded bg-surface-container border border-surface-container-high text-xs font-mono text-primary font-medium">
            {TAB_TITLES[activeTab]}
          </div>
        </div>
      </div>
    </header>
  );
}
