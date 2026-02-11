import { useState } from "react";
import "./App.css";

function Message({ text, type }) {
  return (
    <div className={type === "sent" ? "bubble sent" : "bubble received"}>
      {text}
    </div>
  );
}

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Ciao!", type: "received" },
    { id: 2, text: "Ciao, come stai?", type: "sent" },
    { id: 3, text: "Tutto bene, grazie!", type: "received" }
  ]);

  return (
    <div className="chat-container">
      {messages.map((msg) => (
        <Message key={msg.id} text={msg.text} type={msg.type} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Chat />
    </div>
  );
}

export default App;
