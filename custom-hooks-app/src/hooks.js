import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const incrementa = () => setCount(prev => prev + 1);
  const decrementa = () => setCount(prev => prev - 1);
  const resetta = () => setCount(initialValue);

  return { count, incrementa, decrementa, resetta };
}

export function useForm() {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return { values, handleChange };
}

export function useGithubUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async (username) => {
    if (!username) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("Utente non trovato");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, fetchUser };
}

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocalizzazione non supportata");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  };

  return { location, loading, error, getLocation };
}
