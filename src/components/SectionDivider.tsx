export default function SectionDivider() {
  return (
    <div className="container flex items-center gap-6 mt-8" aria-hidden>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-violet-500/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-violet-500/70" />
        <span className="h-1 w-1 rounded-full bg-violet-500/40" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}
