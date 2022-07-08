/* eslint-disable react/prop-types */
function Book({ props }) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
}
export default Book;
