interface CyberToastProps {
  message: string | null;
}

export function CyberToast({ message }: CyberToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 inset-x-4 z-50 flex justify-center pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="bg-[#161b22]/95 backdrop-blur-md border border-surface-container-high px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 max-w-sm">
        <span className="material-symbols-outlined text-primary text-[16px]">info</span>
        <span className="text-xs text-on-surface font-medium truncate">
          {message}
        </span>
      </div>
    </div>
  );
}
