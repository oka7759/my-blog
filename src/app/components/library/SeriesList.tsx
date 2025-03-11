import { Series } from '@/types/types';
import { SeriesBox } from './SeriesIBox';

export async function SeriesList() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}series`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const allSeries: Series[] = await response.json();

  return (
    <>
      <h1 className="text- text-4xl font-semibold mb-4">
        Series <span className="text-base">({allSeries.length})</span>
      </h1>
      <div className="grid w-full gap-8 lg:grid-cols-3 lg:gap-5 mb-20 ">
        {allSeries.map((series: Series) => {
          return <SeriesBox key={series.id} {...series} />;
        })}
      </div>
    </>
  );
}
