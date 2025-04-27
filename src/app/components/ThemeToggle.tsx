'use client';

import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { toggleTheme } from '../lib/features/theme/themeSlice';

export function ThemeToggle() {
  const theme = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}