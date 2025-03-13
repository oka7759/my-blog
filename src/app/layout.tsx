import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ThemeProvider } from './components/main/theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'OKA-TECH Blog',
  description: 'OKA-TECH의 기술 블로그입니다.',
  openGraph: {
    title: 'OKA-TECH Blog',
    description: 'OKA-TECH의 기술 블로그입니다.',
    images: [`${process.env.NEXT_PUBLIC_API_SERVER_URL}/assets/no_images.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="h-full scroll-my-20 scroll-smooth"
      suppressHydrationWarning
    >
      <body className="font-pretendard flex min-h-screen flex-col">
        <ThemeProvider>
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
