import { PostData, Series } from '@/types';
import Link from 'next/link';
import AllPost from './components/AllPost';
export function SeriesItem({ id, title }: Series) {
  return (
    <Link href={`/library/${id}`} key={id}>
      <div className="relative rounded-lg w-40 h-56 bg-gray-400 p-7">
        <div className="absolute inset-y-0 left-2.5 w-[1px] bg-gray-200"></div>
        <div className="h-full bg-amber-50 px-2 py-3">{title}</div>
      </div>
    </Link>
  );
}

async function AllPostPage() {
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

async function AllSeries() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}series`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const allSeries: Series[] = await response.json();

  return (
    <>
      <h1 className="mb-4 text-5xl font-extrabold">Blog</h1>
      <div className="text-xl mb-4">
        <p>개발하면서 탐구한 것을 소소하게 기록하는 공간입니다.</p>
        <p>
          시리즈로 연재된 포스트는 아래 시리즈북으로 편리하게 열람할 수
          있습니다🧐
        </p>
      </div>
      <div className="relative mb-4 w-full">
        <input
          type="text"
          className="block w-full rounded-md border px-4 py-2 border-neutral-200 bg-white placeholder:text-tertiary  focus:outline-none focus:ring-4 focus:ring-neutral-200"
          placeholder="시리즈북, 포스트 제목 검색"
        ></input>
        <svg
          className="text-secondary absolute right-3 top-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <div className="flex gap-2  mb-20">
        {allSeries.map((series: Series) => {
          return <SeriesItem key={series.id} {...series} />;
        })}
      </div>
    </>
  );
}
export default function Home() {
  return (
    <>
      <AllSeries />
      <AllPostPage />
    </>
  );
}
