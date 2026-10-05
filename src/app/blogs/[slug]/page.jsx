import notfound from "@/app/not-found";
import { resolve } from "styled-jsx/css";

const blogData = {
  1: {
    category: "Trading Basics",
    title: "What Is Forex Trading and How Does It Work?",
    description:
      "A complete introduction to the Forex market, currency pairs, price movements, and the basic mechanics behind every trade.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/ExampleChartTrading_1.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    author: "TradeLab Editorial",
    date: "September 24, 2026",
    readTime: "8 min read",
    sections: [
      {
        title: "Understanding the Forex Market",
        text: "Forex, short for foreign exchange, is a global financial market where currencies are exchanged against one another. Unlike traditional stock exchanges, Forex operates through a worldwide network of banks, financial institutions, brokers and individual traders.",
      },
      {
        title: "How Currency Pairs Work",
        text: "Currencies are always traded in pairs. When you trade EUR/USD, for example, you are simultaneously buying one currency and selling another. The first currency is called the base currency, while the second is the quote currency.",
      },
      {
        title: "What Moves the Price?",
        text: "Currency prices can react to interest-rate decisions, inflation, employment data, central-bank policies, geopolitical events and changes in market sentiment. Understanding these drivers can help traders interpret why a market is moving.",
      },
      {
        title: "Why Risk Management Matters",
        text: "Having a trading idea is only one part of the process. Professional traders also consider position size, stop-loss placement and the amount of capital they are willing to expose to a single trade.",
      },
    ],
    takeaways: [
      "Forex is a global market for exchanging currencies.",
      "Currencies are traded in pairs such as EUR/USD and GBP/USD.",
      "Economic news and market sentiment can influence price.",
      "Risk management is an essential part of a trading plan.",
    ],
  },

  2: {
    category: "Technical Analysis",
    title: "How to Read Support and Resistance Levels",
    description:
      "Learn how traders identify important price zones and use support and resistance as part of a technical-analysis framework.",
    image:
      "https://cdn.arz.digital/p/faPI3AONFIxPSGPQW8Bqg6q_O_Q-nep3uGHl7zfd944/q:80/rs:fit:1200/g:ce/czM6Ly9hZC1jbnQvbWFpbi8yMDI0LzAyL1doYXQtaXMtdHJhZGluZy0yLnBuZw.jpg",
    author: "TradeLab Editorial",
    date: "September 22, 2026",
    readTime: "10 min read",
    sections: [
      {
        title: "What Is Support?",
        text: "Support is a price area where selling pressure has previously weakened and buyers have become more active. It is better understood as a zone rather than one perfectly precise price.",
      },
      {
        title: "What Is Resistance?",
        text: "Resistance represents an area where buying pressure has previously struggled to push the market higher. When price approaches such a zone, traders often watch closely for either rejection or a breakout.",
      },
      {
        title: "Zones Instead of Exact Lines",
        text: "Markets rarely respect perfectly accurate horizontal lines. Using zones allows traders to account for normal market volatility and the fact that different participants may react at slightly different prices.",
      },
      {
        title: "Breakouts and Retests",
        text: "A breakout occurs when price moves beyond an important level. Some traders then wait for a retest of that area before considering an entry, although no setup can guarantee a successful trade.",
      },
    ],
    takeaways: [
      "Support and resistance are usually better viewed as zones.",
      "Previous reactions can help identify important price areas.",
      "Breakouts should be evaluated together with market context.",
      "No technical level guarantees a reversal or continuation.",
    ],
  },

  3: {
    category: "Risk Management",
    title: "Risk Management: The Part of Trading Most Beginners Ignore",
    description:
      "A practical look at position sizing, stop-losses, risk-to-reward and why protecting capital matters in trading.",
    image: "https://blog.pooleno.ir/wp-content/uploads/2023/06/image-67.png",
    author: "TradeLab Editorial",
    date: "September 20, 2026",
    readTime: "12 min read",
    sections: [
      {
        title: "Trading Is Not Only About Finding Entries",
        text: "Many new traders spend most of their time searching for perfect entries. However, a trading system also needs rules for position size, invalidation, losses and overall exposure.",
      },
      {
        title: "Position Size",
        text: "Position size determines how much of the account is exposed to a particular market movement. It should be calculated according to the planned stop-loss distance and the amount of capital a trader is prepared to risk.",
      },
      {
        title: "Stop-Losses",
        text: "A stop-loss can define the point at which a trading idea is considered invalid. Its location should be based on the structure of the setup rather than an arbitrary number chosen after opening a position.",
      },
      {
        title: "Risk-to-Reward",
        text: "Risk-to-reward compares the potential loss of a setup with its planned potential profit. It is one useful measurement, but it should never be considered independently from the strategy's actual historical performance.",
      },
    ],
    takeaways: [
      "A trading plan needs risk rules as well as entry rules.",
      "Position size should be connected to planned risk.",
      "Stop-loss placement should have a logical reason.",
      "Risk-to-reward alone does not make a strategy profitable.",
    ],
  },

  4: {
    category: "Market Psychology",
    title: "Trading Psychology: Why Discipline Matters",
    description:
      "Explore how emotions, impulsive decisions and inconsistent execution can affect a trader's performance.",
    image:
      "https://bitpin.ir/academy/wp-content/uploads/2022/04/cryptocurrency-trading-1024x640.jpg",
    author: "TradeLab Editorial",
    date: "September 18, 2026",
    readTime: "9 min read",
    sections: [
      {
        title: "The Emotional Side of Trading",
        text: "Trading involves uncertainty. Even a well-tested setup can lose, which means traders need a process that does not depend on being correct every time.",
      },
      {
        title: "Fear and FOMO",
        text: "Fear can cause traders to exit too early, while the fear of missing out can encourage late entries after a large move has already happened. Both behaviors can move a trader away from their original plan.",
      },
      {
        title: "The Importance of a Trading Journal",
        text: "Recording the reason for every trade, the setup, entry, exit and emotional state can help identify repeated mistakes and make the trading process more measurable.",
      },
      {
        title: "Consistency Over Excitement",
        text: "A professional approach is generally less about finding exciting trades and more about repeatedly following a clearly defined process over a sufficiently large sample of trades.",
      },
    ],
    takeaways: [
      "Emotions can influence decision-making under uncertainty.",
      "FOMO can lead to impulsive entries.",
      "A trading journal makes mistakes easier to review.",
      "Consistency is more useful than constantly changing strategies.",
    ],
  },

  5: {
    category: "Gold Trading",
    title: "Understanding Gold: What Moves XAU/USD?",
    description:
      "An introduction to the major factors that can influence gold prices and what traders monitor when analyzing XAU/USD.",
    image:
      "https://modaresanepishtaz.com/wp-content/uploads/2022/04/young-man-online-trading-crypto-currency.jpg",
    author: "TradeLab Editorial",
    date: "September 15, 2026",
    readTime: "11 min read",
    sections: [
      {
        title: "What Is XAU/USD?",
        text: "XAU/USD represents the price of one troy ounce of gold expressed in US dollars. It is one of the instruments frequently followed by traders interested in precious metals and macroeconomic markets.",
      },
      {
        title: "Interest Rates and Gold",
        text: "Changes in interest-rate expectations can influence the attractiveness of assets that do not generate conventional interest. Traders therefore pay close attention to central-bank decisions and economic data.",
      },
      {
        title: "The US Dollar",
        text: "Because gold is commonly quoted in US dollars, movements in the dollar can be an important part of the broader market context. However, the relationship is not perfectly constant.",
      },
      {
        title: "Volatility",
        text: "Gold can experience significant price movements during major economic announcements or periods of increased uncertainty. Traders should therefore account for volatility when planning a position.",
      },
    ],
    takeaways: [
      "XAU/USD represents gold priced in US dollars.",
      "Interest-rate expectations can affect gold.",
      "The US dollar is an important part of the analysis.",
      "Gold can become highly volatile around major events.",
    ],
  },

  6: {
    category: "Trading Strategy",
    title: "How to Build a Simple Trading Plan",
    description:
      "A structured framework for defining setups, risk rules, trading hours and review processes before entering the market.",
    image:
      "https://www.karamooz.com/blog/wp-content/uploads/2024/06/what-is-trade-3.jpg",
    author: "TradeLab Editorial",
    date: "September 12, 2026",
    readTime: "13 min read",
    sections: [
      {
        title: "Define Your Market",
        text: "A trading plan should clearly specify which instruments you trade. Focusing on a limited number of markets can make it easier to understand their behavior and maintain consistent rules.",
      },
      {
        title: "Define Your Setup",
        text: "Before entering a trade, determine what conditions must be present. These conditions might include market structure, technical levels, confirmation signals or a specific time window.",
      },
      {
        title: "Define Your Risk",
        text: "Every plan should specify how much exposure is acceptable and what happens when a trade moves against the original idea. These rules should be established before emotions enter the decision.",
      },
      {
        title: "Review and Improve",
        text: "A strategy should be evaluated using historical and live results rather than isolated wins or losses. Keeping detailed records can reveal which parts of the process need improvement.",
      },
    ],
    takeaways: [
      "Choose a clearly defined market.",
      "Write down the exact conditions for an entry.",
      "Define risk before opening a position.",
      "Review results regularly instead of judging a strategy from a few trades.",
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  console.log(slug);
  return {
    title: `Blog ${slug}`,
    description: `This is a short BLOG about trading!`,
  };
}

async function page({ params }) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Test!");
    }, 2000);
  });

  const { slug } = await params;

  console.log(slug);

  if (slug > 6) {
    return notfound();
  }

  const article = blogData[slug] || {
    category: "Trading",
    title: `Trading Article #${slug}`,
    description:
      "An educational trading article covering market analysis, risk management and practical concepts for developing a structured trading process.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=85",
    author: "TradeLab Editorial",
    date: "September 28, 2026",
    readTime: "8 min read",
    sections: [
      {
        title: "Introduction",
        text: "This article explores several important ideas related to financial markets and trading. The goal is to provide structured information that can help readers better understand the topic.",
      },
      {
        title: "Market Context",
        text: "Successful market analysis requires looking at price behavior together with context. Technical levels, volatility, economic information and market sentiment can all play a role.",
      },
      {
        title: "Risk Management",
        text: "A trading idea should always be accompanied by a clear plan for managing potential losses. Position sizing and predefined invalidation levels are important components of that process.",
      },
      {
        title: "Final Thoughts",
        text: "Trading is a probabilistic activity. Developing a consistent process, documenting decisions and reviewing results can help create a more structured approach to learning.",
      },
    ],
    takeaways: [
      "Build a structured process.",
      "Understand the market context.",
      "Define risk before entering a trade.",
      "Review your decisions regularly.",
    ],
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-red-900/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          <span className="transition-colors hover:text-zinc-300">Blogs</span>

          <span className="text-zinc-700">/</span>

          <span className="text-red-500">{article.category}</span>

          <span className="text-zinc-700">/</span>

          <span className="text-zinc-600">Article #{slug}</span>
        </div>

        {/* Article Header */}
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e0e0e] shadow-2xl shadow-black/40">
          {/* Hero Image */}
          <div className="relative h-[280px] overflow-hidden sm:h-[380px] lg:h-[470px]">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-black/30 to-transparent" />

            {/* Category */}
            <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-red-400 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                {article.category}
              </span>
            </div>

            {/* Article Number */}
            <div className="absolute right-5 top-5 sm:right-8 sm:top-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-sm font-black text-white backdrop-blur-md">
                {slug}
              </div>
            </div>

            {/* Hero Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12">
              <div className="max-w-4xl">
                <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  {article.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Article Meta */}
          <div className="border-b border-white/10 bg-[#111111] px-6 py-5 sm:px-10">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                  ✦
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                    Author
                  </p>

                  <p className="font-medium text-zinc-300">{article.author}</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10 max-sm:hidden" />

              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                  Published
                </p>

                <p className="font-medium text-zinc-300">{article.date}</p>
              </div>

              <div className="h-8 w-px bg-white/10 max-sm:hidden" />

              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                  Reading Time
                </p>

                <p className="font-medium text-zinc-300">{article.readTime}</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="grid lg:grid-cols-[1fr_280px]">
            {/* Main Content */}
            <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
              {/* Introduction */}
              <div className="mb-12 rounded-2xl border border-red-500/15 bg-red-500/[0.035] p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-red-500" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                    Introduction
                  </span>
                </div>

                <p className="text-base leading-8 text-zinc-300 sm:text-lg">
                  {article.description}
                </p>
              </div>

              {/* Article Sections */}
              <div className="space-y-12">
                {article.sections.map((section, index) => (
                  <section key={section.title}>
                    <div className="mb-5 flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-sm font-black text-red-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2 className="pt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {section.title}
                      </h2>
                    </div>

                    <p className="pl-0 text-base leading-8 text-zinc-400 sm:pl-[52px] sm:text-lg sm:leading-9">
                      {section.text}
                    </p>

                    {index === 1 && (
                      <div className="mt-7 rounded-2xl border-l-2 border-red-500 bg-white/[0.025] px-6 py-5 sm:ml-[52px]">
                        <p className="text-sm font-medium leading-7 text-zinc-300">
                          “The goal is not to predict every market movement. The
                          goal is to build a process that can handle
                          uncertainty.”
                        </p>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="mt-14 rounded-3xl border border-white/10 bg-[#121212] p-6 sm:p-8">
                <div className="mb-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                    Quick Summary
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-white">
                    Key Takeaways
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {article.takeaways.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-2xl border border-white/5 bg-black/20 p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-black text-white">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-7 text-zinc-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Note */}
              <div className="mt-8 rounded-3xl border border-yellow-500/10 bg-yellow-500/[0.025] p-6 sm:p-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
                    !
                  </div>

                  <div>
                    <h3 className="mb-2 font-bold text-zinc-200">
                      Important Note
                    </h3>

                    <p className="text-sm leading-7 text-zinc-500">
                      This article is provided for educational purposes.
                      Financial markets involve risk, and no technical setup,
                      market analysis or trading idea can guarantee a specific
                      result.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="border-t border-white/10 bg-[#0a0a0a] p-6 lg:border-l lg:border-t-0 lg:p-7">
              <div className="sticky top-8">
                {/* Article Info */}
                <div className="mb-8">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                    Article Info
                  </p>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between border-b border-white/5 py-4">
                      <span className="text-sm text-zinc-600">Category</span>
                      <span className="text-sm font-semibold text-zinc-300">
                        {article.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-white/5 py-4">
                      <span className="text-sm text-zinc-600">Article</span>
                      <span className="text-sm font-semibold text-zinc-300">
                        #{slug}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-white/5 py-4">
                      <span className="text-sm text-zinc-600">Reading</span>
                      <span className="text-sm font-semibold text-zinc-300">
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                    Related Topics
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Trading",
                      "Technical Analysis",
                      "Risk Management",
                      "Forex",
                      "Markets",
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-zinc-500 transition hover:border-red-500/30 hover:text-red-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
                    ↗
                  </div>

                  <h3 className="font-bold text-white">Keep Learning</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Explore more articles about trading, analysis and financial
                    markets.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </article>

        {/* Bottom Navigation */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0d0d0d] px-6 py-5 sm:flex-row">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-700">
              TradeLab Blog
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Learn. Analyze. Improve.
            </p>
          </div>

          <div className="text-xs font-medium text-zinc-700">
            ARTICLE #{slug} • {article.category.toUpperCase()}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-10 text-center">
          <p className="text-xs tracking-widest text-zinc-700">
            BLOGS • TRADING • EDUCATION
          </p>
        </footer>
      </div>
    </main>
  );
}

export default page;
