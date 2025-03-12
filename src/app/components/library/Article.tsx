import { PostData } from '@/types/types';
import { formatDate } from '@/util/formatData';
import Link from 'next/link';

export default function Article({
  id,
  title,
  createdAt,
  tags,
  idx,
}: PostData & { idx: number }) {
  const date = formatDate(createdAt);
  return (
    <Link href={`/blog/${id}`}>
      <div className="flex gap-2 py-4  px-4 overflow-hidden border rounded-md  shadow-md transition hover:shadow-xl dark:border-slate-700 dark:hover:border-white">
        <div className="text-2xl font-semibold">{idx + 1}.</div>
        <div className="flex flex-col  w-full">
          <div className="text-2xl font-semibold mb-3">{title}</div>
          <div className="flex justify-between">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {tags && tags.length > 0
                ? tags.map((tag) => (
                    <span
                      className="text-xs rounded-lg px-2 py-0.5 transition-colors bg-gray-300 hover:text-primary text-secondary font-medium"
                      key={`tag${tag.id}`}
                    >
                      {tag.name}
                    </span>
                  ))
                : null}
            </div>
            <div className="flex justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
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
                  className="lucide lucide-clock3 w-3.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16.5 12"></polyline>
                </svg>
                <span>{date[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
