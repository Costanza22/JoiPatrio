// Navbar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('should render the navbar with the correct title', () => {
    render(<Navbar />);
    
    const titleElement = screen.getByText(/Bens Tombados Joinville/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('should toggle the dropdown menu on click', () => {
    render(<Navbar />);

    const dropdownToggle = screen.getByText(/Pré-Demonstração/i);
    fireEvent.click(dropdownToggle);
    
    const dropdownMenu = screen.getByRole('list', { name: /dropdown-menu/i });
    expect(dropdownMenu).toBeVisible();
    
    fireEvent.click(dropdownToggle); // Toggle off
    expect(dropdownMenu).not.toBeVisible();
  });

  test('should open the question modal when the question icon is clicked', () => {
    render(<Navbar />);
    
    const questionIcon = screen.getByRole('button', { name: /question icon/i });
    fireEvent.click(questionIcon);

    const questionModal = screen.getByLabelText(/Modal de Login\/Cadastro/i);
    expect(questionModal).toBeVisible();
  });

  test('should display a success message after successful login', () => {
    render(<Navbar />);
    
    const loginButton = screen.getByRole('button', { name: /Entrar/i });
    fireEvent.click(loginButton);
    
    const successMessage = screen.getByText(/Login efetuado com sucesso!/i);
    expect(successMessage).toBeVisible();
  });

  test('should highlight the search query in the text', () => {
    render(<Navbar />);
    
    const searchInput = screen.getByPlaceholderText(/O que você procura?/i);
    fireEvent.change(searchInput, { target: { value: 'Palacete Niemeyer' } });
    fireEvent.click(screen.getByRole('button', { name: /search icon/i }));

    const highlightedText = screen.getByText(/Palacete Niemeyer/i);
    expect(highlightedText).toHaveClass('highlight'); // Assuming you have a CSS class for highlighting
  });
});
