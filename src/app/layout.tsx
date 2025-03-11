import type { Metadata } from 'next';
import './globals.css';
import { QueryClient } from '@tanstack/react-query';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

export const metadata: Metadata = {
  title: 'OKA BLOG',
  description: '나의 blog',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en" className="h-full scroll-my-20 scroll-smooth light">
      <body className="font-pretendard flex min-h-screen flex-col">
        <div className="mx-auto w-full max-w-[950px] px-4">
          <Header />
          <main className="mb-32"> {children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
