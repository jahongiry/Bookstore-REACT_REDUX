import Book from "./Book";
import Form from "./Form";

const sampleBooks = {
  naming: "Zero to One",
  author: "Peter Thiel",
};

function Books() {
  return (
    <div>
      <div>
        <Book title={sampleBooks.title} author={sampleBooks.author} />
        <button>Reamove</button>
      </div>
      <Form />
    </div>
  );
}
export default Books;
