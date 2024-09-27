## Joi Patrio - Sistema Web de Casarões Históricos

<img width="1234" alt="image" src="https://github.com/user-attachments/assets/7deab0aa-4ce6-415c-b2b6-2818289958ae">


## 1. Visão Geral do Projeto
O Joi Patrio é um sistema web desenvolvido em React para cadastrar, gerenciar e visualizar casarões históricos em Joinville. Ele oferece uma plataforma onde visitantes podem explorar informações e administradores podem gerenciar o conteúdo. Usuários registrados possuem funcionalidades extras, como preferências personalizadas e acesso a detalhes históricos dos casarões.

## 2. Importância do Patrimônio Histórico em Joinville
Joinville é rica em história, e seus casarões são símbolos desse passado cultural. A preservação desses imóveis é essencial para manter viva a identidade histórica da cidade e proporcionar educação à comunidade local e visitantes.

## 3. Motivação do Projeto
A falta de informações sobre a história da cidade como também dos casarões prejudica tanto estudantes de Arquitetura e Urbanismo que querem estudar e adquirir conhecimento como também para amantes do Patrimônio Histórico além disso
a necessidade de conscientizar sobre a preservação do patrimônio histórico motivou a criação deste sistema. Ele facilita o acesso à história dos casarões, conectando os usuários com o passado cultural de Joinville e promovendo o engajamento da comunidade.


## 4. Funcionalidades Principais

Busca de Casarões: Lista acoplada

Cadastro de Casarões: Administradores podem adicionar novos casarões.

Visualização de Casarões: Exibição de fotos e descrições.

Gerenciamento de Usuários: Administradores gerenciam contas de usuários.

Autenticação de Usuários: Registro e login de usuários.

Configurações de Usuário: Personalização de temas e notificações.

Edição de Perfis: Upload de foto e edição de informações do usuário.

## 5. Requisitos Funcionais

Login e registro de usuários.

Busca pública de casarões sem login.

Configuração de preferências pelos usuários registrados.

Cadastro e gerenciamento de casarões pelos administradores.

Detalhamento completo dos casarões (imagem, descrição, histórico).

Gerenciamento de usuários pelo administrador.

Navegação responsiva.

## 6. Requisitos Não Funcionais
Responsividade para dispositivos móveis e desktop.

Pesquisa rápida (menos de 2 segundos de resposta).

Segurança dos dados de usuário (JWT).

Escalabilidade para vários usuários simultâneos.

Upload de imagens limitado a PNG e JPEG.

## 7. Tecnologias Utilizadas

Front-end: React

Back-end: Node.js

Banco de Dados: SQL

Plataforma de Containerização: Docker

CI/CD: Github Actions

Ferramentas de Análise de Código: SonarQube

## 9. Diagrama de Casos de Uso

![CosPatrio drawio](https://github.com/user-attachments/assets/289ec1af-0450-4a20-b9fb-5b64edf6e182)

**Atores:** 
Visitante: Usuário não registrado que acessa o sistema.

Usuário Registrado: Usuário que se registrou e fez login no sistema.

Administrador: Usuário com permissões para gerenciar o conteúdo do sistema.

**Funcionalidades**

Buscar Casarões: Permite que o visitante ou usuário registrado pesquise casarões históricos por nome.

Cadastrar Casarões: Permite que o administrador adicione novos casarões com informações detalhadas.

Visualizar Casarões: Permite a exibição de informações como fotos e descrição de cada casarão.

Gerenciar Usuários: Permite que o administrador gerencie o acesso de usuários ao sistema (ativar, desativar ou excluir contas).

Autenticação: Permite que os usuários se registrem e façam login no sistema.

Configurações de Usuário: Permite que os usuários registrados alterem suas preferências (modo escuro/claro, notificações).

Edição de Perfis: Permite que os usuários editem suas informações de perfil, incluindo upload de fotos.

## 9. Modelagem C4

<img width="584" alt="C4" src="https://github.com/user-attachments/assets/43d7f3e2-3d5b-45b8-a857-b6b34132ec80">

**Diagrama de Containers (Resumo):**

Atores Externos: Visitante, Usuário Registrado, Administrador.

Frontend (React): Interface do usuário, exibe informações e permite interação.

Backend (Node.js + Express): Lógica do sistema, autenticação, requisições CRUD (criação, leitura, atualização, exclusão).

Banco de Dados (MySQL): Armazena os dados dos casarões, usuários, preferências.

Serviços Externos (JWT para Autenticação): Garantia de segurança e autorização.

**API:**

Frontend (React): Envia requisições HTTP (usando axios) para a API do backend.

GET /casaroes: para listar casarões.

POST /auth/login: para autenticar usuários.

PUT /usuario/:id: para atualizar o perfil do usuário.

Backend (Node.js + Express): O backend recebe essas requisições e responde com os dados ou realiza ações como autenticação, consulta ou modificação no banco de dados.

## 10. API do Google Maps:

Para criar um mapa Virtual com a localização de cada casarão.

A API seria composta por diversas rotas REST, como:

/auth para autenticação e registro de usuários.

/casaroes para busca, cadastro e gerenciamento de casarões.

/usuarios para edição de perfil e gerenciamento de usuários.

## 11. Exemplo de Fluxo Completo no Diagrama de Containers:

Um Visitante acessa a página inicial no Frontend (React).

O Frontend se comunica com o Backend (Node.js) para realizar uma pesquisa de casarões.

O Backend consulta o Banco de Dados e retorna os resultados para o Frontend, que exibe ao usuário.

Um Usuário Registrado faz login no sistema, o que aciona o Serviço de Autenticação (JWT) para validar suas credenciais.

Um Administrador acessa as funcionalidades de gerenciamento de usuários e casarões, enviando requisições via Backend para o Banco de Dados.

## 13. Referências:
[Lista de Imóveis Protegidos Culturalmente de Joinville](https://www.joinville.sc.gov.br/publicacoes/listas-de-imoveis-com-protecao-cultural/)

https://www.patrimoniocultural.pr.gov.br/Curitiba
