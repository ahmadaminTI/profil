import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

interface NavItem {
  id: TabType;
  label: string;
  iconName: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Ringkasan', iconName: 'dashboard' },
  { id: 'matrix', label: 'Skills', iconName: 'layers' },
  { id: 'projects', label: 'Proyek', iconName: 'code' },
  { id: 'contact', label: 'Kontak', iconName: 'alternate_email' },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#0d1117]/95 backdrop-blur-md border-t border-surface-container-high/60">
      <div className="max-w-lg mx-auto flex justify-around items-center h-14 px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[64px] py-1 px-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'text-primary font-medium'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {item.iconName}
              </span>
              <span className="text-[10px] tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
