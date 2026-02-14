import { useState, useMemo } from "react";
import { useCounter } from "./hooks";

function FilteredList({ items }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.age > 18);
  }, [items]);

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>
          {item.name} - {item.age}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const { count, incrementa, decrementa, resetta } = useCounter(0);

  const [people] = useState([
    { id: 1, name: "Marco", age: 25 },
    { id: 2, name: "Anna", age: 16 },
    { id: 3, name: "Luca", age: 30 },
    { id: 4, name: "Sara", age: 14 }
  ]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={incrementa}>Incrementa</button>
      <button onClick={decrementa}>Decrementa</button>
      <button onClick={resetta}>Resetta</button>

      <hr />

      <FilteredList items={people} />
    </div>
  );
}

export default App;
