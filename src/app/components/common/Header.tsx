import Link from 'next/link';
import ScrollProgressBar from '../detail/ScrollProgressBar';

export function Header() {
  return (
    <header className="pt-8 pb-12 flex justify-center items-center">
      <ScrollProgressBar />
      <nav className="mx-auto flex w-full justify-between items-center">
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
