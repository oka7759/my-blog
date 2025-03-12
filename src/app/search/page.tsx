import { Post, PostData, SearchData, Series } from '@/types/types';
import { SeriesBox } from '../components/library/SeriesIBox';
import PostItem from '../components/main/PostItem';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const { search } = await searchParams;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}search/${search}`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const searchData: SearchData = await response.json();

  return (
    <>
      <h1 className="text-5xl font-semibold mb-4"> {`"${search}" 검색결과`}</h1>
      <p className="text-base font-light mb-8">
        원하시는 검색 내용을 선택 하세요.
      </p>
      <h1 className="text- text-4xl font-semibold mb-4">
        Series <span className="text-base">({searchData.series.length})</span>
      </h1>
      <div className="grid w-full gap-8 lg:grid-cols-3 lg:gap-5 mb-20 ">
        {searchData.series.map((series, index) => {
          return <SeriesBox key={series.id || index} {...series} />;
        })}
      </div>
      <h1 className="text- text-4xl font-semibold mb-4">
        Posts <span className="text-base">({searchData.posts.length})</span>
      </h1>
      <div className="grid w-full gap-8 lg:grid-cols-3 lg:gap-5 mb-20 ">
        {searchData.posts.map((post, index) => {
          return <PostItem key={post.id || index} {...post} />;
        })}
      </div>
    </>
  );
}
