## Joi Patrio
## Tema do Projeto
O tema do projeto é o desenvolvimento de uma plataforma web que documenta e divulga o patrimônio histórico de Joinville, enfocando especialmente os casarões históricos. A aplicação terá uma interface intuitiva, onde os usuários poderão visualizar informações sobre cada casarão, bem como imagens e detalhes relevantes.

## Resumo do Projeto
O projeto Joi Patrio surgiu com o intuito de valorizar e preservar o patrimônio histórico de Joinville, através de uma plataforma web que permite a catalogação e a divulgação de casarões históricos. A ideia foi inspirada na necessidade de resgatar a história local e torná-la acessível para a comunidade e visitantes, promovendo a conscientização sobre a importância da conservação do patrimônio cultural.

## Introdução

Joinville, cidade rica em cultura e história, abriga uma variedade de casarões que representam a arquitetura e a herança cultural da região. No entanto, muitos desses casarões não são amplamente conhecidos ou valorizados. O projeto Joi Patrio busca preencher essa lacuna ao criar uma plataforma que facilite a catalogação, divulgação e valorização dos casarões históricos da cidade, permitindo que cidadãos e turistas possam explorar e aprender mais sobre esse patrimônio.

## Justificativa
A relevância do projeto no campo da engenharia de software é clara, pois propõe uma solução que alia tecnologia à valorização cultural. Ao desenvolver uma plataforma web para a catalogação de casarões, o projeto demonstra como a aplicação de técnicas de engenharia de software pode contribuir para a preservação do patrimônio histórico, ao mesmo tempo em que proporciona uma experiência interativa e educativa para os usuários.

## Objetivos
O objetivo principal do projeto é desenvolver uma aplicação web que permita a catalogação e a visualização de casarões históricos em Joinville. Os objetivos secundários incluem:

Facilitar o acesso às informações sobre os casarões, incluindo sua localização, história, e características arquitetônicas.

Implementar funcionalidades interativas que permitam aos usuários explorar os casarões em um mapa.

Garantir a usabilidade da aplicação, de forma que todos possam facilmente navegar e acessar as informações.

## Problemas a Resolver
Falta de informação acessível: Muitas pessoas não têm conhecimento sobre a história e a importância dos casarões históricos em Joinville.

Dificuldade de acesso a informações: A ausência de uma plataforma unificada torna difícil a busca por informações sobre o patrimônio histórico.

Baixa interação com a comunidade: Há uma necessidade de promover o engajamento da comunidade na preservação do patrimônio histórico.

## Limitações
O projeto se concentrará exclusivamente na catalogação de casarões e não abordará outras formas de patrimônio cultural, como eventos ou tradições.

O desenvolvimento da plataforma não incluirá a implementação de programas educativos ou de engajamento comunitário, embora seja uma parte importante da preservação do patrimônio.

## Especificação Técnica

## Requisitos Funcionais (RF)

| **Requisito**                                                                                          |
|-------------------------------------------------------------------------------------------------------|
| 1. Permitir o registro de informações detalhadas sobre casarões históricos, incluindo fotos e localização.                                    |
| 2. Implementar um sistema de autenticação com login para administradores e visitantes.                                       |
  3.Permitir que os usuários marquem casarões como favoritos para acesso rápido posterior.         |
| 4. Implementar sistema de login para administradores e visitantes.                                    |
| 5. Permitir que os administradores adicionem, editem ou removam informações e imagens sobre casarões.                                   |
| 6. Implementar um sistema de comentários ou feedback, permitindo que visitantes compartilhem opiniões sobre cada casarão.                      |          |
| 7. Implementar uma seção de blog sobre patrimônio histórico.                                          |
          
                

## Requisitos Não-Funcionais (RNF)

| **Requisito**                                                                                          |
|-------------------------------------------------------------------------------------------------------|
| 1. A aplicação deve ser responsiva, funcionando bem em dispositivos móveis.                           |
| 2. A interface deve ser intuitiva e fácil de usar.                                                   |
| 3. A aplicação deve ter um tempo de resposta rápido para buscas e carregamento de informações.        |
| 4. Garantir a segurança das informações dos usuários, especialmente no login e no cadastro.          |
| 5. Acessibilidade para usuários com deficiência, garantindo que todos os elementos possam ser utilizados. |

## Casos de Uso

O diagrama abaixo representa os principais casos de uso do sistema *Joi Patrio* e como os usuários (Visitante e Administrador) interagem com o sistema:

- **Visitante**: Pode fazer login, marcar casarões como favoritos, deixar comentários, e visualizar o blog.
- **Administrador**: Pode registrar novos casarões, gerenciar informações e editar os dados dos casarões.

![diagrama 4](https://github.com/user-attachments/assets/711ce6b0-e403-4c9c-b9ba-52ed49295ae8)


## Casos de Uso (CU) com os Atores

| **Caso de Uso**                          | **Descrição**                                                                                                     | **Atores Envolvidos**      |
|------------------------------------------|-------------------------------------------------------------------------------------------------------------------|-----------------------------|
| **CU01**: Registrar casarões históricos   | Permite registrar informações detalhadas sobre casarões históricos, incluindo fotos e localização.                | Administrador               |
| **CU02**: Autenticação de Usuário         | Implementa o login e autenticação para permitir acesso de visitantes e administradores.                          | Visitante, Administrador    |
| **CU03**: Marcar Favoritos                | Permite aos usuários marcar casarões como favoritos para acesso rápido.                                          | Visitante                   |
| **CU04**: Gerenciar Informações de Casarões | Permite ao administrador adicionar, editar ou remover informações e imagens de casarões históricos.              | Administrador               |
| **CU05**: Comentários e Feedback          | Permite que os visitantes compartilhem suas opiniões sobre cada casarão.                                         | Visitante                   |
| **CU06**: Visualizar Blog                 | Visitantes podem acessar a seção de blog sobre patrimônio histórico e ler publicações.                           | Visitante, Administrador    |


## Padrões de Arquitetura:

## Modelos C4: 

## 1. Diagrama de Contexto (Nível 1) - Modelo C4

![mermaid-diagram-2024-11-09-185808](https://github.com/user-attachments/assets/946a8427-5c32-41e1-9e08-ad494d62c8de)

## 2. Diagrama de Containers (Nível 2) - Modelo C4
![mermaid-diagram-2024-11-09-185733](https://github.com/user-attachments/assets/b6b70455-16a4-4e5f-86fe-c82921a60ac8)

## Trello
https://trello.com/b/tn4lqws7/joipatrio

## Stack Tecnológica
Back-end: Node.js, pela sua flexibilidade e facilidade de desenvolvimento.

Front-end: React, para a criação de uma interface de usuário dinâmica e responsiva.

Banco de Dados: MySQL, para o armazenamento de informações sobre os casarões.

## Projeto
O Projeto foi separado em dois repositórios

A página principal é esse e a parte de login é esse 

https://github.com/Costanza22/joinville-version

Para melhor organização!

## Aplicação do Método KISS no Joi Patrio
O projeto Joi Patrio foi desenvolvido com base no método KISS (Keep It Simple, Stupid), priorizando a simplicidade no design e na implementação para garantir eficiência e fácil compreensão.

Como Foi Aplicado?

Design Intuitivo: Interface limpa e direta, com foco em imagens e informações essenciais sobre os casarões históricos.

Código Enxuto: Componentes reutilizáveis em React e dependências limitadas às essenciais, como react-icons e react-router-dom.

Funcionalidades Prioritárias: Busca com sugestões, login simplificado e acesso rápido aos casarões atendem o objetivo principal.

## Benefícios
Manutenção Facilitada: Código organizado e de fácil evolução.

Experiência do Usuário: Navegação clara e intuitiva.

Crescimento Gradual: Base simples que permite expansão futura sem comprometer o projeto inicial.

## Aplicação do Docker no Joi Patrio
Este projeto utiliza o Docker para garantir ambientes consistentes para o frontend, backend e o banco de dados MySQL, facilitando o desenvolvimento, testes e a implantação. O Docker permite que a aplicação seja executada de forma isolada e portável, sem a necessidade de configurações complexas no ambiente local.

## Estrutura dos Contêineres

Frontend (React): Executado em um contêiner e acessível através de http://localhost:4000.

Backend (Node.js): Executado em outro contêiner, acessível via http://localhost:5001.

Banco de Dados (MySQL): Contêiner isolado, acessível através de http://localhost:5000.

## Instruções para Rodar o Projeto

Clonar o repositório:

git clone https://github.com/Costanza22/joinville-version

cd joinville-version

Construir e rodar os contêineres com Docker Compose:

docker-compose up --build

## Acessar a aplicação
Frontend: http://localhost:4000

Backend: http://localhost:5001

Banco de Dados: Acessível na porta 5000 (para conexão com o backend).

## Como Funciona
O frontend é um aplicativo React servido por Nginx.

O backend é uma API Node.js que interage com o banco de dados MySQL.

O MySQL armazena os dados sobre os casarões históricos de Joinville.

## Vantagens
Ambientes consistentes: Todos os serviços (frontend, backend e banco de dados) são configurados de forma independente, mas interagem entre si dentro da mesma rede Docker.

Facilidade de configuração: O projeto pode ser iniciado com um único comando, sem a necessidade de instalação manual de dependências.


## Ferramenta de Análise de código : SonarQube

## Conclusão
O projeto Joi Patrio não apenas busca registrar a rica história dos casarões de Joinville, mas também fomentar a consciência sobre a importância da preservação do patrimônio histórico. Através de uma plataforma acessível e interativa, espera-se envolver a comunidade e os visitantes, promovendo um maior apreço pela herança cultural da cidade.
