import { useState } from "react";
import {
  useCounter,
  useForm,
  useGithubUser,
  useCurrentLocation
} from "./hooks";

function App() {
  const { count, incrementa, decrementa, resetta } = useCounter(0);
  const { values, handleChange } = useForm();
  const { user, loading, error, fetchUser } = useGithubUser();
  const {
    location,
    loading: locLoading,
    error: locError,
    getLocation
  } = useCurrentLocation();

  const [githubInput, setGithubInput] = useState("");

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={incrementa}>Incrementa</button>
      <button onClick={decrementa}>Decrementa</button>
      <button onClick={resetta}>Resetta</button>

      <hr />

      <input
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <hr />

      <input
        value={githubInput}
        onChange={(e) => setGithubInput(e.target.value)}
        placeholder="Github username"
      />
      <button onClick={() => fetchUser(githubInput)}>
        Cerca
      </button>

      {loading && <p>Caricamento...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>{user.name}</p>
          <p>{user.login}</p>
        </div>
      )}

      <hr />

      <button onClick={getLocation}>
        Ottieni posizione
      </button>

      {locLoading && <p>Caricamento posizione...</p>}
      {locError && <p>{locError}</p>}
      {location && (
        <p>
          Lat: {location.latitude} Lon: {location.longitude}
        </p>
      )}
    </div>
  );
}

export default App;
