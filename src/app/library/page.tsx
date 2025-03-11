import { SeriesList } from '../components/library/SeriesList';
import { Tags } from '../components/library/Tags';

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-semibold mb-4">Library</h1>
      <p className="text-base font-light mb-8">
        모든 기록물을 한번에 확인하는 공간입니다.
      </p>
      <Tags />
      <SeriesList />
    </>
  );
}
