'use client';

import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { setFilter, FilterMode } from '../lib/features/filter/filterSlice';

export function TaskFilter() {
  const filter = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();

  const filterOptions: FilterMode[] = ['all', 'active', 'completed'];

  return (
    <div className="flex justify-center mb-6">
      {filterOptions.map(option => (
        <button
          key={option}
          onClick={() => dispatch(setFilter(option))}
          className={`mx-1 px-4 py-2 rounded ${
            filter === option
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}