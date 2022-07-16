import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/book';

const Book = ({
  author, title, category, id,
}) => {
  const dispatch = useDispatch();
  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(deleteBook(id));
  };
  return (
    <li>
      <div>
        <div>
          <div>
            <h4>{category}</h4>
            <h2>{title}</h2>
            <h6>{author}</h6>
            <div>
              <button type="button">Comments</button>
              <div />
              <button
                className="button-outline"
                type="button"
                onClick={handleClick}
                id={id}
              >
                {' '}
                Remove
              </button>
              <div />
              <button type="button">Edit</button>
            </div>
          </div>
          <div>
            <div>
              <div />
            </div>
            <div />
            <div>
              <div>
                <button type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
