import Age from "./Age";

function Welcome({ name = "Ospite", age }) {
  return (
    <div>
      {/* Nome in <strong> */}
      <p>Benvenuto, <strong>{name}</strong>!</p>

      {/* Mostriamo l'età tramite il componente Age */}
      <Age age={age} />
    </div>
  );
}

export default Welcome;
