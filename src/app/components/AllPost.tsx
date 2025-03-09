'use client';

import React, { useEffect, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import styles from '@/app/page.module.css';
import { PostData } from '@/types';
import { formatDate } from '@/util/formatData';
import Link from 'next/link';

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
    <Link href={`/blog/${id}`} className="w-full py-4 hover:drop-shadow-base">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-tertiary mt-1">{content}</p>
      <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          {tags && tags.length > 0
            ? tags.map((tag) => (
                <span
                  className="rounded-lg px-2 py-0.5 transition-colors bg-gray-200 hover:text-primary hover:bg-gray-300 text-secondary font-normal"
                  key={`tag${tag.id}`}
                >
                  {tag.name}
                </span>
              ))
            : null}
        </div>
        <div className="ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold">
          <div className="flex items-center gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="14"
              height="14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              ></path>
            </svg>
            <span>{date[0]}</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="14"
              height="14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{date[1]}</span>
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
