function notfound() {
  return (
    <div className="min-h-screen bg-[#080808] px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#101010] px-7 py-14 text-center shadow-2xl shadow-red-950/10 sm:px-12 sm:py-20 md:px-20">
          {/* Background Glow */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

          {/* Decorative Lines */}
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

          <div className="relative z-10">
            {/* Error Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm font-medium text-red-400">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
              Page Not Found
            </div>

            {/* 404 */}
            <div className="select-none">
              <h1 className="text-[7rem] font-black leading-none tracking-[-0.08em] text-white sm:text-[9rem] md:text-[11rem]">
                4<span className="text-red-500">0</span>4
              </h1>
            </div>

            {/* Title */}
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Oops! This page doesn't exist.
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              The page you're looking for may have been removed, renamed, or the
              URL might be incorrect. Don't worry, there's still plenty to
              explore.
            </p>

            {/* Divider */}
            <div className="mx-auto my-9 h-px max-w-xs bg-white/10" />

            {/* Action */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-7 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:bg-red-400 hover:shadow-red-900/40 sm:w-auto"
              >
                <span>Back to Home</span>

                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
              </a>

              <a
                href="/blogs"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/5 hover:text-white sm:w-auto"
              >
                Explore Blogs
              </a>
            </div>

            {/* Footer */}
            <div className="mt-10 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-600">
              <span className="h-px w-8 bg-zinc-800" />
              <span>Blogs</span>
              <span className="h-px w-8 bg-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default notfound;
