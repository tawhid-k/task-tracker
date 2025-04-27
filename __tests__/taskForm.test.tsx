import { describe, expect, it,  } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { TaskForm } from '@/app/components/TaskForm';
import tasksReducer from '@/app/lib/features/tasks/tasksSlice';

const createMockStore = () => {
  return configureStore({
    reducer: {
      tasks: tasksReducer,
    },
  });
};

describe('TaskForm', () => {
  const renderTaskForm = () => {
    const store = createMockStore();
    return render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );
  };

  it('renders input field and submit button', () => {
    renderTaskForm();
    expect(screen.getByPlaceholderText('Add a new task...')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    renderTaskForm();
    const input = screen.getByPlaceholderText('Add a new task...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input.value).toBe('New Task');
  });

  it('clears input and dispatches action on valid form submission', () => {
    renderTaskForm();
    const input = screen.getByPlaceholderText('Add a new task...') as HTMLInputElement;
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
  });

  it('does not submit form with empty input', () => {
    renderTaskForm();
    const input = screen.getByPlaceholderText('Add a new task...') as HTMLInputElement;
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.submit(form);

    expect(input.value).toBe('   ');
  });
});