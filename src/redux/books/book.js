import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const LOAD = 'bookstore/books/LOAD';

// eslint-disable-next-line
const baseURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const urlId = 'sF3v4K9XvF0U28c60dQV';

export const loadBooks = createAsyncThunk(LOAD, async () => {
  const response = await fetch(`${baseURL}/${urlId}/books`);
  const books = await response.json();
  const formatedBooksObject = [
    Object.keys(books).map((key) => ({
      id: key,
      ...books[key][0],
    })),
  ];
  return formatedBooksObject;
});

export const addBook = createAsyncThunk(
  ADD,
  async ({ title, author, category }, thunkAPI) => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    await fetch(`${baseURL}/${urlId}/books`, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => thunkAPI.dispatch(loadBooks()));
    const books = thunkAPI.getState().allBooks;
    return books;
  },
);

export const deleteBook = createAsyncThunk(REMOVE, async (bookId, thunkAPI) => {
  await fetch(`${baseURL}/${urlId}/books/${bookId}`, {
    method: 'DELETE',
  }).then(() => thunkAPI.dispatch(loadBooks()));
  const books = thunkAPI.getState().allBooks;
  return books;
});

export const BookstoreSlice = createSlice({
  name: 'bookstore/books',
  initialState: [],
  reducers: {},
  extraReducers: {
    [loadBooks.fulfilled]: (state, action) => action.payload[0],
    [addBook.fulfilled]: (state, action) => action.payload,
    [deleteBook.fulfilled]: (state, action) => action.payload,
  },
});

export const selectAllBooks = (state) => state.allBooks;
export default BookstoreSlice.reducer;
