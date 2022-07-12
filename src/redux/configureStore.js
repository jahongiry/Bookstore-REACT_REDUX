import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import categoriesReducer from './books/categories';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoriesReducer,
  },
});

export default store;
