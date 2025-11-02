import { useEffect } from 'react';
import { MessageCircle, LineChart, Users, Notebook, Heart, User } from 'lucide-react';

const tabs = [
  { key: 'chat', label: 'Chat', icon: MessageCircle },
  { key: 'analytics', label: 'Analytics', icon: LineChart },
  { key: 'community', label: 'Community', icon: Users },
  { key: 'journal', label: 'Journal', icon: Notebook },
  { key: 'donate', label: 'Donate', icon: Heart },
  { key: 'profile', label: 'Profile', icon: User },
];

export default function NavTabs({ active, setActive }) {
  // Update document hash for accessible navigation and deep-linking
  useEffect(() => {
    if (active) {
      window.history.replaceState(null, '', `#${active}`);
    }
  }, [active]);

  return (
    <section className="w-full">
      <div className="mb-4 flex w-full flex-wrap gap-2 rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
              active === key
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
            aria-pressed={active === key}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        {active === 'chat' && <ChatPreview />}
        {active === 'analytics' && <AnalyticsPreview />}
        {active === 'community' && <CommunityPreview />}
        {active === 'journal' && <JournalPreview />}
        {active === 'donate' && <DonatePreview />}
        {active === 'profile' && <ProfilePreview />}
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
    </div>
  );
}

function ChatPreview() {
  return (
    <div>
      <SectionTitle title="AI Mental Health Chat" subtitle="A calming, empathetic space to reflect." />
      <div className="space-y-3">
        <div className="w-fit max-w-[80%] rounded-2xl bg-slate-100 px-4 py-3 text-slate-700">
          Hi, I’m here to listen. How are you feeling today?
        </div>
        <div className="ml-auto w-fit max-w-[80%] rounded-2xl bg-indigo-600 px-4 py-3 text-white">
          I’m a bit overwhelmed and need help unwinding.
        </div>
        <div className="w-fit max-w-[80%] rounded-2xl bg-slate-100 px-4 py-3 text-slate-700">
          Thank you for sharing. Let’s take a slow breath together and unpack what’s on your mind.
        </div>
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div>
      <SectionTitle title="Weekly Wellness Analytics" subtitle="Mood trends and check-in frequency" />
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-indigo-50 p-4 text-indigo-800">
          <p className="text-sm">Chats this week</p>
          <p className="text-2xl font-semibold">12</p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800">
          <p className="text-sm">Avg mood score</p>
          <p className="text-2xl font-semibold">7.8</p>
        </div>
        <div className="rounded-xl bg-amber-50 p-4 text-amber-800">
          <p className="text-sm">Trend</p>
          <p className="text-2xl font-semibold">Positive ↗</p>
        </div>
      </div>
      <div className="mt-6 h-48 w-full rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100" />
      <p className="mt-3 text-sm text-slate-500">Charts integrate later with your private data.</p>
    </div>
  );
}

function CommunityPreview() {
  return (
    <div>
      <SectionTitle title="Anonymous Community" subtitle="Share and support safely" />
      <div className="space-y-3">
        <div className="rounded-xl border p-4">
          <div className="mb-1 text-sm text-slate-500">🌧️ Sad • Lavender Fox</div>
          <p className="text-slate-700">Rough day at work. Any tips for decompression?</p>
        </div>
        <div className="rounded-xl border p-4">
          <div className="mb-1 text-sm text-slate-500">🔥 Motivation • Mint Whale</div>
          <p className="text-slate-700">Did a 5-minute breathing session. Felt surprisingly better.</p>
        </div>
      </div>
    </div>
  );
}

function JournalPreview() {
  return (
    <div>
      <SectionTitle title="Gratitude Journal" subtitle="Private to you" />
      <textarea className="w-full rounded-xl border p-3 outline-none ring-0 focus:border-indigo-300" rows={5} placeholder="I’m grateful for..." />
      <div className="mt-3 flex justify-end">
        <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700">Save</button>
      </div>
    </div>
  );
}

function DonatePreview() {
  const openDonate = (amount) => {
    const url = 'https://buy.stripe.com/test_00g3dA9b66kA0Z6aEE';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <SectionTitle title="Support Wellness Wings" subtitle="Keep the platform free and growing" />
      <div className="grid gap-3 sm:grid-cols-4">
        {['₹50','₹100','₹250','Custom'].map((tier) => (
          <button
            key={tier}
            onClick={() => openDonate(tier)}
            className="rounded-xl border bg-white px-4 py-3 font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            {tier}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-500">Payments integrate later via Stripe/Razorpay. Anonymous option supported.</p>
    </div>
  );
}

function ProfilePreview() {
  return (
    <div>
      <SectionTitle title="Your Profile" subtitle="Manage preferences and privacy" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">Account</p>
          <p className="font-medium text-slate-800">user@example.com</p>
        </div>
        <div className="rounded-xl border p-4">
          <p className="text-sm text-slate-500">Notifications</p>
          <p className="font-medium text-slate-800">Mindful nudges: On</p>
        </div>
      </div>
    </div>
  );
}
