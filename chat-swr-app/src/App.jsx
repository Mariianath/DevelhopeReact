import { useState, useEffect, useRef } from "react";
import useBotReply from "./hooks/useBotReply";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [trigger, setTrigger] = useState(false);

  const { reply, isLoading } = useBotReply(trigger);

  const bottomRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: "user"
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");
    setTrigger(prev => !prev);
  };

  useEffect(() => {
    if (reply) {
      const botMessage = {
        id: Date.now(),
        text: reply.reply,
        sender: "bot"
      };

      setMessages(prev => [...prev, botMessage]);
    }
  }, [reply]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h2>Chat con SWR Bot</h2>

      <div style={{
        border: "1px solid #ccc",
        height: "300px",
        overflowY: "auto",
        padding: "10px"
      }}>
        {messages.map(msg => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "5px 0"
            }}
          >
            <span>{msg.text}</span>
          </div>
        ))}

        {isLoading && <p>Bot is typing...</p>}

        <div ref={bottomRef}></div>
      </div>

      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          style={{ flex: 1 }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Write a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
