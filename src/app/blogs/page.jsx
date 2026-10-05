import Link from "next/link";
import { resolve } from "styled-jsx/css";

async function blogs() {
  const blogs = [
    {
      title: "What Is Forex Trading and How Does It Work?",
      slug: "1",
    },
    {
      title: "How to Read Support and Resistance Levels",
      slug: "2",
    },
    {
      title: "Risk Management: The Part of Trading Most Beginners Ignore",
      slug: "3",
    },
    {
      title: "Trading Psychology: Why Discipline Matters",
      slug: "4",
    },
    {
      title: "Understanding Gold: What Moves XAU/USD?",
      slug: "5",
    },
    {
      title: "How to Build a Simple Trading Plan",
      slug: "6",
    },
  ];

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Test!");
    }, 3000);
  });

  return (
    <div className="min-h-screen bg-[#080808] px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm font-medium text-red-400">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
            Knowledge Hub
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Welcome to the <span className="text-red-500">BLOGS</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Explore our latest articles and learn more about trading, financial
            markets and practical concepts.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-[#151515] hover:shadow-2xl hover:shadow-red-950/20"
            >
              {/* Top red line */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />

              {/* Number */}
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-red-500 transition-colors group-hover:border-red-500/30 group-hover:bg-red-500/10">
                  {blog.slug}
                </span>

                <span className="text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500">
                  →
                </span>
              </div>

              {/* Content */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Article
                </p>

                <h3 className="min-h-[72px] text-xl font-bold leading-8 text-zinc-100 transition-colors group-hover:text-white">
                  {blog.title}
                </h3>
              </div>

              {/* Bottom */}
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                <span className="text-sm text-zinc-500">Read article</span>

                <span className="text-xs font-semibold uppercase tracking-wider text-red-500">
                  Blog #{blog.slug}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default blogs;
