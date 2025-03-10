'use client';

import React, { useEffect, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { PostData } from '@/types/types';
import { formatDate } from '@/util/formatData';
import Link from 'next/link';
import Image from 'next/image';

const limit = 10;

export function PostItem({
  id,
  title,
  content,
  views,
  createdAt,
  tags,
}: PostData) {
  const date = formatDate(createdAt);
  return (
    <Link href={`/blog/${id}`}>
      <div className="flex h-full flex-col gap-3 overflow-hidden rounded-md border shadow-md transition hover:shadow-xl dark:border-slate-700 dark:hover:border-white">
        <div className="relative h-48 w-full rounded-t-md border-b">
          <Image
            src={
              'https://d5br5.dev/_next/image?url=%2Fposts%2Fdeep_dive%2Fbrowser-paint%2Fthumbnail.png&w=640&q=75'
            }
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
                      className="text-xs rounded-lg px-2 py-0.5 transition-colors bg-pink-600 hover:text-primary hover:bg-gray-300 text-secondary font-medium"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
    </Link>
  );
}

interface AllPostProps {
  posts: PostData[];
}

const AllPostContent: React.FC<AllPostProps> = ({ posts }) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    PostData[],
    Error
  >({
    queryFn: async ({ pageParam = 0 }) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}all?page=${pageParam}&size=${limit}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const allPosts: any = await response.json();
      const posts: PostData[] = allPosts.content;
      return posts;
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === limit ? allPages.length : undefined,
    initialPageParam: 0,
    queryKey: ['posts'],
    initialData: { pages: [posts], pageParams: [0] },
    staleTime: Infinity,
    refetchOnMount: false,
  });

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      {data?.pages
        .flat()
        .map((post: PostData, index: number) => (
          <PostItem key={post.id || index} {...post} />
        ))}
      <div ref={ref} />
    </>
  );
};

const AllPost: React.FC<AllPostProps> = ({ posts }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AllPostContent posts={posts} />
    </QueryClientProvider>
  );
};

export default AllPost;
