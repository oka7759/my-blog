import Link from 'next/link';
import ScrollProgressBar from '../detail/ScrollProgressBar';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <>
      <header className=" flex w-full flex-col items-center justify-center border-b bg-background shadow-sm print:hidden">
        <ScrollProgressBar />
        <nav className="mt-1 flex h-[64px] w-full max-w-[1200px] items-center justify-between px-4">
          <ul className="flex space-x-4">
            <li>
              <Link className="text-2xl font-bold" href="/">
                😆
              </Link>
            </li>
            <li>
              <Link className="text-2xl font-bold" href={'/'}>
                Post
              </Link>
            </li>
            <li>
              <Link className="text-2xl font-bold" href={'/library'}>
                Library
              </Link>
            </li>
          </ul>
          <div className="flex ml-auto items-center gap-2">
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
