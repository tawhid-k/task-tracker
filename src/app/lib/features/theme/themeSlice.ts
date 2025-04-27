import { createSlice } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

const initialState: ThemeMode = 'light' as ThemeMode;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;