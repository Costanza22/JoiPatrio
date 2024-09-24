import React, { useState } from 'react';
import Modal from 'react-modal';
import { BsPersonArmsUp } from 'react-icons/bs';
import { FaSearch, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import Settings from './Settings';
import EditProfile from './EditProfile';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [showWhatsAppContainer, setShowWhatsAppContainer] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [selectedCasarao, setSelectedCasarao] = useState(null);
  const [videoVisible, setVideoVisible] = useState(false); // Estado para controlar a visibilidade do vídeo

  const casarões = [
    'Palacete Niemeyer',
    'Casa da Memória',
    'Museu Nacional de Imigração e Colonização',
    // Adicione mais casarões conforme necessário
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    setHighlightedText(searchQuery);
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

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    console.log('Pergunta/Sugestão:', question);
    setQuestion('');
    handleQuestionModalClose();
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const toggleLogin = () => setIsLogin(!isLogin);

  const handleCasaraoClick = (casarao) => {
    setSelectedCasarao(selectedCasarao === casarao ? null : casarao);
    setVideoVisible(false); // Oculta o vídeo ao selecionar um casarão
  };

  const handleImageClick = () => {
    setVideoVisible(true); // Mostra o vídeo ao clicar na imagem
  };

  const closeVideo = () => setVideoVisible(false); // Função para fechar o vídeo

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
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about" onClick={() => setShowAbout(!showAbout)}>Sobre</a></li>
          
          <li>
            <a href="#casaroes" onClick={toggleDropdown}>
              Casarões
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
          </li>
          <li>
            <a href="#contato" onClick={() => setShowWhatsAppContainer(!showWhatsAppContainer)}>
              <FaWhatsapp size={20} />
            </a>
          </li>
          <li>
            <a href="#questions" onClick={handleQuestionModalOpen}>
              <FaQuestionCircle size={20} />
            </a>
          </li>
        </ul>
        <div className="search-container">
          <input
            type="text"
            placeholder="O que você procura?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FaSearch onClick={handleSearch} className="icon" />
        </div>
        <div className="social-icons">
          <BsPersonArmsUp onClick={openModal} className="icon" />
        </div>
        {showSettings && <Settings />}
        {showEditProfile && <EditProfile />}
      </nav>

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
          <h1> {selectedCasarao}</h1>
          <img 
            src="https://static.ndmais.com.br/2011/01/28-01-2011-22-10-29-palacete-foto2-tentar-usar-esta.jpg" 
            
            alt={selectedCasarao} 
            className="casarao-image" 
            onClick={handleImageClick} // Ao clicar na imagem, mostra o vídeo
          />
          {videoVisible && ( // Se o vídeo estiver visível, mostra o vídeo embed
            <div className="video-container">
              <button className="close-video" onClick={closeVideo}>X</button> {/* Botão para fechar o vídeo */}
              <img 
                src="https://hinsching.files.wordpress.com/2023/02/image-44.png?w=720" 
                alt="Capa do Vídeo" 
                className="video-cover" 
                onClick={handleImageClick} // Clica na imagem para mostrar o vídeo
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
          <p>
            Construído em 1906 pelo comerciante Luiz Niemeyer, o casarão durante décadas foi a residência da família. 
            Filho de Johann Otto Louis Niemeyer, ex-diretor da Colônia Dona Francisca, e nascido em 1869 já em Joinville, 
            Luiz Niemeyer tinha o mesmo nome do pai. Casou-se com Sophie Dorothea Lepper, filha do comerciante, industrial 
            e deputado estadual Hermann August Lepper, uma das personalidades mais atuantes da cidade no final do século 19 
            e início do século 20. Durante anos, trabalhou com o sogro na empresa de importação e exportação e casa de secos e molhados. 
            No início dos anos 80, o Palacete Niemeyer quase foi ao chão para ceder lugar à nova sede do Banco do Brasil. 
            Em meio a muita polêmica na cidade, a demolição chegou a ser iniciada em agosto de 1982. Mas logo foi interrompida e, 
            em outubro do mesmo ano, o banco anunciou a decisão de preservar o casarão. Dois anos depois, o novo prédio do BB 
            foi erguido ao lado do local.
          </p>
          <button onClick={() => setSelectedCasarao(null)}>Fechar</button>
        </div>
      )}

      {/* Modal de Login/Cadastro */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal de Login/Cadastro"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-button">X</button>
        {isLogin ? (
          <div className="modal-content">
            <h2>Login</h2>
            <form>
              <label>
                Usuário:
                <input type="text" name="username" />
              </label>
              <label>
                Senha:
                <input type="password" name="password" />
              </label>
              <button type="submit">Entrar</button>
            </form>
            <p onClick={toggleLogin}>Não tem uma conta? Cadastre-se</p>
          </div>
        ) : (
          <div className="modal-content">
            <h2>Cadastro</h2>
            <form>
              <label>
                Nome:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Senha:
                <input type="password" name="password" />
              </label>
              <button type="submit">Cadastrar</button>
            </form>
            <p onClick={toggleLogin}>Já tem uma conta? Faça login</p>
          </div>
        )}
      </Modal>

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

// Estilos do container de WhatsApp, agora posicionado no canto inferior direito
const whatsappContainerStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  border: "1px solid #ddd",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  textAlign: "center",
  borderRadius: "5px",
  zIndex: 1000,
};

const linkStyle = {
  color: "#25D366",
  textDecoration: "none",
  fontWeight: "bold",
  display: "block",
  marginTop: "10px",
};

export default Navbar;
