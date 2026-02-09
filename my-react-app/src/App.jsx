import Welcome from "./components/Welcome";

// Componente principale App
function App() {
  return (
    <div>
      {/* Passiamo le props name e age a Welcome */}
      <Welcome name="Maria" age={25} />
    </div>
  );
}

export default App;
