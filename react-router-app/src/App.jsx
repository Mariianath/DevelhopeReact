import { Routes, Route, Link, useParams } from "react-router-dom";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import GithubUser from "./components/GithubUser";
import GithubUsers from "./components/GithubUsers";
import NotFound from "./components/NotFound";

function ShowGithubUser() {
  const { username } = useParams();
  return <GithubUser username={username} />;
}

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users">Github Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Marco" />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/users" element={<GithubUsers />}>
          <Route
            index
            element={<p>Add a user and select it</p>}
          />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
