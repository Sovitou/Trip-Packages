import "../style/App.css";

function handleSubmit(e) {
  e.preventDefault();
}
const Form = () => {
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What you want to pack on your trip ? 😎</h3>
        <select>
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <input type="text" placeholder="item...." />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
