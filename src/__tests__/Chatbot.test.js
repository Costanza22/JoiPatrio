import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chatbot from './Chatbot'; 

describe('Chatbot Component', () => {
  test('renders Chatbot title and icon', () => {
    render(<Chatbot />);
    
    const titleElement = screen.getByText(/chatbot/i);
    const iconElement = screen.getByRole('img'); 

    expect(titleElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test('sends a message and displays it', () => {
    render(<Chatbot />);

    const inputElement = screen.getByPlaceholderText(/digite uma mensagem.../i);
    const sendButton = screen.getByText(/enviar/i);

    fireEvent.change(inputElement, { target: { value: 'Olá, chatbot!' } });
    fireEvent.click(sendButton);

    const userMessage = screen.getByText(/olá, chatbot!/i);
    expect(userMessage).toBeInTheDocument();
  });

  test('displays bot response after sending a message', async () => {
    render(<Chatbot />);

    const inputElement = screen.getByPlaceholderText(/digite uma mensagem.../i);
    const sendButton = screen.getByText(/enviar/i);

    fireEvent.change(inputElement, { target: { value: 'Qual é o seu nome?' } });
    fireEvent.click(sendButton);

    const botMessage = await screen.findByText(/esta é uma resposta do bot!/i);
    expect(botMessage).toBeInTheDocument();
  });
});
