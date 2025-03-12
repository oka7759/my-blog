import Article from '@/app/components/library/Article';
import { SeriesDetail } from '@/types/types';
import { formatDate } from '@/util/formatData';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}series/${id}`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const seriesDetail: SeriesDetail = await response.json();

  return {
    title: `OKA TECH - ${seriesDetail.title} 시리즈`,
    description: seriesDetail.description,
    openGraph: {
      title: `OKA TECH - ${seriesDetail.title} 시리즈`,
      description: seriesDetail.description,
      images: ['/assets/no_images.png'],
    },
  };
}

function Left({ title }: { title: string }) {
  return (
    <div className="w-2/5 ">
      <div className="relative rounded-lg w-56 h-72 bg-gray-300 p-10">
        <div className="absolute inset-y-0 left-2.5 w-[1px] bg-gray-200"></div>
        <div className="absolute inset-y-0 left-5 w-[1px] bg-gray-200"></div>
        <div className="h-full bg-amber-50 px-2 py-3 font-semibold text-xl">
          {title}
        </div>
      </div>
    </div>
  );
}

async function Right({ seriesDetail }: { seriesDetail: SeriesDetail }) {
  const { description, createdAt, posts } = seriesDetail;
  const date = formatDate(createdAt);
  return (
    <div className="w-3/5">
      <div className="w-full border px-3 pt-5 pb-3 rounded bg-gray-200 mb-16">
        <h1 className="text-xl font-semibold mb-3">{description}</h1>
        <div className="flex justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
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
            <span>{posts.length} 개</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post, idx) => {
          return <Article key={post.id} {...post} idx={idx} />;
        })}
      </div>
    </div>
  );
}
export default async function Home({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}series/${id}`
  );
  if (!response.ok) {
    return <div>오류 발생</div>;
  }

  const seriesDetail: SeriesDetail = await response.json();

  return (
    <div className="flex w-full gap-4">
      <Left title={seriesDetail.title} />
      <Right seriesDetail={seriesDetail} />
    </div>
  );
}
