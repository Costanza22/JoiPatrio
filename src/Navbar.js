import React, { useState } from 'react';
import { BsPersonArmsUp } from 'react-icons/bs';
import { FaSearch, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import Settings from './Settings';
import EditProfile from './EditProfile';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [question, setQuestion] = useState('');
  const [showWhatsAppContainer, setShowWhatsAppContainer] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Estados para controle de login
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery} with filter: ${filter}`);
  };

  const openSettings = () => {
    setShowSettings(true);
    setShowEditProfile(false);
  };

  const openEditProfile = () => {
    setShowSettings(false);
    setShowEditProfile(true);
  };

  const handleWhatsAppClick = () => {
    setShowWhatsAppContainer(!showWhatsAppContainer);
  };

  const handleQuestionModalOpen = () => setShowQuestionModal(true);
  const handleQuestionModalClose = () => setShowQuestionModal(false);

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    console.log('Pergunta/Sugestão:', question);
    setQuestion('');
    handleQuestionModalClose();
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
    setDropdownOpen(false); // Fecha o dropdown se estiver aberto
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', username, password);
    // Aqui você pode adicionar a lógica de autenticação
    setUsername('');
    setPassword('');
    setShowLogin(false); // Fecha o formulário após o login
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about" onClick={toggleAbout}>Sobre</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li>
            <a href="#contato" onClick={handleWhatsAppClick}>
              Contato <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="#questions" onClick={handleQuestionModalOpen}>
              <FaQuestionCircle /> Perguntas e Sugestões
            </a>
          </li>
        </ul>
        <div className="social-icons">
          <div className="icon-container">
            <BsPersonArmsUp onClick={handleLoginToggle} className="icon" />
            {showLogin && (
              <div className="login-form">
                <h3>Login</h3>
                <form onSubmit={handleLoginSubmit}>
                  <label>
                    Usuário:
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Senha:
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                  <button type="submit">Login</button>
                </form>
                <div className="signup-link">
                  <p>Não tem uma conta?</p>
                  <a href="#signup">Cadastre-se</a>
                </div>
              </div>
            )}
            {dropdownOpen && !showLogin && (
              <div className="dropdown-menu">
                <ul>
                  <li><a href="#profile" onClick={openEditProfile}>Editar Perfil</a></li>
                  <li><a href="#settings" onClick={openSettings}>Configurações</a></li>
                  <li><a href="#logout">Logout</a></li>
                </ul>
              </div>
            )}
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Pesquisar casarão..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <select value={filter} onChange={handleFilterChange}>
              <option value="">Todos</option>
              <option value="historico">Histórico</option>
              <option value="moderno">Moderno</option>
            </select>
            <FaSearch onClick={handleSearch} className="icon" />
          </div>
        </div>
        {showSettings && <Settings />}
        {showEditProfile && <EditProfile />}
      </nav>

      {/* About Section */}
      {showAbout && (
        <section className="about">
          <h2><FcAbout /> Sobre Mim</h2>
          <p>Olá, eu sou Costanza, uma engenheira de software e atualmente estou fazendo faculdade. Sou apaixonada por tecnologia e sempre buscando aprender e crescer na área de desenvolvimento de software.</p>
        </section>
      )}

      {showWhatsAppContainer && (
        <div className="whatsapp-container" style={whatsappContainerStyle}>
          <p>Contate-me no WhatsApp:</p>
          <a
            href="https://wa.me/5547988041237"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Clique aqui para falar comigo <FaWhatsapp />
          </a>
        </div>
      )}

      {showQuestionModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleQuestionModalClose}>&times;</span>
            <h2>Perguntas e Sugestões</h2>
            <form onSubmit={handleSubmitQuestion}>
              <label>
                Sua Pergunta/Sugestão:
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                ></textarea>
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
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
