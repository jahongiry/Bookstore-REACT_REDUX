const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const bookReducer = (
  state = [{ id: 'firstId', title: 'initial title', author: 'initial author' }],
  action,
) => {
  if (action.type === ADD) {
    return [
      ...state,
      {
        id: action.id,
        title: action.title,
        author: action.author,
      },
    ];
  }

  if (action.type === REMOVE) {
    return state.filter((item) => item.id !== action.id);
  }

  return state;
};

export const addingAction = ({ id, title, author }) => ({
  type: ADD,
  id,
  title,
  author,
});

export const removingAction = ({ id }) => ({
  type: REMOVE,
  id,
});

export default bookReducer;
