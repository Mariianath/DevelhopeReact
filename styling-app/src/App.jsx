import { useState } from "react";

function Welcome() {
  return <h2 className="welcome">Benvenuto!</h2>;
}

function CounterDisplay({ count }) {
  return (
    <h2 style={{ fontSize: "30px", color: "purple" }}>
      {count}
    </h2>
  );
}

function Login() {
  const [password, setPassword] = useState("");

  const coloreBottone =
    password.length < 8 ? "red" : "green";

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Inserisci password"
      />
      <button style={{ backgroundColor: coloreBottone }}>
        Login
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome />
      <CounterDisplay count={5} />
      <Login />
    </div>
  );
}

export default App;
