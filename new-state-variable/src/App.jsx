import { useState } from "react";

function CounterDisplay({ count }) {
  return <h2>{count}</h2>;
}

function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  const incrementa = () => {
    setCounter(prev => prev + incrementAmount);
  };

  const decrementa = () => {
    setCounter(prev => prev - incrementAmount);
  };

  const resetta = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={incrementa}>Incrementa</button>
      <button onClick={decrementa}>Decrementa</button>
      <button onClick={resetta}>Resetta</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter initialValue={0} incrementAmount={2} />
    </div>
  );
}

export default App;

/*
Quando si usa la funzione setter per aggiornare uno stato che dipende dal valore precedente,
è meglio passare una funzione come parametro (prev => prev + valore) invece di un valore immediato.
Questo perché React aggiorna lo stato in modo asincrono e potrebbe raggruppare più aggiornamenti.
Usando una funzione, siamo sicuri di ricevere sempre il valore più aggiornato.
*/
