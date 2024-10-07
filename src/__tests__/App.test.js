import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Navbar', () => {
    render(<App />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders carousel images', () => {
    render(<App />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3); // Verifica se existem 3 imagens no carrossel
  }); //o arquivo Carousel.test.js é focado nisso!

  test('displays video popup when an image is clicked', () => {
    render(<App />);
    const firstPost = screen.getByText('Casa Kruger');
    fireEvent.click(firstPost);

    const videoPopup = screen.getByRole('dialog');
    expect(videoPopup).toBeInTheDocument();
  });

  test('closes video popup when close button is clicked', () => {
    render(<App />);
    const firstPost = screen.getByText('Casa Kruger');
    fireEvent.click(firstPost);

    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);

    const videoPopup = screen.queryByRole('dialog');
    expect(videoPopup).not.toBeInTheDocument();
  });

  test('toggles chatbot open state', () => {
    render(<App />);
    const chatbotIcon = screen.getByRole('button', { name: /chat/i });
    fireEvent.click(chatbotIcon);
    // Adicione asserções para verificar se o chatbot está aberto
  });

  test('handles login success', () => {
    render(<App />);
    // Simule o sucesso do login
    const loginButton = screen.getByText(/Acesse!/i);
    fireEvent.click(loginButton);
    // Adicione asserções para verificar se o estado de login foi atualizado
  });
});
