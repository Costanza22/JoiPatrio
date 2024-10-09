// components/Chatbot.js
import React, { useState } from 'react';
import './css/Chatbot.css'; 
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Desculpe, não posso ajudar com isso.", sender: 'bot' },
        ]);
      }, 1000);
      setInputValue('');
    }
  };

  return (
    isOpen && (
      <div className="chatbot-container">
        <div className="chatbot-header">
        <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <BsFillEmojiSmileUpsideDownFill size={30} style={{ marginRight: '10px' }} />
          Chatbot
        </h3>
          <button onClick={onClose}>X</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    )
  );
};

export default Chatbot;
