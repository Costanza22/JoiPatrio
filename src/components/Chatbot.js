// components/Chatbot.js
import React, { useState } from 'react';
import './css/Chatbot.css'; 
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = inputValue.trim();
      setMessages([...messages, { text: userMessage, sender: 'user' }]);

      let botResponse = "Desculpe, não posso ajudar com isso.";
      
      // Respostas personalizadas
      if (userMessage.toLowerCase() === 'bom dia') {
        botResponse = "Bom dia! Como posso ajudá-lo hoje?";
      } else if (userMessage.toLowerCase() === 'boa tarde') {
        botResponse = "Boa tarde! Em que posso ajudar?";
      } else if (userMessage.toLowerCase() === 'boa noite') {
        botResponse = "Boa noite! Como posso ajudá-lo?";
      } else if (userMessage.toLowerCase() === 'o que é iphan') {
        botResponse = "O IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional) é um órgão brasileiro responsável pela preservação do patrimônio cultural do país.";
      } else if (userMessage.toLowerCase() === 'fale sobre o joi patrio') {
        botResponse = "Joi Patrio é um projeto que visa promover e preservar o patrimônio histórico da cidade de Joinville, destacando a importância de suas construções e história.";
      } else if (userMessage.toLowerCase() === 'o que é casa kruger') {
        botResponse = "A Casa Kruger é um importante exemplo da arquitetura histórica de Joinville, conhecida por sua beleza e por abrigar diversos eventos culturais ao longo dos anos.";
      } else if (userMessage.toLowerCase() === 'o que é palacete niemeyer') {
        botResponse = "O Palacete Niemeyer é uma das mais icônicas construções de Joinville, projetado pelo arquiteto Oscar Niemeyer, e representa um marco na arquitetura moderna da cidade.";
      } else if (userMessage.toLowerCase() === 'o que é patrimonio historico') {
        botResponse = "O patrimônio histórico abrange bens materiais e imateriais que possuem valor cultural, sendo essenciais para a identidade e a memória de uma sociedade.";
      }

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'bot' },
        ]);
      }, 1000);

      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
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
            onKeyDown={handleKeyDown} // Adiciona o evento de tecla
            placeholder="Digite sua mensagem..."
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    )
  );
};

export default Chatbot;
