import Book from './Book';
import Form from './Form';

const sampleBooks = {
  title: 'Zero to One',
  author: 'Peter Thiel',
};

function Books() {
  return (
    <div>
      <div>
        <Book title={sampleBooks.title} author={sampleBooks.author} />
        <button type="submit">Remove</button>
      </div>
      <Form />
    </div>
  );
}
export default Books;
