import { Series } from '@/types/types';
import Link from 'next/link';

export function SeriesItem({ id, title }: Series) {
  return (
    <Link href={`/library/${id}`} key={id}>
      <div className="relative rounded-lg w-40 h-56 bg-gray-400 p-7 dark:bg-white">
        <div className="absolute inset-y-0 left-2.5 w-[1px] bg-gray-200  dark:bg-black"></div>
        <div className="h-full bg-amber-50 px-2 py-3 dark:bg-black">
          {title}
        </div>
      </div>
    </Link>
  );
}
