import "../style/App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Books", quantity: 12, packed: true },
];

const PackingList = () => {
  return (
    <>
      <div className="list">
        <ul>
          {/* Render the child components */}
          {initialItems.map((item) => (
            <Item props={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

// Parent component of Item
function Item({ props }) {
  return (
    <li>
      <span style={props.packed ? { textDecoration: "line-through" } : {}}>
        {props.quantity} {props.description}
      </span>
      <button type="button">❌</button>
    </li>
  );
}

export default PackingList;
