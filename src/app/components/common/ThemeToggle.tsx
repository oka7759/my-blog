'use client';

import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      2
    </button>
  );
};
