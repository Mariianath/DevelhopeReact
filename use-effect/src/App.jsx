import { useState, useEffect } from "react";

function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const incrementa = () => {
    setCounter(prev => prev + incrementAmount);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={incrementa}>Incrementa</button>
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervallo = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervallo);
  }, []);

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter initialValue={0} incrementAmount={1} />
      <Clock />
    </div>
  );
}

export default App;
