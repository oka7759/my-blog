import { Tag } from '@/types/types';

export async function Tags() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}tags`);
  if (!response.ok) {
    return <div>오류 발생</div>;
  }
  const tags: Tag[] = await response.json();

  return (
    <>
      <h1 className="text- text-4xl font-semibold mb-4">
        Tags <span className="text-base">({tags.length})</span>
      </h1>
      <div className="flex gap-2 flex-wrap mb-16">
        {tags.map((tag, idx) => {
          return (
            <div
              key={`tag-${idx}`}
              className="border  rounded-xl flex py-1 px-2  font-normal text-xs bg-black text-white"
            >
              {tag.name} <span className="pl-1">({tag.postCount})</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
