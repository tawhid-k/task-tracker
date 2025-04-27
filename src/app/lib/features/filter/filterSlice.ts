import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterMode = 'all' | 'active' | 'completed';

const initialState: FilterMode = 'all' as FilterMode;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterMode>) => {
      return action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;