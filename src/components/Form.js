import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
      <div />
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={handleChange}
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
