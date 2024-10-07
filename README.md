# Projeto Joi Patrio

<img width="1234" alt="image" src="https://github.com/user-attachments/assets/7deab0aa-4ce6-415c-b2b6-2818289958ae">


## 1. Visão Geral do Projeto
O Joi Patrio é um sistema web desenvolvido em React para cadastrar, gerenciar e visualizar casarões históricos em Joinville. Ele oferece uma plataforma onde visitantes podem explorar informações e administradores podem gerenciar o conteúdo. Usuários registrados possuem funcionalidades extras, como preferências personalizadas e acesso a detalhes históricos dos casarões.

## 2. Importância do Patrimônio Histórico em Joinville
Joinville é rica em história, e seus casarões são símbolos desse passado cultural. A preservação desses imóveis é essencial para manter viva a identidade histórica da cidade e proporcionar educação à comunidade local e visitantes.

## 3. Motivação do Projeto
A falta de informações sobre a história da cidade como também dos casarões prejudica tanto estudantes de Arquitetura e Urbanismo que querem estudar e adquirir conhecimento como também para amantes do Patrimônio Histórico além disso
a necessidade de conscientizar sobre a preservação do patrimônio histórico motivou a criação deste sistema. Ele facilita o acesso à história dos casarões, conectando os usuários com o passado cultural de Joinville e promovendo o engajamento da comunidade.


## 4. Funcionalidades Principais
Navegação pelos Casarões: Usuários podem acessar informações dos casarões clicando em um botão "Acessar", que os redireciona para uma lista de casarões específicos. Ao selecionar um casarão, o usuário é levado para uma página dedicada a ele, contendo detalhes e imagens.

Cadastro de Casarões: Administradores podem adicionar novos casarões ao sistema, preenchendo informações detalhadas como descrição, imagens, e histórico.

Visualização de Casarões: Exibição de fotos e descrições dos casarões, além de seu histórico e relevância patrimonial.

Gerenciamento de Usuários: Administradores podem gerenciar as contas de usuários, ativando, desativando ou excluindo perfis.

Autenticação de Usuários: Implementação de login e registro para usuários, com autenticação baseada em JWT (JSON Web Token) para garantir a segurança das sessões.

Configurações de Usuário: Usuários podem personalizar preferências de temas (modo escuro/claro) e gerenciar suas notificações.

## 5. Requisitos Funcionais

Acesso a Casarões: Usuários podem acessar uma lista de casarões clicando no botão "Acessar". Ao clicar em um casarão específico, são redirecionados para uma página com detalhes completos.

Autenticação: O sistema deve permitir o login e registro de novos usuários, garantindo que cada usuário tenha suas credenciais protegidas com JWT.

Personalização de Preferências: Usuários registrados podem alterar configurações como temas (modo escuro/claro) e notificações no painel de configurações.

Gerenciamento de Casarões: Administradores podem adicionar, editar e remover casarões no sistema, garantindo que as informações estejam sempre atualizadas.

Visualização de Casarões: Exibição detalhada de cada casarão, com imagens e descrições históricas.

Gerenciamento de Usuários: Administradores podem ativar, desativar e excluir usuários.

Responsividade: O site deve ser responsivo, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops.

## 6. Requisitos Não Funcionais

Responsividade: A interface deve ser adaptável e fluida em diversos tamanhos de tela, incluindo dispositivos móveis e desktops.

Performance: As páginas de casarões e todas as interações (como login, acesso a casarões) devem ter um tempo de resposta inferior a 2 segundos.

Segurança: Todas as sessões de usuários devem ser protegidas por JWT e os dados sensíveis, como senhas, devem ser criptografados.

Escalabilidade: O sistema deve ser capaz de suportar vários usuários simultâneos, tanto para visualizar os casarões quanto para realizar ações administrativas.

## 7. Tecnologias Utilizadas

- **Front-end:** React
- **Back-end:** Node.js
- **Banco de Dados:** MySQL
- **Plataforma de Containerização:** Docker
- **CI/CD:** Github Actions
- **Ferramentas de Análise de Código:** SonarQube

## 8. Diagrama de Casos de Uso

![baixados](https://github.com/user-attachments/assets/dcf93ab0-4084-4a7e-aac9-7ba1ab4153fe)

Administrador: tem acesso total, incluindo as funcionalidades de gerenciar e adicionar casarões, além do gerenciamento de usuários.

Usuário: acessa a navegação pelos casarões, visualiza informações específicas e pode configurar preferências após o login.

Visitante: pode apenas acessar uma demonstração limitada, sem a necessidade de login.

## 9. Modelagem C4

![baixados (1)](https://github.com/user-attachments/assets/d46c9fbe-007e-4d04-aa8f-b63b52ba6d1e)

O Sistema Joi Patrio é o foco principal. Ele interage com três atores principais:

Visitante: pode visualizar a demonstração do site (exibição limitada de casarões).

Usuário Registrado: tem acesso completo ao sistema após o login, podendo acessar casarões e ajustar preferências.

Administrador: gerencia o cadastro de casarões e o gerenciamento de usuários.

## 10. API do Google Maps
A API do Google Maps é uma ferramenta poderosa que permite a integração de mapas interativos em aplicações web e móveis. No contexto do projeto "Joi Patrio", essa API será utilizada para criar um mapa virtual que exibe a localização de cada casarão histórico em Joinville.

**Funcionalidades principais:**

**Marcação de Localizações:** Cada casarão terá um marcador no mapa, permitindo que os usuários visualizem sua localização exata.

**Navegação Interativa:** Os usuários poderão interagir com o mapa, dando zoom e se movendo entre as diferentes localizações dos casarões.

**Informações Detalhadas:** Ao clicar em um marcador, os usuários poderão acessar informações adicionais sobre o casarão, como fotos, descrições e histórico, melhorando a experiência de exploração.

<img width="958" alt="mapavirtual" src="https://github.com/user-attachments/assets/f87ae93b-957e-4126-9810-f49ad8a15be4">

## 11. Referências
- [Lista de Imóveis Protegidos Culturalmente de Joinville](https://www.joinville.sc.gov.br/publicacoes/listas-de-imoveis-com-protecao-cultural/)
- [Patrimônio Cultural do Paraná](https://www.patrimoniocultural.pr.gov.br/Curitiba)

