const bookReducer = (state = [], action) => {
  if (action.type === 'add') {
    return [
      ...state,
      {
        id: action.id,
        bookName: action.title,
        author: action.author,
      },
    ];
  }

  if (action.type === 'remove') {
    return state.filter((item) => item.id !== action.id);
  }

  return state;
};

export const addingAction = ({ id, title, author }) => ({
  type: 'add',
  id,
  title,
  author,
});

export const removingAction = ({ id }) => ({
  type: 'remove',
  id,
});

export default bookReducer;
