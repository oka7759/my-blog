import { PostData } from '@/types/types';
import AllPost from './AllPost';

export async function AllPostPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}all?page=0&size=10`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const allPosts: any = await response.json();
  const posts: PostData[] = allPosts.content;

  return (
    <>
      <h1 className="mb-4 text-5xl font-extrabold">All Posts</h1>
      <div className="mt-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-12">
        <AllPost posts={posts} />
      </div>
    </>
  );
}
