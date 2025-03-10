import { PostData } from '@/types/types';
import styles from './page.module.css';

import { formatDate } from '@/util/formatData';
import Sidebar from '@/app/components/detail/Sidebar';
import { parsePostDetail, parseToc } from '@/util/util';
import { PostBody } from '@/app/components/detail/PostBody';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}${id}`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const allPosts: PostData = await response.json();
  const date = formatDate(allPosts.createdAt);
  const toc = parseToc(allPosts.content);
  const post = await parsePostDetail(allPosts.content);
  return (
    <div className="prose mx-auto w-full max-w-[750px] px-5 dark:prose-invert sm:px-6">
      <section className={styles.top}>
        <div className={styles.titleBox}>
          <h1>{allPosts.title}</h1>
          <div className={styles.date}>
            <span>{date[0]}</span>
            <span>{date[1]}</span>
          </div>
        </div>
      </section>
      <article className="relative">
        <PostBody post={post} />
        <Sidebar toc={toc} />
      </article>
    </div>
  );
}
