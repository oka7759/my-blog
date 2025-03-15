import { PostData } from '@/types/types';
import AllPost from './AllPost';

export async function AllPostPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}all?page=0&size=6`,
    { cache: 'no-store' }
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const allPosts: { content: PostData[] } = await response.json();
  const posts = allPosts.content;

  return (
    <>
      <h1 className="mb-4 text-5xl font-extrabold">All Posts</h1>
      <div className="text-xl mb-4">
        <p>지금까지 게시된 포스트 리스트입니다.</p>
      </div>
      <div className="mt-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-12">
        <AllPost posts={posts} />
      </div>
    </>
  );
}
