import React, { useState, useEffect, useCallback } from 'react';
import { BiSolidUniversalAccess } from 'react-icons/bi';

const VoiceAccessibility = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isActive, setIsActive] = useState(false); 

  const speak = useCallback((text) => {
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
  }, [isSpeaking]);

  const handleMouseOver = useCallback((event) => {
    const text = event.target.innerText; 
    if (text && isActive) { 
      speak(text);
    }
  }, [isActive, speak]);

  const handleClick = useCallback(() => {
    if (isSpeaking) {
      speechSynthesis.cancel(); 
      setIsSpeaking(false);
    } else {
      setIsActive((prev) => !prev); 
      if (!isActive) {
        speak("Ativando o leitor de voz"); 
      }
    }
  }, [isSpeaking, isActive, speak]);

  useEffect(() => {
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMouseOver]); // Dependency on handleMouseOver, which is memoized

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
