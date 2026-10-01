import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogs | Learn & Explore & Discover",
  description:
    "Do you want to learn how to trade? or read about trading? This website is the place to learn everything about trading! Welcome to the trading blog website",
  openGraph: {
    title: "Blogs | Learn $ Explore & Discover",
    description:
      "Explore useful articles, practical guides and interesting topics through the Blogs platform.",
    url: "https://tradeblogs.com",
    siteName: "Blogs",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/ExampleChartTrading_1.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        width: 1200,
        height: 630,
        alt: "Blogs - Learn, Explore & Discover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
