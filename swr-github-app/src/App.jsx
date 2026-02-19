import { useState } from "react";
import useGithubUser from "./hooks/useGithubUser";

function App() {
  const [username, setUsername] = useState(null);
  const { user, error, isLoading, refetch } = useGithubUser(username);

  const handleSearch = () => {
    if (!username || username.trim() === "") return;
    refetch();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Github User Search</h1>

      <input
        type="text"
        placeholder="Insert username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <button onClick={refetch}>Refetch</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading user</p>}

      {user && (
        <div>
          <img src={user.avatar_url} width="100" />
          <h3>{user.name}</h3>
          <p>{user.login}</p>
        </div>
      )}
    </div>
  );
}

export default App;
