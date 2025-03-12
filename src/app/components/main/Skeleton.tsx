export default function Skeleton({ count }: { count: number }) {
  return (
    <>
      {new Array(count).fill(0).map((_, idx) => (
        <div
          key={`book-item-skeleton-${idx}`}
          className="bg-gray-500 rounded-lg h-[302px] w-full animate-pulse"
        ></div>
      ))}
    </>
  );
}
