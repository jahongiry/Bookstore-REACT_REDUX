import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './books/book';
import CategoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    allBooks: BookReducer,
    categories: CategoryReducer,
  },
});

export default store;
