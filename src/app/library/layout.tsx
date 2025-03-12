import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'OKA-TECH Library',
  description: 'OKA-TECH의 모든 기록물을 한번에 확인하는 공간입니다.',
  openGraph: {
    title: 'OOKA-TECH Library',
    description: 'OKA-TECH의 모든 기록물을 한번에 확인하는 공간입니다.',
    images: ['/assets/no_images.png'],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
