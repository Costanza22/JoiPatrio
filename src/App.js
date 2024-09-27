import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { FaRegNewspaper } from "react-icons/fa";
import { SiMicrodotblog } from "react-icons/si";
import { BsFillHousesFill } from "react-icons/bs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoPlaying, setVideoPlaying] = useState(false); 

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

  const handleImageClick = (url) => {
    setVideoUrl(url);
  };

  const handleCloseVideo = () => {
    setVideoUrl('');
    setVideoPlaying(false); 
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };

  return (
    <div className="App">
      <Navbar openModal={openModal} />
      
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
    <div className="button-container">
      <a href="index.html" target="_blank" rel="noopener noreferrer">
      <button 
  className="styled-button" 
  onClick={() => window.location.href = '/index.html'}>
  <strong>Acesse!</strong>
</button>

      </a>
    </div>
  </header>
</div>


      <main>
        <section className="posts">
          <div className="title-container">
            <BsFillHousesFill size={30} />
            <h1 className="posts-title">Demonstração</h1>
          </div>
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
            {!videoPlaying ? (
              <div className="video-cover" onClick={handlePlayVideo}>
                <img src="https://i.ytimg.com/vi/tN3Q6qOvTow/maxresdefault.jpg" alt="Capa do vídeo" />
                <div className="play-button">▶</div>
              </div>
            ) : (
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
              ></iframe>
            )}
          </div>
        )}

<section className="news-container">
  <div className="title-container">
    <FaRegNewspaper size={30} />
    <h1 className="news-title">Notícias</h1>
  </div>
  
  <div className="news">
    <h2>14/08/2024 08:33</h2>
    <p>Na madrugada desta quarta-feira (14), um incêndio atingiu um casarão abandonado no Centro de Joinville. De acordo com informações, o imóvel era frequentemente utilizado por pessoas em situação de rua. Felizmente, não houve registro de feridos. A operação de combate ao fogo mobilizou 16 bombeiros e cinco viaturas, sendo necessários cerca de 40 mil litros de água para controlar as chamas que consumiram todos os cômodos da edificação.</p>
    <a href="https://diarinho.net/materia/655317/Incendio-criminoso-destroi-casarao-historico-de-Joinville" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://www.joinville.sc.gov.br/wp-content/uploads/2023/02/casarao-800x533.jpeg" 
        alt="Bombeiros combatendo um incêndio em um casarão abandonado em Joinville" 
        width="500" 
        style={{ border: '5px solid black', borderRadius: '8px' }} 
      />
    </a>
  </div>

  <div className="news">
    <h2>13/09/2024 às 19h26</h2>
    <p>Uma casa enxaimel que faz parte da lista de imóveis com proteção cultural de Joinville, no Norte de Santa Catarina, foi atingida por um incêndio na noite desta sexta-feira (13). O Corpo de Bombeiros Voluntários foi acionado às 19h05 para conter as chamas.
    O Corpo de Bombeiros Voluntários foi acionado às 19h05 para conter as chamas na casa que fica na rua Ottoker Doerffel, no bairro Atiradores. O fogo se alastrou rapidamente, chegando perto da rede elétrica e ameaçando outros imóveis, como uma clínica dentária.
    </p>
    <a href="https://omunicipiojoinville.com/incendio-atinge-casa-enxaimel-no-bairro-anita-garibaldi-em-joinville/" target="_blank" rel="noopener noreferrer">
      <img 
        src="https://th.bing.com/th/id/R.9929cfdbdd5f90d07e74436a43078a80?rik=IILc0%2fWK7NvRjQ&pid=ImgRaw&r=0" 
        alt="Incêndio em um casarão" 
        width="500" 
        style={{ border: '5px solid black', borderRadius: '8px' }} 
      />
    </a>
  </div>
</section>
<section className="blog-container">
  <div className="title-container">
    <SiMicrodotblog size={60} />
    <h1 className="blog-title">Blog sobre Patrimônio Histórico</h1>
  </div>
  <div className="blog-posts">
    <article className="blog-post">
      <h2>A importância de preservar os casarões antigos</h2>
      <p>Os casarões históricos são marcos da história de Joinville e representam a cultura e a memória da cidade. Preservá-los é essencial para manter viva essa herança.</p>
    </article>
    <article className="blog-post">
      <h2>Casarões mais emblemáticos de Joinville</h2>
      <p>Alguns dos casarões mais conhecidos incluem o Palacete Niemeyer, a Casa da Memória, e o Museu Nacional de Imigração e Colonização.</p>
    </article>
    <article className="blog-post">
      <h2>Desafios na preservação do patrimônio histórico</h2>
      <p>A falta de investimentos e a ação do tempo são os principais desafios enfrentados na preservação desses imóveis, além do risco de incêndios.</p>
    </article>
    
  </div>
</section>
<footer>
        <p>Todos os direitos reservados &copy; 2024 - Desenvolvido por Costanza Pasquotto Assef</p>
      </footer>
      </main>
    </div>
  );
}

export default App;