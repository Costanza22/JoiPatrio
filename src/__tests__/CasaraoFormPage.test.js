import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CasaraoFormPage from './CasaraoFormPage';

describe('CasaraoFormPage Component', () => {
  const mockOnSubmit = jest.fn();
  const mockCasaraoData = {
    name: 'Casarão Histórico',
    description: 'Descrição teste',
    location: 'Endereço teste',
    cep: '12345678',
    constructionDate: '2022-01-01',
    image_path: null,
    coordinates: { lat: -23.0, lng: -48.0 },
  };
  const placeholders = [
    'Nome do Casarão',
    'Descrição do Casarão',
    'Endereço do Casarão',
    'CEP',
    'Data de Construção',
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the form with initial empty fields', () => {
    render(<CasaraoFormPage onSubmit={mockOnSubmit} />);
    placeholders.forEach((placeholder) => {
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });
  });

  test('updates the name field on user input', () => {
    render(<CasaraoFormPage onSubmit={mockOnSubmit} />);
    const nameInput = screen.getByPlaceholderText('Nome do Casarão');
    fireEvent.change(nameInput, { target: { value: mockCasaraoData.name } });
    expect(nameInput.value).toBe(mockCasaraoData.name);
  });

  test('calls onSubmit with correct data when the form is submitted', () => {
    render(<CasaraoFormPage onSubmit={mockOnSubmit} />);
    const nameInput = screen.getByPlaceholderText('Nome do Casarão');
    const submitButton = screen.getByText(/Cadastrar/);
    fireEvent.change(nameInput, { target: { value: mockCasaraoData.name } });
    fireEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit.mock.calls[0][0].get('name')).toBe(mockCasaraoData.name);
  });

  test('fetches location data when a valid CEP is entered', async () => {
    global.fetch = jest.fn((url) =>
      Promise.resolve({
        json: () =>
          Promise.resolve(
            url.includes('viacep')
              ? { logradouro: 'Rua A', bairro: 'Bairro B', localidade: 'Cidade C', uf: 'UF' }
              : { results: [{ geometry: { location: { lat: -23.0, lng: -48.0 } } }] }
          ),
      })
    );

    render(<CasaraoFormPage onSubmit={mockOnSubmit} />);
    const cepInput = screen.getByPlaceholderText('CEP');
    fireEvent.change(cepInput, { target: { value: mockCasaraoData.cep } });
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Endereço do Casarão').value).toContain(
        'Rua A, Bairro B, Cidade C - UF'
      );
    });
    expect(global.fetch).toHaveBeenCalledTimes(2); // ViaCEP and Google Geocoding API
  });

  test('renders Google Map with marker when coordinates are available', () => {
    render(<CasaraoFormPage onSubmit={mockOnSubmit} casaraoData={mockCasaraoData} />);
    expect(screen.getByText(/Editar Casarão/)).toBeInTheDocument();
  });
});
