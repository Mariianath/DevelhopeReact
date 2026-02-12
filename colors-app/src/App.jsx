function Color({ color }) {
  return <li>{color.name}</li>;
}

function Colors({ colors }) {
  return (
    <ul>
      {colors.map((c) => (
        <Color key={c.id} color={c} />
      ))}
    </ul>
  );
}

function App() {
  const listaColori = [
    { id: 1, name: "Rosso" },
    { id: 2, name: "Blu" },
    { id: 3, name: "Verde" }
  ];

  return (
    <div>
      <Colors colors={listaColori} />
    </div>
  );
}

export default App;
