import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";
import WelcomeLogo from "../assets/welcome-logo.png"

// import UserProfileImage from "../assets/user.png"


export function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <>
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {!chatMessages || chatMessages.length === 0 ? (
          <div className="welcome-message-container">
            <img className="welcome-logo" src={WelcomeLogo} alt="" />
          <p className="welcome-message">
            Welcome! Your AI chat experience begins here—talk to Instant now.
          </p>
          </div>
        ) : (
          chatMessages.map((chatMessage, key) => {
            return (
              <ChatMessage
                key={key}
                message={chatMessage.message}
                sender={chatMessage.sender}
              />
            );
          })
        )}
      </div>
    </>
  );
}
