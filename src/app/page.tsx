import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskFilter } from './components/TaskFilter';
import { ThemeToggle } from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Task Tracker
        </h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
        <ThemeToggle />
      </div>
    </main>
  );
}