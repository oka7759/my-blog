import { HeadingItem, Post, PostMatter } from '@/types/types';
import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(##|###) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace('##', '').replace('#', ''),
      link:
        '#' +
        heading
          .replace('# ', '')
          .replace('#', '')
          .replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
          .replace('?', ''),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  );
};

export const parsePostDetail = async (mdContent: string): Promise<Post> => {
  const { data, content } = matter(mdContent);
  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date)
    .locale('ko')
    .format('YYYY년 MM월 DD일');
  return { ...grayMatter, dateString, content, readingMinutes };
};

export const truncateText = (text: string, maxLength = 30) => {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};
