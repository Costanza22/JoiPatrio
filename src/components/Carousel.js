import React, { useState, useEffect } from 'react';
import './Carousel.css'; // O CSS que você já tem

const images = [
  'https://omunicipiojoinville.com/wp-content/uploads/2023/03/palacete-doria-joinville.jpg',
  'https://facts.net/wp-content/uploads/2023/07/48-facts-about-joinville-1688694462.jpeg',
  'https://cortinadopassado.com.br/wp-content/uploads/2019/01/joinville-casa-de-alvino-fleith-imagem-iphan.jpg?w=816',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpar o intervalo ao desmontar
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
