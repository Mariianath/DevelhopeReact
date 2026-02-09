import React from "react";
import Message from "./Message"; // we'll create this next

function Hello() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Message /> {/* Rendering the Message component here */}
    </div>
  );
}

export default Hello;
