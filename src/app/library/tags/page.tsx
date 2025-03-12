import { PostByTag } from '@/app/components/library/tags/PostByTag';
import { PostData } from '@/types/types';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}tags/${q}`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }

  const posts: PostData[] = await response.json();

  return (
    <>
      <h1 className="text-5xl font-semibold mb-4 border-b pb-3 align-baseline">
        {q}
        <span className="text-3xl align-baseline"> ({posts.length})</span>
      </h1>
      <div className="flex flex-col gap-10">
        {posts.map((post) => {
          return <PostByTag key={post.id} {...post} />;
        })}
      </div>
    </>
  );
}
