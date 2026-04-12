import { useState } from "react";
import { ChatMessages } from "./components/ChatMessages";
import "./App.css";
import { ChatInput } from "./components/ChatInput";

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <>
      <div className="app-container">
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}

export default App;
