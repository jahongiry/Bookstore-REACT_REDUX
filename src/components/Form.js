import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Form.module.css';
import { addBook } from '../redux/books/book';

const Form = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewBook({ ...newBook, [name]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setNewBook({
      title: '',
      author: '',
      category: '',
    });
  };

  const { title, author, category } = newBook;
  return (
    <section>
      <div className={classes.divider} />
      <h2 className={classes.title}>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={classes.input}
          name="title"
          placeholder="Book title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className={classes.input}
          name="author"
          placeholder="Author"
          value={author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className={classes.input}
          name="category"
          placeholder="Category"
          value={category}
          onChange={handleChange}
          required
        />
        <button className={classes.button} type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Form;
