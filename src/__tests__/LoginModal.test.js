import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from 'react-modal'; 
import LoginModal from './LoginModal'; 
const closeModal = jest.fn();
const handleLoginSubmit = jest.fn();

const renderLoginModal = (isLogin = true, loginSuccess = false) => {
  render(
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Modal de Login/Cadastro"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <LoginModal
        isLogin={isLogin}
        loginSuccess={loginSuccess}
        closeModal={closeModal}
        handleLoginSubmit={handleLoginSubmit}
      />
    </Modal>
  );
};

describe('LoginModal Component', () => {
  test('Exibe mensagem de sucesso após login bem-sucedido', () => {
    renderLoginModal(true, true);
    
    const successMessage = screen.getByText(/Login efetuado com sucesso!/i);
    expect(successMessage).toBeInTheDocument();
  });

  test('Permite o envio do formulário de login', () => {
    renderLoginModal();

   
    fireEvent.change(screen.getByLabelText(/Usuário:/i), {
      target: { value: 'user123' }
    });
    fireEvent.change(screen.getByLabelText(/Senha:/i), {
      target: { value: 'password123' }
    });

    
    fireEvent.submit(screen.getByText(/Entrar/i));

    
    expect(handleLoginSubmit).toHaveBeenCalled();
  });

  test('Exibe o formulário de cadastro quando clicado', () => {
    
    renderLoginModal(false);

    
    const signupFormTitle = screen.getByText(/Cadastro/i);
    expect(signupFormTitle).toBeInTheDocument();
  });
});
