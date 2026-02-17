import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function GithubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Github Users</h2>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={user.login}>{user.login}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default GithubUsers;
