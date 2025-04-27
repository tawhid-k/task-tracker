'use client';

import { useAppSelector } from './lib/hooks';
import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector(state => state.theme);
  
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);
  
  return <>{children}</>;
}