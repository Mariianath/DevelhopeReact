import { useState } from "react";

function Welcome({ name }) {
  return <p>Welcome, {name}!</p>;
}

function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <Welcome name={name} />
    </div>
  );
}

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin(formData);
  };

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      remember: false
    });
  };

  const isDisabled =
    formData.username === "" || formData.password === "";

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember me
        </label>
      </div>

      <button type="submit" disabled={isDisabled}>
        Login
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

function App() {
  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div>
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;

/*
Per prevenire il comportamento predefinito del form si usa event.preventDefault().
*/
