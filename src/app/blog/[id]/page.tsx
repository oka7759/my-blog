import { PostData } from '@/types/types';
import { formatDate } from '@/util/formatData';
import Sidebar from '@/app/components/detail/Sidebar';
import { parsePostDetail, parseToc } from '@/util/util';
import { PostBody } from '@/app/components/detail/PostBody';
import Giscus from '@/app/components/detail/Giscus';

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
      <div className="border-b pb-10">
        <div className="w-full text-center">
          <h1 className="text-4xl font">{allPosts.title}</h1>
          <div className="flex justify-center gap-10 text-sm text-gray-500 dark:text-gray-400">
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
      <article className="relative">
        <PostBody post={post} />
        <Sidebar toc={toc} />
      </article>
      <Giscus />
    </div>
  );
}
