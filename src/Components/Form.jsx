import { useState } from "react";
import "../style/App.css";

const Form = ({ onAddItem }) => {
  // declare the variables with useState hook
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Handle submit function
  function handleSubmit(e) {
    //prevent sent the event to not reload , when we submit
    e.preventDefault();

    // handle if the description is emtpy, it doesn't do anything
    if (!description) return;

    //declare newItem that has description, quantity, packed(default: false)
    //and the id with Date.now's function to generate the id
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    console.log(newItem);

    // After the function executed , make the state with default value
    setDescription("");
    setQuantity(1);
  }
  return (
    <>
      <form
        className="add-form"
        // declare submit function
        onSubmit={handleSubmit}
      >
        <h3> Pack the items you need 😎</h3>

        <select
          // declare quantity as it value
          value={quantity}
          // change the value using state
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {
            // Set option with 20 options
            Array.from({ length: 20 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))
          }
        </select>
        <input
          type="text"
          placeholder="item...."
          // value of description
          value={description}
          // change the description text when using typing
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
