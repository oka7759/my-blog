import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { QueryClient } from '@tanstack/react-query';

export const metadata: Metadata = {
  title: 'OKA BLOG',
  description: '나의 blog',
};

export function Header() {
  return (
    <header className="pt-8 pb-12 z-50 flex justify-center items-center">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link className="text-xl font-semibold" href="/">
              😆
            </Link>
          </li>
          <li>
            <Link className="text-xl font-semibold" href={'/'}>
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-xl font-semibold" href={'/code'}>
              Code Piece
            </Link>
          </li>
          <li>
            <Link className="text-xl font-semibold" href={'/library'}>
              Library
            </Link>
          </li>
        </ul>
        <div className="flex ml-auto items-center gap-2">
          <button className="flex cursor-pointer items-center rounded-lg p-1 text-xs bg-secondary transition-colors bg-gray-200 hover:bg-gray-300">
            <span className="px-3">search...</span>
            <div className=" ml-auto rounded-lg px-2 py-1 bg-primary border transition-colors">
              ⌘ K
            </div>
          </button>
          <button>2</button>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col  items-end">
      <div className=" flex gap-3">
        <span>💻</span>
        <span>💻</span>
        <span>💻</span>
      </div>
      <div className="font-light text-lg">
        © 2022-2025 bepyan blog Powered by Next.js
      </div>
    </footer>
  );
}
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto max-w3xl px-5">
          <Header />
          <main> {children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
