import { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Scrivi qui..." />
    </div>
  );
}

function MountMessage() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Componente montato per la prima volta");
      isMounted.current = true;
    }
  }, []);

  return <div>Controlla la console</div>;
}

function App() {
  return (
    <div>
      <FocusableInput />
      <MountMessage />
    </div>
  );
}

export default App;
