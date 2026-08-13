import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'ACC Path Explorer | Austin Community College Career & Pathway Exploration',
  description: 'Independent career and educational pathway exploration portal for Austin Community College students. Explore verified degree awards, Texas transfer guides, and test low-risk course hypotheses.',
  keywords: [
    'Austin Community College',
    'ACC Path Explorer',
    'ACC Free Tuition',
    'Texas Core Curriculum',
    'UT Austin Transfer',
    'Texas State University Transfer',
    'O*NET Interest Profiler',
    'Austin career exploration'
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
