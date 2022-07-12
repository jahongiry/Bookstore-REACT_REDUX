// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { bookList } from '../redux/books/book';

function Form() {
  return (
    <form>
      <input required id="title" placeholder="Book title" />
      <input type="text" required id="author" placeholder="Book author" />
      <button type="submit">Add book</button>
    </form>
  );
}
export default Form;
