import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const bookList = useSelector((state) => state.book);
  return (
    <div>
      <div>
        {bookList.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            ids={book.id}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}
export default Books;
