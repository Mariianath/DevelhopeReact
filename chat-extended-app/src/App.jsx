import { useState, useRef, useEffect } from "react";
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
    { id: 2, text: "Come stai?", type: "received" }
  ]);

  const [inputValue, setInputValue] = useState("");
  const bottomRef = useRef(null);

  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: inputValue,
      type: "sent"
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map(msg => (
          <Message key={msg.id} text={msg.text} type={msg.type} />
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Scrivi un messaggio..."
        />
        <button onClick={sendMessage}>Invia</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Chat />
    </div>
  );
}

export default App;
