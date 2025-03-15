import { Series } from '@/types/types';
import { SeriesItem } from './SeriesItem';
import SearchBar from './SearchBar';

export async function AllSeries() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}series`,
    { cache: 'no-store' }
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
      <SearchBar />
      <div className="flex gap-2  mb-20">
        {allSeries.map((series: Series) => {
          return <SeriesItem key={series.id} {...series} />;
        })}
      </div>
    </>
  );
}
