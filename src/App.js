import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import { FaRegNewspaper } from "react-icons/fa";
import { SiMicrodotblog } from "react-icons/si";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://omunicipiojoinville.com/wp-content/uploads/2023/03/palacete-doria-joinville.jpg',
    'https://facts.net/wp-content/uploads/2023/07/48-facts-about-joinville-1688694462.jpeg',
    'https://cortinadopassado.com.br/wp-content/uploads/2019/01/joinville-casa-de-alvino-fleith-imagem-iphan.jpg?w=816',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [videoUrl, setVideoUrl] = useState('');

  const handleImageClick = (url) => {
    setVideoUrl(url);
  };

  const handleCloseVideo = () => {
    setVideoUrl('');
  };

  return (
    <div className="App">
      <Navbar />
      <div className="carousel-container">
        <div className="carousel">
          <div 
            className="carousel-inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="carousel-item"
              >
                <img src={image} alt={`Imagem ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <header className="App-header">
          <h1>Patrimônio Histórico de Joinville</h1>
          <p>Bem-vindo ao meu site!</p>
        </header>
      </div>

      <main>
        <section className="posts">
          <div className="post" onClick={() => handleImageClick('https://www.youtube.com/embed/QTrPPoBk4Lo?start=57')}>
            <img src="https://cortinadopassado.com.br/wp-content/uploads/2019/03/big_53d49eeec79d01cf7030dc5693f3deea.jpg?w=525" alt="Fashion" />
            <h2>Casa Kruger</h2>
            <p>A Casa Krüger em Joinville no trevo de Pirabeiraba, era um dos pontos turísticos mais visitados na cidade.</p>
          </div>
          <div className="post" onClick={() => handleImageClick('https://www.youtube.com/embed/mj93NzjArPg?start=64')}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Museu_Nacional_de_Imigra%C3%A7%C3%A3o_e_Coloniza%C3%A7%C3%A3o_de_Joinville.JPG/1920px-Museu_Nacional_de_Imigra%C3%A7%C3%A3o_e_Coloniza%C3%A7%C3%A3o_de_Joinville.JPG" alt="Outdoor" />
            <h2>Museu Nacional da Colonização e Imigração</h2>
            <p>O Museu Nacional de Imigração e Colonização localizado em Joinville guarda memórias e objetos relacionados à imigração no Sul do Brasil.</p>
          </div>
          <div className="post" onClick={() => handleImageClick('https://www.youtube.com/embed/8youlYa1lXY')}>
            <img src="https://th.bing.com/th/id/OIP.Z58HSz80eUYMyfH5nmMp9wHaFj?rs=1&pid=ImgDetMain" alt="Estação da Memória" />
            <h2>Estação da Memória</h2>
            <p>A Estação da Memória é uma unidade cultural de Joinville (SC), um dos marcos da história ferroviária do Brasil.</p>
          </div>
        </section>

        {videoUrl && (
          <div className="video-popup">
            <button className="close-button" onClick={handleCloseVideo}>X</button>
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
            ></iframe>
          </div>
        )}

        <section className="news-container">
          <div className="news">
            <h2><FaRegNewspaper /> 14/08/2024 08:33</h2>
            <p>Na madrugada desta quarta-feira (14), um incêndio atingiu um casarão abandonado no Centro de Joinville. De acordo com informações, o imóvel era frequentemente utilizado por pessoas em situação de rua. Felizmente, não houve registro de feridos. A operação de combate ao fogo mobilizou 16 bombeiros e cinco viaturas, sendo necessários cerca de 40 mil litros de água para controlar as chamas que consumiram todos os cômodos da edificação.</p>
            <a href="https://diarinho.net/materia/655317/Incendio-criminoso-destroi-casarao-historico-de-Joinville" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://scc10.com.br/wp-content/uploads/2024/08/Fogo-atinge-casarao-abandonado-em-Joinville-veja-imagens-1-e1723634315373.jpeg.webp" 
                alt="Bombeiros combatendo um incêndio em um casarão abandonado em Joinville" 
                width="500" 
              />
            </a>
          </div>

          <div className="news">
            <h2><FaRegNewspaper /> 13/09/2024 às 19h26</h2>
            <p>Uma casa enxaimel que faz parte da lista de imóveis com proteção cultural de Joinville, no Norte de Santa Catarina, foi atingida por um incêndio na noite desta sexta-feira (13). A casa faz parte da lista de imóveis com proteção cultural em Joinville. Corpo de Bombeiros Voluntários foi acionado às 19h05 para conter as chamas na casa que fica na rua Ottoker Doerffel, no bairro Atiradores. O fogo se alastrou rapidamente, chegando perto da rede elétrica e ameaçando outros imóveis, como uma clínica dentária.</p>
            <a href="https://omunicipiojoinville.com/incendio-atinge-casa-enxaimel-no-bairro-anita-garibaldi-em-joinville/" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://omunicipiojoinville.com/wp-content/uploads/2024/09/imagem-destacada-fred-5-1068x580.jpg" 
                alt="Bombeiros combatendo um incêndio em um casarão abandonado em Joinville" 
                width="500" 
              />
            </a>
          </div>
        </section>

        <section className="description-container">
          <h2><SiMicrodotblog /> Blog</h2>
          <h1>JOINVILLE EM FOCO</h1>
          <p>Bem-vindo ao Joinville em Foco, um blog dedicado a explorar a vida diária da maior cidade de Santa Catarina e destacar os seus aspectos únicos e vibrantes. Conhecida por sua rica história, economia dinâmica e forte tradição cultural, Joinville, muitas vezes chamada de "Cidade das Flores" e "Manchester Catarinense", possui um cenário urbano que mistura modernidade e tradição. Nosso objetivo é capturar essa essência e compartilhá-la com você.</p>
          <div className="description-images">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-0g2vDgovt2JZe8RIOnI9KvS0a-5PX6dBruDyetnXZdmFVRl9Y3qJH_q7EzGF4qgXwDGSAmtQAJj-97XujVLVrqQgRShemai4BsfiUXUkMjnmT87wG4i7RMkbLMgR_tzczFqnlLNl7ighXRkYp6a8MZiwdQNfoDu3fpNut5nu7mVn7mdspA/s4160/IMG_20220527_143038816_HDR.jpg" 
              width="500" 
              style={{ marginRight: '20px' }}
            />
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY6fums2NtBmL22EveOoqEy9t2dQ5K5vlGHgkKqIFe2Jj-4iyPXS_Vk0_mOkhQ17oz9VF3jN5XeGoXvZWq7GGCmNAKlLudjd6yqNNov7TQ79HuUZv0liHkcxYtBaJlokMLu483oVJ0pQzfA8nsq_7xNn_jo9ludQY_FXnZkv2DMNN2x8Y9Zg/s4160/IMG_20220527_141343639.jpg" 
              width="500"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
