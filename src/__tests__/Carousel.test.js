
// testando o Carousel de imagens do site
import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from '../components/Carousel'; 

jest.useFakeTimers(); 

describe('Carousel Component', () => {
  test('renders images correctly', () => {
    render(<Carousel />);
    
    
    const images = screen.getAllByRole('img'); 
    expect(images).toHaveLength(3); 
    expect(images[0]).toHaveAttribute('src', 'https://omunicipiojoinville.com/wp-content/uploads/2023/03/palacete-doria-joinville.jpg');
    expect(images[1]).toHaveAttribute('src', 'https://facts.net/wp-content/uploads/2023/07/48-facts-about-joinville-1688694462.jpeg');
    expect(images[2]).toHaveAttribute('src', 'https://cortinadopassado.com.br/wp-content/uploads/2019/01/joinville-casa-de-alvino-fleith-imagem-iphan.jpg?w=816');
  });

  test('changes image after interval', () => {
    render(<Carousel />);
    

    jest.advanceTimersByTime(3000);

    const activeImages = screen.getAllByRole('img').filter((img) => img.closest('.carousel-item').classList.contains('active'));
    expect(activeImages[0]).toHaveAttribute('src', 'https://facts.net/wp-content/uploads/2023/07/48-facts-about-joinville-1688694462.jpeg'); // A segunda imagem deve estar ativa agora

   
    jest.advanceTimersByTime(3000);

    const activeImagesAfterSecondInterval = screen.getAllByRole('img').filter((img) => img.closest('.carousel-item').classList.contains('active'));
    expect(activeImagesAfterSecondInterval[0]).toHaveAttribute('src', 'https://cortinadopassado.com.br/wp-content/uploads/2019/01/joinville-casa-de-alvino-fleith-imagem-iphan.jpg?w=816'); // A terceira imagem deve estar ativa agora
  });
});
