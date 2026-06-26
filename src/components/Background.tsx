export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[680px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-500/30 via-indigo-500/20 to-transparent blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 right-[-160px] h-[420px] w-[520px] rounded-full bg-gradient-to-br from-sky-400/20 via-brand-500/15 to-transparent blur-3xl animate-float-slow" />
      <div className="absolute bottom-[-180px] left-[-120px] h-[460px] w-[560px] rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-transparent blur-3xl animate-float-slow" />
    </div>
  );
}
