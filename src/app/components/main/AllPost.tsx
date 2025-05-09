'use client';

import React, { useEffect, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { PostData } from '@/types/types';
import PostItem from './PostItem';
import Skeleton from './Skeleton';

const limit = 6;

interface AllPostProps {
  posts: PostData[];
}

const AllPostContent: React.FC<AllPostProps> = ({ posts }) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<PostData[], Error>({
      queryFn: async ({ pageParam = 0 }) => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_SERVER_URL}all?page=${pageParam}&size=${limit}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const allPosts: { content: PostData[] } = await response.json();
        const posts = allPosts.content;
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

      {isFetchingNextPage && (
        <>
          <Skeleton count={4} />
        </>
      )}

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
