function MouseClicker() {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  const handleImageClick = (event) => {
    event.stopPropagation();
    console.log(event.target.src);
  };

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        one
      </button>

      <button name="two" onClick={handleButtonClick}>
        <img
          src="https://via.placeholder.com/100"
          alt="immagine"
          onClick={handleImageClick}
        />
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <MouseClicker />
    </div>
  );
}

export default App;

/*
Per evitare che il name del bottone venga stampato quando si clicca sull'immagine,
si può usare event.stopPropagation() nell'handler dell'immagine.
In questo modo l'evento non viene propagato al bottone padre.
*/
