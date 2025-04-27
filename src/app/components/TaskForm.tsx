'use client';

import { useState } from 'react';
import { useAppDispatch } from '../lib/hooks';
import { addTask } from '../lib/features/tasks/tasksSlice';

export function TaskForm() {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask({ title: title.trim() }));
      setTitle('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="mb-6"
      aria-label="Add task form"
    >
      <div className="flex">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border rounded-l focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>
    </form>
  );
}