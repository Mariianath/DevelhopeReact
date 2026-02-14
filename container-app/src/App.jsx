import { useState } from "react";
import "./index.css";

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="container">
      <div className="title" onClick={toggle}>
        {title}
      </div>
      {!collapsed && children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Container title="Sezione 1">
        <p>Contenuto della prima sezione</p>
      </Container>

      <Container title="Sezione 2">
        <p>Altro contenuto</p>
      </Container>
    </div>
  );
}

export default App;
