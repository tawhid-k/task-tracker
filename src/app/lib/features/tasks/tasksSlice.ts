import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTask);
    },
    toggleTask: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(task => task.id !== action.payload.id);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;