'use client';

import { useAppSelector } from '../lib/hooks';
import { TaskItem } from './TaskItem';
import { Task } from '../lib/features/tasks/tasksSlice';
export function TaskList() {
  const tasks = useAppSelector(state => state.tasks);
  const filter = useAppSelector(state => state.filter);

  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === 'active') {
      return !task.completed;
    } else if (filter === 'completed') {
      return task.completed;
    }
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500 dark:text-gray-400">
        No {filter !== 'all' ? filter : ''} tasks to display
      </div>
    );
  }

  return (
    <ul className="bg-white rounded shadow-md dark:bg-gray-800">
      {filteredTasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}