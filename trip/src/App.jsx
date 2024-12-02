import { useState } from "react";
import "./style/App.css";
import Head from "./Components/Head";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((item) => item.id !==id))
  }
  return (
    <div className="app">
      <Head />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem = {handleDeleteItem}  />
      <Stats />
    </div>
  );
};

export default App;
