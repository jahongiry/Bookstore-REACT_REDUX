const categoriesReducer = (state = [], action) => {
  if (action.type === 'checkStatus') {
    return ['Under Construction'];
  }
  return state;
};

export const statusAction = () => ({
  type: 'checkStatus',
});

export default categoriesReducer;
