import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
