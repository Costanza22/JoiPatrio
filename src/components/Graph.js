// Graph.js
import React from 'react';
import Plot from 'react-plotly.js';

const Graph = () => {
  const data = [
    {
      x: [1910, 1883, 1940, 1922, 1940, 1852, 1852, 1920, 1890, 1910],
      y: [
        "Palacete Niemeyer", "Casa da Memória", "Museu Nacional de Imigração",
        "Casa Fritz Alt", "Casa da Cultura Fausto Rocha Júnior", "Maison de Joinville",
        "Palácio dos Príncipes", "Casa Neitzel", "Casa do Brigadeiro", "Casa do Dr. Córdula"
      ],
      z: [
        "Preservado", "Preservado", "Preservado", 
        "Preservado", "Preservado", "Em risco", 
        "Em risco", "Preservado", "Preservado", "Preservado"
      ],
      mode: 'markers',
      marker: {
        color: ['green', 'green', 'green', 'green', 'green', 'red', 'red', 'green', 'green', 'green'],
        size: 12,
      },
      type: 'scatter3d',
      text: [
        "Palacete Niemeyer", "Casa da Memória", "Museu Nacional de Imigração", 
        "Casa Fritz Alt", "Casa da Cultura Fausto Rocha Júnior", 
        "Maison de Joinville", "Palácio dos Príncipes", 
        "Casa Neitzel", "Casa do Brigadeiro", "Casa do Dr. Córdula"
      ],
      hoverinfo: 'text'
    }
  ];

  const layout = {
    title: 'Casarões Históricos de Joinville',
    scene: {
      xaxis: { title: 'Ano de Construção' },
      yaxis: { title: 'Casarões' },
      zaxis: { title: 'Status de Preservação' },
    },
  };

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
};

export default Graph;
