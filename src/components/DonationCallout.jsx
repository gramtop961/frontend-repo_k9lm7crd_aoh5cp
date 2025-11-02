import { Heart } from 'lucide-react';

export default function DonationCallout() {
  const openDonate = (amount) => {
    const url = 'https://buy.stripe.com/test_00g3dA9b66kA0Z6aEE';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow-lg">
      <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/3 rounded-full bg-white/15 blur-2xl" />
      <div className="relative z-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm">
            <Heart className="h-4 w-4" />
            Support Wellness Wings
          </div>
          <h3 className="text-xl font-semibold">Your kindness keeps mental wellness accessible</h3>
          <p className="text-white/90">Chip in what you can. Even a small donation makes a big difference.</p>
        </div>
        <div className="flex items-center gap-2">
          {['₹50','₹100','₹250'].map((tier) => (
            <button key={tier} onClick={() => openDonate(tier)} className="rounded-full bg-white/90 px-4 py-2 font-medium text-slate-800 shadow hover:bg-white">
              {tier}
            </button>
          ))}
          <button onClick={() => openDonate('custom')} className="rounded-full border-2 border-white/80 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/10">
            Custom
          </button>
        </div>
      </div>
    </section>
  );
}
