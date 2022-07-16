import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/book';
import classes from './book-item.module.css';

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
      <div className={classes.main}>
        <div className={classes.content}>
          <div className={classes.info}>
            <h4 className={classes.fiction}>{category}</h4>
            <h2 className={classes.title}>{title}</h2>
            <h6 className={classes.author}>{author}</h6>
            <div className={classes.cre}>
              <button className={classes.buttonOutline} type="button">
                Comments |
              </button>
              <div />
              <button
                className={classes.buttonOutline}
                type="button"
                onClick={handleClick}
                id={id}
              >
                {' '}
                Remove |
              </button>
              <div />
              <button className={classes.buttonOutline} type="button">
                Edit
              </button>
            </div>
          </div>
          <div className={classes.progressContainer}>
            <div className={classes.circularProgressContainer}>
              <div className={classes.circularProgress} />
            </div>
            <div className={classes.progressStat}>
              <p className={classes.percentcComplete}>50%</p>
              <p className={classes.completed}>Completed</p>
            </div>
            <div className={classes.progressDivider} />
            <div className={classes.currentChapterContainer}>
              <div>
                <p className={classes.currentChapterLabel}>CURRENT CHAPTER</p>
                <p className={classes.currentChapter}>Chapter 20</p>
              </div>
              <div>
                <button className={classes.primaryButton} type="button">
                  UPDATE PROGRESS
                </button>
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
