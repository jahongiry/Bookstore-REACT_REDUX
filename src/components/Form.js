// import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { addingAction } from '../redux/books/book';

function Form() {
  const dispatch = useDispatch();
  const titleInput = useRef(null);
  const authorInput = useRef(null);
  const addBook = (e) => {
    e.preventDefault();
    dispatch(
      addingAction({
        id: nextId(),
        title: titleInput.current.value,
        author: authorInput.current.value,
      }),
    );
  };
  return (
    <form>
      <input ref={titleInput} required id="title" placeholder="Book title" />
      <input
        ref={authorInput}
        type="text"
        required
        id="author"
        placeholder="Book author"
      />
      <button onClick={addBook} type="submit">
        Add book
      </button>
    </form>
  );
}
export default Form;
