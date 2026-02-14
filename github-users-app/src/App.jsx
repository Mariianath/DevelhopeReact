import { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [username]);

  if (!user) return null;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <p>Nome: {user.name}</p>
      <p>Login: {user.login}</p>
    </div>
  );
}

function GithubUsers() {
  const [inputValue, setInputValue] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setUsernames(prev => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Inserisci username"
        />
        <button type="submit">Cerca</button>
      </form>

      <ul>
        {usernames.map((username, index) => (
          <li key={index}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <GithubUsers />
    </div>
  );
}

export default App;
