import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasks/tasksSlice';
import themeReducer from './features/theme/themeSlice';
import filterReducer from './features/filter/filterSlice';
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// app/lib/hooks.ts
