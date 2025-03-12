'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = () => {
    router.push(`/search?search=${search}`);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="relative mb-6 w-full">
      <input
        type="text"
        className="block w-full rounded-md border px-4 py-2 border-neutral-200 bg-white placeholder:text-tertiary dark:border-neutral-900 dark:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-800"
        placeholder="시리즈북, 포스트 제목 검색"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      ></input>
      <svg
        className="text-secondary absolute right-3 top-3 h-5 w-5 text-gray-600 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={onSubmit}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
  );
}
