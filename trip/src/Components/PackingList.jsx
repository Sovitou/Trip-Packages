import "../style/App.css";

const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {/* Render the child components */}
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

// Item component to display individual item details
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* Button to remove the item (functionality to be implemented) */}
      <button type="button">❌</button>
    </li>
  );
}

export default PackingList;
