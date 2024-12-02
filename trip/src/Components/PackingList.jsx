import "../style/App.css";

const PackingList = ({ items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {/* Render the child components */}
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

// Item component to display individual item details
function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* Button to remove the item (functionality to be implemented) */}
      <button type="button" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}

export default PackingList;
