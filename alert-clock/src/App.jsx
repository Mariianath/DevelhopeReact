function AlertClock({ onShowTime }) {
  return (
    <button onClick={onShowTime}>
      Mostra ora attuale
    </button>
  );
}

function App() {
  const mostraOra = () => {
    const ora = new Date().toLocaleTimeString();
    alert(ora);
  };

  return (
    <div>
      <AlertClock onShowTime={mostraOra} />
    </div>
  );
}

export default App;
