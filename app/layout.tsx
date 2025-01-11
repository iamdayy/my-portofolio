import { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dayan Sauqy - Fullstack Developer",
  description: "Personal portfolio of Dayan Sauqy, a fullstack developer",
  keywords: [
    "fullstack developer",
    "React",
    "Node.js",
    "web development",
    "Dayan Sauqy",
  ],
  authors: [{ name: "Dayan Sauqy" }],
  creator: "Dayan Sauqy",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yourwebsite.com",
    siteName: "Dayan Sauqy - Fullstack Developer",
    title: "Dayan Sauqy - Fullstack Developer Portfolio",
    description:
      "Personal portfolio of Dayan Sauqy, a fullstack developer specializing in React, Node.js, and modern web technologies.",
    // images: [
    //   {
    //     url: 'https://www.yourwebsite.com/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Dayan Sauqy - Fullstack Developer',
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayan Sauqy - Fullstack Developer",
    description:
      "Personal portfolio of Dayan Sauqy, a fullstack developer specializing in React, Node.js, and modern web technologies.",
    creator: "@yourtwitter",
    // images: ['https://www.yourwebsite.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-site-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   yahoo: "your-yahoo-verification-code",
  //   other: {
  //     me: ["mailto:your-email@example.com", "https://yourwebsite.com"],
  //   },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <CustomCursor />
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
