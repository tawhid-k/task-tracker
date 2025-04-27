'use client';

import { useAppDispatch } from '../lib/hooks';
import { toggleTask, deleteTask } from '../lib/features/tasks/tasksSlice';
import { Task } from '../lib/features/tasks/tasksSlice';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center justify-between py-2 px-4 border-b last:border-b-0 dark:border-gray-700">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask({ id: task.id }))}
          className="mr-3 h-5 w-5"
        />
        <span className={`${task.completed ? 'line-through text-gray-500' : 'dark:text-white'}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTask({ id: task.id }))}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}