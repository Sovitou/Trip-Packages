import "../style/App.css";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItem }) => {
  return (
    <div className="list">
      <ul>
        {/* Render the child components */}
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <button onClick={onClearItem}>Clear List</button>
      </div>
    </div>
  );
};

// Item component to display individual item details
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <div>
        <li>
          {/* Add new checkbox element  */}
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => onToggleItem(item.id)}
          />
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
          </span>
          {/* Button to remove the item (functionality to be implemented) */}
          <button type="button" onClick={() => onDeleteItem(item.id)}>
            ❌
          </button>
        </li>
      </div>
    </div>
  );
}

export default PackingList;
