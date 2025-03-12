import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <div className="relative mx-auto mt-8 w-full max-w-[800px] h-auto">
      <NextImage
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        className="rounded-md"
      />
      {alt && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">
          {alt}
        </span>
      )}
    </div>
  );
};
