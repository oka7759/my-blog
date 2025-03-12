import { Series } from '@/types/types';
import { SeriesItem } from './SeriesItem';

export async function AllSeries() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}series`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const allSeries: Series[] = await response.json();

  return (
    <>
      <h1 className="mb-4 text-5xl font-extrabold">All Series</h1>
      <div className="text-xl mb-4">
        <p>복수의 포스트를 시리즈로 묶어 한번에 볼수 있습니다.</p>
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
