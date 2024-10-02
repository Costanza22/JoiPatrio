## Joi Patrio - Sistema Web de Casarões Históricos

<img width="1234" alt="image" src="https://github.com/user-attachments/assets/7deab0aa-4ce6-415c-b2b6-2818289958ae">


## 1. Visão Geral do Projeto
O Joi Patrio é um sistema web desenvolvido em React para cadastrar, gerenciar e visualizar casarões históricos em Joinville. Ele oferece uma plataforma onde visitantes podem explorar informações e administradores podem gerenciar o conteúdo. Usuários registrados possuem funcionalidades extras, como preferências personalizadas e acesso a detalhes históricos dos casarões.

## 2. Importância do Patrimônio Histórico em Joinville
Joinville é rica em história, e seus casarões são símbolos desse passado cultural. A preservação desses imóveis é essencial para manter viva a identidade histórica da cidade e proporcionar educação à comunidade local e visitantes.

## 3. Motivação do Projeto
A falta de informações sobre a história da cidade como também dos casarões prejudica tanto estudantes de Arquitetura e Urbanismo que querem estudar e adquirir conhecimento como também para amantes do Patrimônio Histórico além disso
a necessidade de conscientizar sobre a preservação do patrimônio histórico motivou a criação deste sistema. Ele facilita o acesso à história dos casarões, conectando os usuários com o passado cultural de Joinville e promovendo o engajamento da comunidade.


# Projeto Joi Patrio

## 1. Descrição

O projeto "Joi Patrio" é uma aplicação web que visa promover e preservar o patrimônio histórico de Joinville, permitindo que usuários visualizem informações sobre casarões históricos. A plataforma oferece funcionalidades de cadastro, gerenciamento e visualização de casarões, proporcionando uma experiência rica e interativa.

## 2. Funcionalidades Principais

- **Navegação pelos Casarões:** Usuários podem acessar informações dos casarões clicando em botões dedicados, em vez de realizar uma pesquisa.
- **Cadastro de Casarões:** Administradores podem adicionar novos casarões com detalhes completos.
- **Visualização de Casarões:** Exibição de fotos e descrições dos casarões.
- **Gerenciamento de Usuários:** Administradores gerenciam contas de usuários (ativar, desativar, excluir).
- **Autenticação de Usuários:** Registro e login de usuários utilizando JWT para segurança.
- **Configurações de Usuário:** Permite personalização de temas (modo escuro/claro) e gerenciamento de notificações.
- **Edição de Perfis:** Usuários podem editar suas informações e realizar upload de foto de perfil.

## 3. Requisitos Funcionais

- **Acesso a Casarões:** Usuários acessam informações dos casarões por meio de botões, com uma lista de casarões já cadastrados.
- Login e registro de usuários.
- Configuração de preferências pelos usuários registrados.
- Cadastro e gerenciamento de casarões pelos administradores.
- Detalhamento completo dos casarões (imagens, descrições, histórico).
- Gerenciamento de usuários pelo administrador.
- Navegação responsiva para dispositivos móveis e desktop.

## 4. Requisitos Não Funcionais

- **Responsividade:** Design adaptável para dispositivos móveis e desktop.
- **Performance:** Pesquisa rápida com menos de 2 segundos de resposta.
- **Segurança:** Proteção dos dados de usuários com JWT.
- **Escalabilidade:** Suporte a múltiplos usuários simultâneos.
- **Uploads de Imagens:** Suporte a formatos PNG e JPEG, com limites de tamanho.

## 5. Tecnologias Utilizadas

- **Front-end:** React
- **Back-end:** Node.js
- **Banco de Dados:** MySQL
- **Plataforma de Containerização:** Docker
- **CI/CD:** Github Actions
- **Ferramentas de Análise de Código:** SonarQube

## 6. Diagrama de Casos de Uso

![CosPatrio drawio](https://github.com/user-attachments/assets/289ec1af-0450-4a20-b9fb-5b64edf6e182)

**Atores:** 
- **Visitante:** Usuário não registrado que acessa o sistema.
- **Usuário Registrado:** Usuário que se registrou e fez login no sistema.
- **Administrador:** Usuário com permissões para gerenciar o conteúdo do sistema.

**Funcionalidades**
- **Buscar Casarões:** Permite que o visitante ou usuário registrado pesquise casarões históricos por nome.
- **Cadastrar Casarões:** Permite que o administrador adicione novos casarões com informações detalhadas.
- **Visualizar Casarões:** Permite a exibição de informações como fotos e descrição de cada casarão.
- **Gerenciar Usuários:** Permite que o administrador gerencie o acesso de usuários ao sistema (ativar, desativar ou excluir contas).
- **Autenticação:** Permite que os usuários se registrem e façam login no sistema.
- **Configurações de Usuário:** Permite que os usuários registrados alterem suas preferências (modo escuro/claro, notificações).
- **Edição de Perfis:** Permite que os usuários editem suas informações de perfil, incluindo upload de fotos.

## 7. Modelagem C4

<img width="584" alt="C4" src="https://github.com/user-attachments/assets/43d7f3e2-3d5b-45b8-a857-b6b34132ec80">

**Diagrama de Containers (Resumo):**

- **Atores Externos:** Visitante, Usuário Registrado, Administrador.
- **Frontend (React):** Interface do usuário, exibe informações e permite interação.
- **Backend (Node.js + Express):** Lógica do sistema, autenticação, requisições CRUD (criação, leitura, atualização, exclusão).
- **Banco de Dados (MySQL):** Armazena os dados dos casarões, usuários, preferências.
- **Serviços Externos (JWT para Autenticação):** Garantia de segurança e autorização.

### API:

- **Frontend (React):** Envia requisições HTTP (usando axios) para a API do backend.
  - `GET /casaroes`: para listar casarões.
  - `POST /auth/login`: para autenticar usuários.
  - `PUT /usuario/:id`: para atualizar o perfil do usuário.

- **Backend (Node.js + Express):** O backend recebe essas requisições e responde com os dados ou realiza ações como autenticação, consulta ou modificação no banco de dados.

## 8. API do Google Maps

Para criar um mapa Virtual com a localização de cada casarão.

A API seria composta por diversas rotas REST, como:

- `/auth` para autenticação e registro de usuários.
- `/casaroes` para busca, cadastro e gerenciamento de casarões.
- `/usuarios` para edição de perfil e gerenciamento de usuários.

## 9. Exemplo de Fluxo Completo no Diagrama de Containers:

- Um Visitante acessa a página inicial no Frontend (React).
- O Frontend se comunica com o Backend (Node.js) para realizar uma pesquisa de casarões.
- O Backend consulta o Banco de Dados e retorna os resultados para o Frontend, que exibe ao usuário.
- Um Usuário Registrado faz login no sistema, o que aciona o Serviço de Autenticação (JWT) para validar suas credenciais.
- Um Administrador acessa as funcionalidades de gerenciamento de usuários e casarões, enviando requisições via Backend para o Banco de Dados.

## 10. Referências
- [Lista de Imóveis Protegidos Culturalmente de Joinville](https://www.joinville.sc.gov.br/publicacoes/listas-de-imoveis-com-protecao-cultural/)
- [Patrimônio Cultural do Paraná](https://www.patrimoniocultural.pr.gov.br/Curitiba)

