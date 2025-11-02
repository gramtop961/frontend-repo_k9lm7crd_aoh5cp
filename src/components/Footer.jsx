export default function Footer() {
  return (
    <footer className="mt-10 border-t pt-6 text-center text-sm text-slate-500">
      <p>
        Wellness Wings • Built for calm, clarity, and community. If you or someone you know is in crisis,
        contact local emergency services or your regional helpline immediately.
      </p>
      <p className="mt-2">© {new Date().getFullYear()} Wellness Wings</p>
    </footer>
  );
}
