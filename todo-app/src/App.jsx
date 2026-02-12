import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const aggiungiTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos(prev => [...prev, inputValue]);
    setInputValue("");
  };

  const resettaLista = () => {
    setTodos([]);
  };

  const rimuoviTodo = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Lista Todo</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={aggiungiTodo}>Aggiungi</button>
      <button onClick={resettaLista}>Reset</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => rimuoviTodo(index)}>
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
