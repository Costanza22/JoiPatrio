import React, { useState, useEffect } from 'react';
import { BiSolidUniversalAccess } from 'react-icons/bi';

const VoiceAccessibility = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isActive, setIsActive] = useState(false); 

  const speak = (text) => {
    if (isSpeaking) {
      speechSynthesis.cancel(); 
      setIsSpeaking(false);
      return;
    }

    const newUtterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(newUtterance);
    setIsSpeaking(true);

    newUtterance.onend = () => {
      setIsSpeaking(false);
    };
  };

  const handleMouseOver = (event) => {
    const text = event.target.innerText; 
    if (text && isActive) { 
      speak(text);
    }
  };

  const handleClick = () => {
    if (isSpeaking) {
      speechSynthesis.cancel(); 
      setIsSpeaking(false);
    } else {
      setIsActive((prev) => !prev); 
      if (!isActive) {
        speak("Ativando o leitor de voz"); 
      }
    }
  };

  useEffect(() => {
    
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isActive]); 

  return (
    <div>
      <BiSolidUniversalAccess
        style={{ cursor: 'pointer', fontSize: '2rem' }}
        onClick={handleClick}
      />
    </div>
  );
};

export default VoiceAccessibility;
