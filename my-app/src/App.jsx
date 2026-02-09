import React from "react";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello /> {/* First usage of Hello */}
      <Hello /> {/* Second usage of Hello */}

      {/* You *can* also render Message directly here */}
      {/* <Message /> works, it will render the message directly without the "Hello, World!" heading */}
    </div>
  );
}

export default App;
