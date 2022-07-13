import { useDispatch, useSelector } from 'react-redux';
import { statusAction } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category);

  const checkStatus = () => {
    dispatch(statusAction());
  };

  return (
    <div>
      <button onClick={checkStatus} type="submit">
        Check status
      </button>
      <h2>{status}</h2>
    </div>
  );
}
export default Categories;
