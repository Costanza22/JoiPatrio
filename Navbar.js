import React, { useState } from 'react';
import Modal from 'react-modal';
import { BsPersonArmsUp } from 'react-icons/bs';
import { FaSearch, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import Settings from './Settings';
import EditProfile from './EditProfile';
import './Navbar.css';

Modal.setAppElement('#root');

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [showWhatsAppContainer, setShowWhatsAppContainer] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // Lista de casarões
  const casarões = [
    'Palacete Niemeyer',
    'Casa da Memória',
    'Museu Nacional de Imigração e Colonização',
    // Adicione mais casarões conforme necessário
  ];

  // Função para alternar o menu suspenso de "Casarões"
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
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
          
          {/* Casarões com menu suspenso */}
          <li>
            <a href="#casaroes" onClick={toggleDropdown}>
              Casarões
            </a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                {casarões.map((casarao, index) => (
                  <li key={index}><a href={`#${casarao}`}>{casarao}</a></li>
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
          <p>Olá, eu sou Costanza, uma engenheira de software e atualmente estou fazendo faculdade. Sou apaixonada por tecnologia e sempre buscando aprender e crescer na área de desenvolvimento de software.</p>
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

      {/* Modal de Login/Cadastro */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
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
            <p>Não tem uma conta? <button onClick={toggleLogin}>Cadastre-se</button></p>
          </div>
        ) : (
          <div className="modal-content">
            <h2>Cadastro</h2>
            <form>
              <label>
                Usuário:
                <input type="text" name="username" />
              </label>
              <label>
                Senha:
                <input type="password" name="password" />
              </label>
              <label>
                Confirmar Senha:
                <input type="password" name="confirmPassword" />
              </label>
              <button type="submit">Cadastrar</button>
            </form>
            <p>Já tem uma conta? <button onClick={toggleLogin}>Faça login</button></p>
          </div>
        )}
      </Modal>
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
