import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
      },
    ]);

    setInputText("");
  }
  return (
    <>
      <div className="chat-input-container">
        <input
          className="chat-input"
          placeholder="Send a message to Chatbot"
          size="30"
          onChange={saveInputText}
          value={inputText}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </>
  );
}
