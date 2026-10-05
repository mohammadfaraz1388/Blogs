"use client";

function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px]" />

        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-red-600/5 blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] h-40 w-40 rounded-full bg-red-600/5 blur-3xl" />
      </div>

      {/* Decorative Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Main Loading Card */}
      <div className="relative flex w-full max-w-md flex-col items-center px-6">
        {/* Trading Logo */}
        <div className="relative mb-10 h-28 w-28">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 animate-spin rounded-full border border-red-500/20 border-t-red-500" />

          {/* Inner spinning ring */}
          <div className="absolute inset-3 animate-[spin_2s_linear_infinite_reverse] rounded-full border border-red-500/10 border-b-red-500/60" />

          {/* Glow */}
          <div className="absolute inset-6 rounded-2xl bg-red-600/20 blur-xl" />

          {/* Logo container */}
          <div className="absolute inset-5 flex items-end justify-center gap-1.5 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-black shadow-[0_0_35px_rgba(239,68,68,0.15)]">
            {/* Candlestick 1 */}
            <div className="relative mb-3 h-7 w-1.5 rounded-sm bg-red-500">
              <div className="absolute -top-2 left-1/2 h-2 w-px -translate-x-1/2 bg-red-400" />
              <div className="absolute -bottom-2 left-1/2 h-2 w-px -translate-x-1/2 bg-red-400" />
            </div>

            {/* Candlestick 2 */}
            <div className="relative mb-3 h-10 w-1.5 rounded-sm bg-zinc-600">
              <div className="absolute -top-2 left-1/2 h-2 w-px -translate-x-1/2 bg-zinc-500" />
              <div className="absolute -bottom-2 left-1/2 h-2 w-px -translate-x-1/2 bg-zinc-500" />
            </div>

            {/* Candlestick 3 */}
            <div className="relative mb-3 h-14 w-1.5 rounded-sm bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]">
              <div className="absolute -top-2 left-1/2 h-2 w-px -translate-x-1/2 bg-red-400" />
              <div className="absolute -bottom-2 left-1/2 h-2 w-px -translate-x-1/2 bg-red-400" />
            </div>

            {/* Candlestick 4 */}
            <div className="relative mb-3 h-20 w-1.5 rounded-sm bg-red-600">
              <div className="absolute -top-2 left-1/2 h-2 w-px -translate-x-1/2 bg-red-400" />
              <div className="absolute -bottom-2 left-1/2 h-2 w-px -translate-x-1/2 bg-red-400" />
            </div>
          </div>

          {/* Center glow dot */}
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-red-400 shadow-[0_0_15px_rgba(248,113,113,1)]" />
        </div>

        {/* Brand */}
        <div className="mb-2 text-center">
          <h1 className="text-2xl font-black tracking-[0.25em] text-white">
            TRADING
            <span className="text-red-500"> BLOG</span>
          </h1>

          <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </div>

        {/* Loading Text */}
        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Analyzing Markets
            </span>

            {/* Animated dots */}
            <div className="flex gap-1">
              <span className="h-1 w-1 animate-bounce rounded-full bg-red-500 [animation-delay:0ms]" />
              <span className="h-1 w-1 animate-bounce rounded-full bg-red-500 [animation-delay:150ms]" />
              <span className="h-1 w-1 animate-bounce rounded-full bg-red-500 [animation-delay:300ms]" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-5 h-[2px] w-48 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>

          <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            Preparing your trading insights
          </p>
        </div>

        {/* Bottom Status */}
        <div className="mt-12 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Market Intelligence
          </span>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute left-6 top-6 h-12 w-12 border-l border-t border-red-500/20" />
      <div className="absolute right-6 top-6 h-12 w-12 border-r border-t border-red-500/20" />

      <div className="absolute bottom-6 left-6 h-12 w-12 border-b border-l border-red-500/20" />
      <div className="absolute bottom-6 right-6 h-12 w-12 border-b border-r border-red-500/20" />

      {/* Tiny Market Lines */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-end gap-1 opacity-20 sm:flex">
        <div className="h-2 w-1 bg-red-500" />
        <div className="h-4 w-1 bg-red-500" />
        <div className="h-3 w-1 bg-zinc-600" />
        <div className="h-6 w-1 bg-red-500" />
        <div className="h-8 w-1 bg-red-500" />
        <div className="h-5 w-1 bg-zinc-600" />
        <div className="h-10 w-1 bg-red-500" />
        <div className="h-7 w-1 bg-red-600" />
        <div className="h-12 w-1 bg-red-500" />
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-200%);
          }

          100% {
            transform: translateX(400%);
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;
