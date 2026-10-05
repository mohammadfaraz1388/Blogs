import Link from "next/link";
import { resolve } from "styled-jsx/css";

async function home() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Test!");
    }, 5000);
  });
  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-6 py-16">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#101010] px-8 py-16 shadow-2xl shadow-red-950/20 sm:px-12 md:px-20 md:py-24">
        {/* Red glow */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm font-medium text-red-400">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
            Welcome to Blogs
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            This is the <span className="text-red-500">HOME</span> PAGE!
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Explore useful articles, learn new concepts and discover interesting
            ideas through our blog.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/blogs">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  BLOGS
                </p>
                <p className="mt-1 font-semibold text-white">Let's read</p>
              </div>
            </Link>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Platform
              </p>
              <p className="mt-1 font-semibold text-white">Next.js Blog</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Design
              </p>
              <p className="mt-1 font-semibold text-white">Modern & Minimal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
