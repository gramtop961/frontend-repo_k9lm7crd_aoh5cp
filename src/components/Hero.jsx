import Spline from '@splinetool/react-spline';
import { Heart, MessageCircle, LineChart } from 'lucide-react';

export default function Hero({ onStartChat, onViewAnalytics }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to improve text contrast (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur">
          <Heart className="h-4 w-4 text-pink-500" />
          Wellness Wings
        </span>
        <h1 className="mb-3 text-3xl font-semibold leading-tight text-slate-800 sm:text-4xl md:text-5xl">
          Futuristic calm for your mind
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-slate-600">
          Chat with an empathetic AI, track your wellness, and find community support — all in one, private place.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button onClick={onStartChat} className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700">
            <MessageCircle className="h-4 w-4" />
            Start a mindful chat
          </button>
          <button onClick={onViewAnalytics} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50">
            <LineChart className="h-4 w-4 text-indigo-600" />
            View wellness trends
          </button>
        </div>
      </div>
    </section>
  );
}
