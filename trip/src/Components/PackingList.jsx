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
          {initialItems.map((item) => (
            <Item obj={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

function Item({ obj }) {
  return (
    <li>
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.quantity} {obj.description}
      </span>
      <button>❌</button>
    </li>
  );
}
export default PackingList;
