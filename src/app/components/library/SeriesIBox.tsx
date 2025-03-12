import { Series } from '@/types/types';
import { formatDate } from '@/util/formatData';
import Link from 'next/link';

export function SeriesBox({
  id,
  title,
  description,
  createdAt,
  postCount,
}: Series) {
  const date = formatDate(createdAt);
  return (
    <Link href={`/library/${id}`} key={id}>
      <div className="min-w-60 overflow-hidden rounded-md border shadow-md transition hover:shadow-xl dark:border-slate-700 dark:hover:border-white">
        <div className="px-3 pt-2 rounded-t-md border-b">
          <h2 className="mb-1 text-xl font-semibold line-clamp-1 ">{title}</h2>
          <p className="text-sm line-clamp-1 mb-1">{description}</p>
        </div>
        <div className="border-b rounded-lg px-4 py-2 shadow-md transition hover:shadow-xl flex justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar-days w-3.5"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
              <path d="M8 14h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M16 14h.01"></path>
              <path d="M8 18h.01"></path>
              <path d="M12 18h.01"></path>
              <path d="M16 18h.01"></path>
            </svg>
            <span>{date[0]}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book w-3.5"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
            </svg>

            <span>{postCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
