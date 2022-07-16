import { createSlice } from '@reduxjs/toolkit';

const CategoriesSlice = createSlice({
  name: 'bookstore/categories',
  initialState: [],
  reducers: {
    STATUS: () => 'Under Construction',
  },
});

export const { STATUS } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
