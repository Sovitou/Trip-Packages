import "../style/App.css";

const Stats = ({ items }) => {
  if (!items.length)
    return <p className="stats"> Start to add some items 📢📌</p>;

  const numItems = items.length;
  const numItemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemPacked / numItems) * 100);
  return (
    <>
      <footer className="stats">
        {percentage === 100
          ? "Ready to go ! ✈️"
          : `🧳 You have ${numItems} item on your list and you have packed ${" "}
            ${numItemPacked}(${percentage}%)`}
      </footer>
    </>
  );
};

export default Stats;
