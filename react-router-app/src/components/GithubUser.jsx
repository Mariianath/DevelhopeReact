import { useEffect, useState } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <img src={user.avatar_url} width="100" />
      <h3>{user.name}</h3>
      <p>{user.login}</p>
    </div>
  );
}

export default GithubUser;
