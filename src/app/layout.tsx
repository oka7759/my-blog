import type { Metadata } from 'next';
import './globals.css';
import { QueryClient } from '@tanstack/react-query';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'OKA BLOG',
  description: '나의 blog',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en" className="h-full scroll-my-20 scroll-smooth">
      <body className="font-pretendard flex min-h-screen flex-col">
        <ThemeProvider attribute="class">
          <Header />
          <main className=" mt-14 mx-auto w-full max-w-[950px] px-4 flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
