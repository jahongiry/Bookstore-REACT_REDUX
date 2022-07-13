import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removingAction } from '../redux/books/book';

function Book({ title, author, ids }) {
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(removingAction({ id }));
  };

  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <button onClick={() => remove(ids)} type="submit">
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ids: PropTypes.string.isRequired,
};

export default Book;
