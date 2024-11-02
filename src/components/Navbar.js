import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaSearch, FaQuestionCircle, FaWhatsapp,FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import { FaHouseFlag } from "react-icons/fa6";
import { IoMdNotifications } from 'react-icons/io';
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import demolida1 from '../assets/demolida1.png'; 
import demolida2 from '../assets/demolida2.png';
import demolida3 from '../assets/demolida3.png';
import demolida4 from '../assets/demolida4.png';
import recuperada1 from '../assets/recuperada1.png';
Modal.setAppElement('#root');

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery] = useState('');
    const [highlightedText] = useState('');
    const [showQuestionModal, setShowQuestionModal] = useState(false);
    const [question, setQuestion] = useState('');
    const [showWhatsAppContainer, setShowWhatsAppContainer] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [selectedCasarao, setSelectedCasarao] = useState(null);
    const [videoVisible, setVideoVisible] = useState(false); 
    const [newComments, setNewComments] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showNaoTombados, setShowNaoTombados] = useState(false);
    
    
    const casarões = [
        
    ];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    

    const handleSearch = () => {
      const baseURL = 'https://www.iphan.gov.br/'; 
      window.open(`${baseURL}?q=${searchQuery}`, '_blank'); 
    };

    const handleCadastrarCasarao = () => {
     
    };
  
    const handleConsultarCasaroes = () => {
     
    };
    
    const highlightText = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <span key={index} className="highlight">{part}</span>
            ) : (
                part
            )
        );
    };

    const handleQuestionModalOpen = () => setShowQuestionModal(true);
    const handleQuestionModalClose = () => setShowQuestionModal(false);

    const handleNotificationClick = () => {
        alert('Você tem novas notificações de comentários!');
        setNewComments(0); 
    };

    
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

  
const handleSubmitQuestion = (e) => {
  e.preventDefault();
  console.log('Pergunta/Sugestão:', question);
  setQuestion(''); 
  setNewComments(prevCount => prevCount + 1); 
  handleQuestionModalClose(); 
};

    const handleCasaraoClick = (casarao) => {
        setSelectedCasarao(selectedCasarao === casarao ? null : casarao);
        setVideoVisible(false); 
    };
    

    const handleImageClick = () => {
        setVideoVisible(true); 
    };

    const closeVideo = () => setVideoVisible(false); 

    useEffect(() => {
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleDownloadPDF = () => {
      
      const link = document.createElement('a');
      link.href = '/Edital Joi Patrio.pdf';
      link.download = 'edital_joi_patrio.pdf';
      link.click();
    };
    return (
        <>
            <div className="navbar-header">
                <img 
                    src="https://revistanews.com.br/wp-content/uploads/2018/09/moinho.jpg" 
                    alt="Bens Tombados"
                    className="navbar-logo"
                />
                <h1>Bens Tombados Joinville</h1>
                <h2>Patrimônio Cultural da cidade</h2>
            </div>

            <nav className="navbar">
  <ul className="navbar-menu">
    {/* Links principais */}
    <li><a href="#home">Home</a></li>
    <li><a href="#about" onClick={() => setShowAbout(!showAbout)}>Sobre</a></li>
                        <a href="#casaroes" onClick={toggleDropdown}>
                           
                        </a>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                {casarões.map((casarao, index) => (
                                    <li key={index}>
                                        <Link to="#" onClick={() => handleCasaraoClick(casarao)}>
                                            {casarao}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        
                     
                   {/* Ícones com ações específicas */}
    <li>
      <a href="#nao-tombados" onClick={() => setShowNaoTombados(!showNaoTombados)} className="link-nao-tombados">
        <FaHome size={24} /> Não Tombados
      </a>
    </li>
    <li>
    <a href="#contato" onClick={() => setShowWhatsAppContainer(!showWhatsAppContainer)}>
        <FaWhatsapp size={24} />
      </a>
    </li>
    <li>
      <a href="#questions" onClick={handleQuestionModalOpen}>
        <FaQuestionCircle size={24} />
      </a>
    </li>
    <li>
      <a href="#notifications" onClick={handleNotificationClick}>
        <IoMdNotifications size={24} />
        {newComments > 0 && <span className="notification-badge">{newComments}</span>}
      </a>
    </li>
    
    {/* Botão de tema */}
    <li>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? <MdDarkMode size={24} /> : <MdOutlineDarkMode size={24} />}
      </button>
</li>

  
        </ul>
        <div className="search-container">
  <div className="arrow">
    <span>Pesquise no site do IPHAN</span>
    <div className="arrow-shape" />
  </div>


  <span className="tooltip-container">
    <FaSearch onClick={handleSearch} className="icon" />
    <span className="tooltip">Para maiores informações!</span>
  </span>
</div>

    <span className="tooltip-container">
      <IoDocumentOutline onClick={handleDownloadPDF} className="icon" />
      <span className="tooltip">Acesse o edital!</span>
    </span>
  
      </nav>
      {showNaoTombados && (
       <div className="imagens-nao-tombados">
         <div className="descricao-container">
         <h2>Casarões Não Tombados</h2>
  <p>
    Os casarões não tombados de Joinville são edificações que, apesar de não possuírem o status de tombamento, possuem grande valor histórico e cultural. 
    Esses imóveis representam a rica história da cidade e sua arquitetura única, refletindo as diversas influências que moldaram Joinville ao longo dos anos. 
    Muitos desses casarões ainda estão em uso e são parte do cotidiano da cidade, oferecendo um vislumbre da herança cultural joinvilense.
  </p>
  <p>
  Eles enfrentam um risco significativo de demolição, uma vez que não possuem a proteção legal conferida pelo tombamento. 
  <p>
    </p>Essa vulnerabilidade pode resultar na perda irreparável de patrimônio histórico e cultural, que narra a rica história da cidade e reflete suas influências arquitetônicas. Sem a salvaguarda necessária, muitos desses imóveis estão suscetíveis a interesses comerciais e especulativos, que priorizam o desenvolvimento urbano em detrimento da preservação.
  </p>
</div>

       <div className="imagem-container">
         <img src={demolida1} alt="Casarão 1" className="imagem-casarão" />
         <div className="legenda-container">
           <p>Demolida</p>
         </div>
       </div>
       <div className="imagem-container">
         <img src={demolida2} alt="Casarão 2" className="imagem-casarão" />
         <div className="legenda-container">
           <p>Demolida</p>
         </div>
       </div>
       <div className="imagem-container">
         <img src={demolida3} alt="Casarão 3" className="imagem-casarão" />
         <div className="legenda-container">
           <p>Demolida</p>
         </div>
       </div>
       <div className="imagem-container">
         <img src={demolida4} alt="Casarão 4" className="imagem-casarão" />
         <div className="legenda-container">
           <p>Demolida</p>
         </div>
       </div>
       <div className="imagem-container">
         <img src={recuperada1}  alt="Casarão 5" className="imagem-casarão" />
         <div className="legenda-container">
           <p>Abandonada</p>
         </div>
       </div>
     </div>
      )}
      
      {showAbout && (
        <section className="about">
          <h2><FcAbout /> Sobre Mim</h2>
          <p>
            {highlightText(
              'Olá, eu sou Costanza, uma engenheira de software e atualmente estou fazendo faculdade. Sou apaixonada por tecnologia e sempre buscando aprender e crescer na área de desenvolvimento de software.',
              highlightedText
            )}
          </p>
        </section>
      )}



{showWhatsAppContainer && (
        <div className="whatsapp-container">
          <p>Contate-me no WhatsApp:</p>
          <a
            href="https://wa.me/5547988041237"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para falar comigo <FaWhatsapp />
          </a>
        </div>
      )}

{selectedCasarao && (
  <div className="casarao-info">
    <h1>{selectedCasarao}</h1>
    
    {/* Primeira Imagem */}
    <img 
      src="https://static.ndmais.com.br/2011/01/28-01-2011-22-10-29-palacete-foto2-tentar-usar-esta.jpg" 
      alt={selectedCasarao} 
      className="casarao-image" 
      onClick={handleImageClick} // Ao clicar na imagem, mostra o vídeo
    />

    {/* Segunda Imagem */}
    <img 
      src="https://farm5.staticflickr.com/4720/25928574128_9a4756f437_b.jpg" // Substitua pelo link da nova imagem
      alt={`${selectedCasarao} - Outra visão`} 
      className="casarao-image" 
      onClick={handleImageClick} 
    />
          {videoVisible && ( 
            <div className="video-container">
              <button className="close-video" onClick={closeVideo}>X</button> {/* Botão para fechar o vídeo */}
              <img 
                src="https://hinsching.files.wordpress.com/2023/02/image-44.png?w=720" 
                alt="Capa do Vídeo" 
                className="video-cover" 
                onClick={handleImageClick} 
              />
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/SqQpxi6h-pQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="video-iframe" 
              ></iframe>
            </div>
          )}
          <div className="casarao-history">
  <h2 className="casarao-title">
  <FaHouseFlag className="my-icon" />A História do Palacete Niemeyer</h2>
  <p>
    <strong>Construído em 1906</strong> pelo renomado comerciante <em>Luiz Niemeyer</em>, o Palacete foi, por décadas, lar da sua família. Filho de Johann Otto Louis Niemeyer, ex-diretor da Colônia Dona Francisca, Luiz Niemeyer, nascido em Joinville em 1869, herdou o nome do pai.
  </p>
  <p>
    Ele se casou com <em>Sophie Dorothea Lepper</em>, filha de Hermann August Lepper, um influente comerciante, industrial e deputado estadual. Hermann Lepper foi uma das personalidades mais marcantes de Joinville no final do século 19 e início do século 20. Juntos, Luiz e Hermann trabalharam na empresa familiar de importação, exportação e secos e molhados.
  </p>
  <h3 className="casarao-subtitle">A Ameaça de Demolição</h3>
  <p>
    Nos anos 80, o Palacete Niemeyer esteve ameaçado de demolição para dar lugar à nova sede do <strong>Banco do Brasil</strong>. Em agosto de 1982, a demolição foi iniciada, gerando muita polêmica na cidade. No entanto, em outubro do mesmo ano, o Banco do Brasil anunciou a decisão de preservar o casarão.
  </p>
  <p>
    Dois anos mais tarde, em 1984, a nova sede do banco foi erguida ao lado do Palacete, que permaneceu como um ícone da história e da arquitetura de Joinville.
  </p>
</div>

          <button className="fechar-button" onClick={() => setSelectedCasarao(null)}>
  Fechar
</button>

        </div>
      )}

   
    
      {/* Modal de Perguntas/Sugestões */}
      <Modal
        isOpen={showQuestionModal}
        onRequestClose={handleQuestionModalClose}
        contentLabel="Modal de Perguntas/Sugestões"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={handleQuestionModalClose} className="close-button">X</button>

        <form onSubmit={handleSubmitQuestion}>
          <h2>Pergunta/Sugestão</h2>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Digite sua pergunta ou sugestão aqui..."
          />
          <button type="submit">Enviar</button>
        </form>
      </Modal>

      <style jsx>{`
        .video-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute; /* Para centralizar na tela */
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000; /* Para garantir que o vídeo fique acima de outros elementos */
          border: 2px solid burlywood; /* Borda em burlywood */
          padding: 10px; /* Espaçamento interno */
          background-color: white; /* Fundo branco para o vídeo */
        }
        .video-iframe {
          border: none; /* Remove a borda padrão do iframe */
        }
        .close-video {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: burlywood; /* Cor do botão de fechar */
          border: 2px solid burlywood; /* Borda do botão de fechar */
          color: white; /* Cor do texto do botão */
          font-size: 20px;
          cursor: pointer;
          padding: 5px; /* Espaçamento interno do botão */
        }
        .video-cover {
          cursor: pointer; /* Mostra que a imagem é clicável */
        }
           .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: burlywood; /* Cor de fundo */
    border: none; /* Remove a borda padrão */
    color: white; /* Cor do texto */
    font-size: 16px; /* Tamanho da fonte */
    cursor: pointer; /* Cursor de mão ao passar o mouse */
    padding: 8px 12px; /* Espaçamento interno */
    border-radius: 4px; /* Bordas arredondadas */
    transition: background-color 0.3s; /* Transição suave */
  }

  .close-button:hover {
    background-color: #d2b48c; /* Cor de fundo ao passar o mouse */
  }

  .close-button:focus {
    outline: none; /* Remove o contorno padrão ao focar */
    box-shadow: 0 0 0 2px #8b4513; /* Adiciona sombra ao focar */
  }
      `}</style>
    </>
  );
};


export default Navbar;
