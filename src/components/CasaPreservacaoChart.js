// src/componentes/CasaPreservacaoChart.js
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from 'chart.js';

// Registre os componentes necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const CasaPreservacaoChart = () => {
  const dadosCasaroes = [
    { nome: "Palacete Niemeyer", ano: 1910, status: "Preservado" },
    { nome: "Casa da Memória", ano: 1883, status: "Preservado" },
    { nome: "Museu Nacional de Imigração", ano: 1940, status: "Preservado" },
    { nome: "Casa Fritz Alt", ano: 1922, status: "Preservado" },
    { nome: "Casa da Cultura Fausto Rocha Júnior", ano: 1940, status: "Preservado" },
    { nome: "Maison de Joinville", ano: 1852, status: "Em risco" },
    { nome: "Palácio dos Príncipes", ano: 1852, status: "Em risco" },
    { nome: "Casa Neitzel", ano: 1920, status: "Preservado" },
    { nome: "Casa do Brigadeiro", ano: 1890, status: "Preservado" },
  ];

  const statusCount = {
    Preservado: 0,
    "Em risco": 0,
  };

  dadosCasaroes.forEach(casarao => {
    statusCount[casarao.status]++;
  });

  const barData = {
    labels: ['Preservados', 'Em risco'],
    datasets: [
      {
        label: 'Quantidade de Casarões',
        data: [statusCount.Preservado, statusCount["Em risco"]],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Preservados', 'Em risco'],
    datasets: [
      {
        label: 'Distribuição de Casarões',
        data: [statusCount.Preservado, statusCount["Em risco"]],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  const yearDistribution = {
    '1850-1860': 0,
    '1870-1880': 0,
    '1890-1900': 0,
    '1910-1920': 0,
    '1930-1940': 0,
  };

  dadosCasaroes.forEach(casarao => {
    const ano = casarao.ano;
    if (ano >= 1850 && ano < 1860) yearDistribution['1850-1860']++;
    else if (ano >= 1870 && ano < 1880) yearDistribution['1870-1880']++;
    else if (ano >= 1890 && ano < 1900) yearDistribution['1890-1900']++;
    else if (ano >= 1910 && ano < 1920) yearDistribution['1910-1920']++;
    else if (ano >= 1930 && ano < 1940) yearDistribution['1930-1940']++;
  });

  const lineData = {
    labels: Object.keys(yearDistribution),
    datasets: [
      {
        label: 'Quantidade de Casarões por Década',
        data: Object.values(yearDistribution),
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="data-visualization">
      <h2>Análise de Preservação dos Casarões Históricos</h2>
      <p>
        Esta análise apresenta a situação atual dos casarões históricos em Joinville. 
        Dos casarões listados, a maioria está preservada, destacando a importância da 
        conservação do patrimônio cultural da cidade. No entanto, alguns casarões estão 
        em risco, o que requer atenção e ações de preservação.
      </p>
      <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
  Fonte: Dados sobre casarões históricos em Joinville foram coletados de artigos do <a href="https://www.iphan.gov.br" target="_blank" rel="noopener noreferrer">Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)</a>.
</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <div style={{ width: '45%', height: '300px' }}>
          <h3>Gráfico de Pizza: Distribuição de Casarões</h3>
          <Pie data={pieData} />
        </div>
        <div style={{ width: '45%', height: '300px' }}>
          <h3>Gráfico de Linhas: Distribuição de Casarões por Década</h3>
          <Line data={lineData} options={options} />
        </div>
      </div>
      <div style={{ width: '60%', height: '300px', margin: '20px auto' }}>
        <h3 style={{ marginBottom: '10px' }}>Gráfico de Barras: Casarões Preservados vs. Em Risco</h3>
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default CasaPreservacaoChart;
