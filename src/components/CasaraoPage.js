import React from 'react';
import { useParams } from 'react-router-dom';

const CasaraoPage = () => {
  const { id } = useParams(); // Obtém o parâmetro da URL

  // Aqui você pode usar o `id` para buscar dados específicos de um casarão
  // Exemplo: buscando informações de um array de casarões ou de uma API

  const casarões = {
    "Palacete Niemeyer": {
      name: "Palacete Niemeyer",
      description: "Descrição do Palacete Niemeyer.",
      imageUrl: "link_para_a_imagem_do_palacete", // Coloque o URL da imagem
    },
    // Adicione outros casarões aqui
  };

  const casarão = casarões[id] || {}; // Busca o casarão correspondente

  return (
    <div>
      <h1>{casarão.name}</h1>
      <img src={casarão.imageUrl} alt={casarão.name} />
      <p>{casarão.description}</p>
      {/* Adicione mais informações ou componentes conforme necessário */}
    </div>
  );
};

export default CasaraoPage;
