import { PostData } from '@/types/types';
import { formatDate } from '@/util/formatData';
import Link from 'next/link';
import Image from 'next/image';

export default function PostItem({
  id,
  title,
  views,
  imageUrl,
  createdAt,
  tags,
}: PostData) {
  const date = formatDate(createdAt);
  const validImageUrl = imageUrl ? imageUrl : '/assets/no_images.png';
  return (
    <Link href={`/blog/${id}`}>
      <div className="flex h-full flex-col gap-3 overflow-hidden rounded-md border shadow-md transition hover:shadow-xl dark:border-slate-700 dark:hover:border-white">
        <div className="relative h-48 w-full rounded-t-md border-b">
          <Image
            src={validImageUrl}
            alt={`thumbnail for ${title}`}
            sizes="(max-width: 1000px) 50vw, 450px"
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4 pt-1">
          <div>
            <h2 className="mb-3 mt-1 text-lg font-bold sm:text-xl md:text-lg line-clamp-2">
              {title}
            </h2>
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
            <div className="flex items-center gap-2">
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
                  className="lucide lucide-eye w-4"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>{views}</span>
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
