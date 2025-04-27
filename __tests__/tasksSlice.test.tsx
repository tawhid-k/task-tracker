import {describe, expect, it} from 'vitest';
import tasksReducer, { addTask, deleteTask, toggleTask, Task } from "@/app/lib/features/tasks/tasksSlice";

describe('tasksSlice', () => {
  it('should handle initial state', () => {
    expect(tasksReducer(undefined, { type: 'unknown' })).toEqual([]);
  });

  it('should handle addTask', () => {
    const initialState: Task[] = [];
    const newTask = { title: 'Test Task' };
    const actual = tasksReducer(initialState, addTask(newTask));
    expect(actual).toEqual([{
      id: expect.any(String),
      title: 'Test Task',
      completed: false
    }]);
  });

  it('should handle deleteTask', () => {
    const initialState = [{ id: '1', title: 'Test Task', completed: false }];
    const actual = tasksReducer(initialState, deleteTask({id: '1'}));
    expect(actual).toEqual([]);
  });

  it('should handle toggleTask', () => {
    const initialState = [{ id: '1', title: 'Test Task', completed: false }];
    const actual = tasksReducer(initialState, toggleTask({id: '1'}));
    expect(actual[0].completed).toBe(true);
  });

  it('should not toggle non-existent task', () => {
    const initialState = [{ id: '1', title: 'Test Task', completed: false }];
    const actual = tasksReducer(initialState, toggleTask({id: '2'}));
    expect(actual).toEqual(initialState);
  });

  it('should handle multiple tasks', () => {
    let state = tasksReducer([], addTask({ title: 'Task 1' }));
    state = tasksReducer(state, addTask({ title: 'Task 2' }));
    expect(state).toHaveLength(2);
    expect(state[0].title).toBe('Task 1');
    expect(state[1].title).toBe('Task 2');
  });
});
