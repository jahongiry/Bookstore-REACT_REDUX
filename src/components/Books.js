import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Books.module.css';
import Book from './book-item';
import Form from './Form';
import { selectAllBooks } from '../redux/books/book';

const Books = () => {
  const allBooks = useSelector(selectAllBooks);
  return (
    <>
      <div>
        <ul className={classes.ul}>
          {allBooks.map((book) => (
            <Book
              id={book.id}
              key={book.id}
              author={book.author}
              title={book.title}
              category={book.category}
            />
          ))}
        </ul>
      </div>
      <Form />
    </>
  );
};

export default Books;
