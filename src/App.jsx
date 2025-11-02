import { useRef, useState, useCallback } from 'react';
import Hero from './components/Hero';
import NavTabs from './components/NavTabs';
import FeatureHighlights from './components/FeatureHighlights';
import DonationCallout from './components/DonationCallout';
import Footer from './components/Footer';
import { HeartPulse } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const tabsRef = useRef(null);

  const scrollToTabs = useCallback(() => {
    if (tabsRef.current) {
      tabsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const goToTab = useCallback((tabKey) => {
    setActiveTab(tabKey);
    // Delay ensures state update applies before scroll for a smoother feel
    setTimeout(scrollToTabs, 0);
  }, [scrollToTabs]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50">
      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow">
            <HeartPulse className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-800">Wellness Wings</p>
            <p className="-mt-1 text-xs text-slate-500">AI • Community • Care</p>
          </div>
        </div>
        <nav className="hidden gap-4 text-sm text-slate-600 sm:flex">
          <button onClick={() => goToTab('chat')} className="hover:text-slate-900">Chat</button>
          <button onClick={() => goToTab('analytics')} className="hover:text-slate-900">Analytics</button>
          <button onClick={() => goToTab('community')} className="hover:text-slate-900">Community</button>
          <button onClick={() => goToTab('donate')} className="hover:text-slate-900">Donate</button>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => goToTab('profile')} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Sign in</button>
          <button onClick={() => goToTab('chat')} className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700">Get started</button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-6 pb-10">
        <Hero onStartChat={() => goToTab('chat')} onViewAnalytics={() => goToTab('analytics')} />
        <FeatureHighlights />
        <div ref={tabsRef}>
          <NavTabs active={activeTab} setActive={setActiveTab} />
        </div>
        <div id="donate">
          <DonationCallout />
        </div>
      </main>

      <div className="mx-auto max-w-6xl px-6 pb-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
