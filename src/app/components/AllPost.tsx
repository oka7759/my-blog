"use client";

import React, { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import styles from "@/app/page.module.css";
import { PostData } from "@/types";
import { formatDate } from "@/util/formatData";
import Link from "next/link";

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
    <Link href={`/blog/${id}`} className={styles.post}>
      <h2>{title}</h2>
      <p>{content}</p>
      <div className={styles.postInfo}>
        <div className={styles.tags}>
          {tags && tags.length > 0
            ? tags.map((tag) => <span key={`tag${tag.id}`}>{tag.name}</span>)
            : null}
        </div>
        <div className={styles.date}>
          <span>{date[0]}</span>
          <span>{date[1]}</span>
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
        throw new Error("Network response was not ok");
      }
      const allPosts: any = await response.json();
      const posts: PostData[] = allPosts.content;
      return posts;
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === limit ? allPages.length : undefined,
    initialPageParam: 0,
    queryKey: ["posts"],
    initialData: {
      pages: [posts],
      pageParams: [0],
    },
    staleTime: Infinity,
    refetchOnMount: false,
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      {" "}
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
