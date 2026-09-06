import { useState, useCallback, useRef } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ProfileOverview } from './components/ProfileOverview';
import { SkillsLanguages } from './components/SkillsLanguages';
import { Projects } from './components/Projects';
import { TerminalContact } from './components/TerminalContact';
import { CyberToast } from './components/CyberToast';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((message: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  }, []);

  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col relative selection:bg-primary-container selection:text-on-primary-fixed">
      {/* Fixed Sticky Header */}
      <Header
        activeTab={activeTab}
        onAvatarClick={() => setIsProfileModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24">
        {activeTab === 'overview' && (
          <ProfileOverview
            onNavigateTab={handleTabChange}
            onShowToast={showToast}
          />
        )}
        {activeTab === 'matrix' && (
          <SkillsLanguages />
        )}
        {activeTab === 'projects' && (
          <Projects
            onNavigateTab={handleTabChange}
            onShowToast={showToast}
          />
        )}
        {activeTab === 'contact' && (
          <TerminalContact
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Fixed Sticky Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* HUD Telemetry Notification Toast */}
      <CyberToast message={toastMessage} />

      {/* Developer Profile Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onNavigateTab={handleTabChange}
      />
    </div>
  );
}
