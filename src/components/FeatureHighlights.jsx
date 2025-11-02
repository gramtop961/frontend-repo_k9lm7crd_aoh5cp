import { Sparkles, ShieldCheck, Brain, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure & Private',
    desc: 'Protected accounts and encrypted credentials. Your wellness is confidential.',
    color: 'from-indigo-50 to-blue-50 text-indigo-700',
  },
  {
    icon: Brain,
    title: 'AI Support',
    desc: 'An empathetic guide with gentle prompts, sentiment cues, and safety nudges.',
    color: 'from-purple-50 to-pink-50 text-purple-700',
  },
  {
    icon: HeartHandshake,
    title: 'Community Care',
    desc: 'Anonymous posts and replies with kindness-first moderation tools.',
    color: 'from-rose-50 to-amber-50 text-rose-700',
  },
  {
    icon: Sparkles,
    title: 'Daily Tools',
    desc: 'Affirmations, breathing timer, and gratitude journaling to build gentle habits.',
    color: 'from-emerald-50 to-teal-50 text-emerald-700',
  },
];

export default function FeatureHighlights() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ icon: Icon, title, desc, color }) => (
        <div key={title} className={`rounded-2xl bg-gradient-to-br ${color} p-5 shadow-sm ring-1 ring-black/0`}>
          <div className="mb-3 inline-flex rounded-lg bg-white/70 p-2 shadow-sm backdrop-blur">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mb-1 text-base font-semibold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-600">{desc}</p>
        </div>
      ))}
    </section>
  );
}
