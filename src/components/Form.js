function Form() {
  return (
    <form>
      <input type="text" required id="title" placeholder="Book title" />
      <input type="text" required id="author" placeholder="Book author" />
      <button>Add book</button>
    </form>
  );
}
export default Form;
