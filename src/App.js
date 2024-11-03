import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot'; 
import CasaPreservacaoChart from './components/CasaPreservacaoChart';
import './App.css';
import { FaRegNewspaper } from "react-icons/fa";
import { SiMicrodotblog } from "react-icons/si";
import { BsFillHousesFill } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { GiWindmill } from 'react-icons/gi';
import VoiceAccessibility from './components/VoiceAccessibility';
import { BsFillCursorFill } from "react-icons/bs";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoPlaying, setVideoPlaying] = useState(false); 
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [setIsLoggedIn] = useState(false); 

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
  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen); 
  };
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  return (
    <div className="App">
      <Navbar onLoginSuccess={handleLoginSuccess} />
      
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
          <h1>Joi Patrio <GiWindmill style={{ verticalAlign: 'middle' }} /></h1>
          <p>Descubra a rica história de Joinville através de seus casarões históricos. Minha missão ao criar este site foi preservar e valorizar o patrimônio cultural da cidade, oferecendo uma experiência única que conecta passado e presente. Explore cada detalhe e conheça as histórias que moldaram a identidade de Joinville.</p>


    <div className="button-container">
      <a href="index.html" target="_blank" rel="noopener noreferrer">
      <button className="styled-button" 
  onClick={() => window.location.href = 'https://jolly-beach-0238f9a1e.5.azurestaticapps.net/'}>
  <strong>Acesse!</strong>
</button>

      </a>
    </div>
  </header>
</div>
  {/* Ícone abaixo do botão, que redireciona ao clicar */}
  <a
        href="https://patrim-nio-hist-rico-de-joinville.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8px', textDecoration: 'none', color: 'inherit' }}
      >
        
        <BsFillCursorFill size={24} /> {/* Tamanho do ícone */}
        <strong style={{ marginTop: '4px' }}>Saiba Mais</strong>
      </a>
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
    <h1 className="blog-title">
      <a href="https://medium.com/@pinassef22/joipatrio-4932644877c2" target="_self" rel="noopener noreferrer">
        Blog sobre Patrimônio Histórico
      </a>
    </h1>
  </div>
  <div className="blog-posts">
  <article className="blog-post">
    <h2>Casarões Históricos de Joinville: Patrimônio e História</h2>
    <p>
      Joinville, conhecida como a cidade das flores, abriga uma rica herança cultural representada por seus casarões históricos. Esses edifícios não apenas retratam a arquitetura da época, mas também contam histórias que moldaram a cidade ao longo dos anos. Abaixo, apresentamos uma tabela com informações sobre alguns dos casarões mais emblemáticos de Joinville, incluindo seu ano de construção, status de preservação, localização e observações relevantes.
    </p>
    <table className="casarao-table">
      <thead>
        <tr>
          <th>Nome do Casarão</th>
          <th>Ano de Construção</th>
          <th>Status de Preservação</th>
          <th>Localização</th>
          <th>Observações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Palacete Niemeyer</td>
          <td>1910</td>
          <td>Preservado</td>
          <td>Rua Dom Jaime Câmara, 43</td>
          <td>Um dos casarões mais emblemáticos da cidade.</td>
        </tr>
        <tr>
          <td>Casa da Memória</td>
          <td>1883</td>
          <td>Preservado</td>
          <td>Rua Dr. João Colin, 30</td>
          <td>Sede do Museu da Imigração e Colonização.</td>
        </tr>
        <tr>
          <td>Museu Nacional de Imigração</td>
          <td>1940</td>
          <td>Preservado</td>
          <td>Rua Dr. João Colin, 30</td>
          <td>Importante para a história da imigração na cidade.</td>
        </tr>
        <tr>
          <td>Casa Fritz Alt</td>
          <td>1922</td>
          <td>Preservado</td>
          <td>Rua Dom Jaime Câmara, 40</td>
          <td>Centro cultural com exposições e eventos.</td>
        </tr>
        <tr>
          <td>Casa da Cultura Fausto Rocha Júnior</td>
          <td>1940</td>
          <td>Preservado</td>
          <td>Rua 15 de Novembro, 1</td>
          <td>Promove eventos culturais e artísticos.</td>
        </tr>
        <tr>
          <td>Maison de Joinville</td>
          <td>1852</td>
          <td>Em risco</td>
          <td>Avenida Hermann August Lepper</td>
          <td>Planejada para ser um palácio, atualmente em estado de conservação precário.</td>
        </tr>
        <tr>
          <td>Palácio dos Príncipes</td>
          <td>1852</td>
          <td>Em risco</td>
          <td>Centro</td>
          <td>Antigo casarão de administração da colônia Dona Francisca.</td>
        </tr>
        <tr>
          <td>Casa Neitzel</td>
          <td>1920</td>
          <td>Preservado</td>
          <td>Rua Santos Dumont, 105</td>
          <td>Conhecida por sua arquitetura e valor histórico.</td>
        </tr>
        <tr>
          <td>Casa do Brigadeiro</td>
          <td>1890</td>
          <td>Preservado</td>
          <td>Rua XV de Novembro, 215</td>
          <td>Casa com forte apelo histórico na região.</td>
        </tr>
      </tbody>
    </table>
    <p>
      <CasaPreservacaoChart />
    </p>
</article>

{/* Ícone de Acessibilidade de Voz */}
<div className="voice-accessibility-icon" data-tooltip-id="voice-accessibility-tooltip">
    <VoiceAccessibility style={{ width: '20px', height: '20px' }} />
</div>





      {/* Chatbot Icon */}
      <div className="chat-icon"  onClick={toggleChatbot}>
          <IoChatboxOutline size={30} />
        </div>

        

  </div>
</section>
<footer>
        <p>Todos os direitos reservados &copy; 2024 - Desenvolvido por Costanza Pasquotto Assef</p>
      </footer>
      </main>
      
    {/* Chatbot Icon */}
<div className="chat-icon" onClick={toggleChatbot} data-tooltip-id="chat-tooltip">
    <IoChatboxOutline size={30} />
</div>


      {/* Chatbot */}
      <Chatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </div>
  );
}
export default App;