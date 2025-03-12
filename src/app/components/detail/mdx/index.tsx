import { ComponentType } from 'react';
import { Callout } from './Callout';
import { Image } from './Image';
import { ExternalLink } from './Link';
import { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents = {
  a: ExternalLink as ComponentType<{ href: string }>, // ✅ 타입 명시적으로 지정
  img: Image as ComponentType<{ src: string; alt: string }>, // ✅ 타입 명시적으로 지정
  blockquote: Callout,
  Callout,
};
