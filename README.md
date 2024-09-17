O Patrimônio Histórico de Joinville é culturamente importante para saber a história da cidade como também a vida das pessoas naquela época, como elas viviam, conviviam.

<img width="1184" alt="image" src="https://omunicipiojoinville.com/wp-content/uploads/2023/03/palacete-doria-joinville.jpg">

**Visão Geral do Projeto**

Este projeto é um sistema web para cadastrar, gerenciar e visualizar casarões históricos. O objetivo é permitir que visitantes possam pesquisar informações sobre casarões e que administradores possam gerenciar o conteúdo do sistema. Usuários registrados têm acesso a funcionalidades adicionais, como personalizar preferências do sistema e visualizar mais informações detalhadas sobre cada casarão.


**Funcionalidades Principais**

Busca de Casarões: Visitantes e usuários registrados podem pesquisar casarões históricos por nome.

Cadastro de Casarões: Administradores podem adicionar novos casarões com informações detalhadas.

Visualização de Casarões: Exibição de informações como fotos e descrição de cada casarão.

Gerenciamento de Usuários: Administradores podem gerenciar o acesso de usuários ao sistema.

Autenticação: Usuários podem se registrar e fazer login no sistema.

Configurações de Usuário: Usuários registrados podem alterar preferências, como temas (dark/light) e notificações.

Edição de Perfis: Usuários podem editar suas informações de perfil, incluindo upload de fotos.


**Requisitos Funcionais**

O sistema deve permitir que os usuários façam login e se cadastrem.

O sistema deve permitir que os visitantes pesquisem casarões sem a necessidade de login.

Usuários registrados devem ter a opção de configurar suas preferências (modo escuro/claro, notificações).

O administrador deve ser capaz de cadastrar, editar e excluir casarões.

O sistema deve permitir a visualização de detalhes do casarão, como imagem, descrição e histórico.

O administrador deve poder gerenciar usuários (ativar, desativar ou excluir contas).

O sistema deve permitir a navegação responsiva em diferentes dispositivos.


**Requisitos Não Funcionais**

O sistema deve ser responsivo e acessível em dispositivos móveis e desktop.

O tempo de resposta para pesquisas de casarões não deve exceder 2 segundos.

O sistema deve garantir que apenas administradores possam alterar o conteúdo de casarões cadastrados.

O sistema deve garantir a segurança dos dados de usuário com autenticação baseada em token (JWT).

O sistema deve ser escalável para suportar um grande número de usuários simultâneos.

O upload de imagens para perfis e casarões deve ser limitado a formatos PNG e JPEG.


**Tecnologias Utilizadas**

**Frontend:**


React.js

HTML5

CSS3

JavaScript (ES6)

**Backend:**


Node.js

Express.js

**Banco de Dados:**


MySQL

**Autenticação:**


JWT (JSON Web Token)

**Estilização:**


CSS puro com TailWind

**Upload de Arquivos:**


Multer (para gerenciar uploads de imagens)

**Gerenciamento de Dependências:**


npm (Node Package Manager)


**Diagrama de Casos de Uso**

O diagrama de casos de uso ilustra as interações entre os atores do sistema (Visitantes, Usuários Registrados e Administradores) e as funcionalidades disponíveis. Ele demonstra como cada ator acessa diferentes partes do sistema, como a busca, visualização de casarões, gerenciamento de perfis e o painel administrativo.

**Atores:**

**Visitante:** Acesso limitado para buscar e visualizar informações dos casarões.

**Usuário Registrado:** Permissões adicionais como configurar preferências e editar perfil.

**Administrador:** Controle total sobre o sistema, incluindo cadastro e gerenciamento de casarões e usuários.


**Template base: 🏠**

<img width="1184" alt="image" src="https://github.com/user-attachments/assets/1e0fb6ad-8cfa-4275-bf53-3518c4e26db4">
<img width="1228" alt="image" src="https://github.com/user-attachments/assets/abb6db4b-8b6f-4dca-87a4-e2f1eb18c49e">
