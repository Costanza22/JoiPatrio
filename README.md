
**Sistema Web de Casarões Históricos**

<img width="1233" alt="reactweb" src="https://github.com/user-attachments/assets/b1f26b67-03ba-4a30-a103-2d28775b6fb6">


**Visão Geral do Projeto**

Este projeto é um sistema web desenvolvido em React para cadastrar, gerenciar e visualizar casarões históricos em Joinville. O objetivo é proporcionar aos visitantes uma plataforma onde possam pesquisar informações sobre casarões históricos e permitir que administradores gerenciem o conteúdo do sistema. Usuários registrados têm acesso a funcionalidades adicionais, como personalizar preferências e visualizar informações detalhadas sobre cada casarão.

**Importância do Patrimônio Histórico em Joinville**

Joinville, conhecida como "Cidade das Flores", possui um rico patrimônio histórico, refletido em seus casarões e edifícios antigos. Esses casarões são testemunhas da história e cultura da cidade, representando um elo vital com o passado e uma parte essencial da identidade de Joinville. Preservar e compartilhar a história desses casarões não só valoriza a herança cultural local, mas também educa a comunidade e os visitantes sobre a evolução e a importância histórica da cidade.

**Motivação do Projeto**

A motivação para criar este projeto surgiu da necessidade de destacar e preservar a rica história de Joinville, promovendo a conscientização e o interesse pelo patrimônio histórico local. Este sistema web visa facilitar o acesso às informações sobre os casarões históricos, proporcionando uma maneira eficiente e interativa de explorar e gerenciar o legado cultural da cidade. Através desta plataforma, esperamos contribuir para a preservação da memória histórica de Joinville e incentivar o engajamento da comunidade com seu patrimônio cultural.

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

Front-end: React

Back-end: Node.js

Banco de Dados: SQL

**Diagrama de Casos de Uso 

![CosPatrio drawio](https://github.com/user-attachments/assets/4fc5e48b-07d5-457d-80ac-d8af754875de)

(Descrição)**

**Atores:**

Visitante: Usuário não registrado que acessa o sistema.

Usuário Registrado: Usuário que se registrou e fez login no sistema.

Administrador: Usuário com permissões para gerenciar o conteúdo do sistema.


**Casos de Uso:**

**Buscar Casarões**

Ator: Visitante, Usuário Registrado

Descrição: Permite que o visitante ou usuário registrado pesquise casarões históricos por nome.

**Cadastrar Casarões**

Ator: Administrador

Descrição: Permite que o administrador adicione novos casarões com informações detalhadas.

**Visualizar Casarões**

Ator: Visitante, Usuário Registrado

Descrição: Permite a exibição de informações como fotos e descrição de cada casarão.

**Gerenciar Usuários**

Ator: Administrador

Descrição: Permite que o administrador gerencie o acesso de usuários ao sistema (ativar, desativar ou excluir contas).

**Autenticação**

Ator: Usuário Registrado

Descrição: Permite que os usuários se registrem e façam login no sistema.

Configurações de Usuário


**Ator: Usuário Registrado**

Descrição: Permite que os usuários registrados alterem suas preferências (modo escuro/claro, notificações).

**Edição de Perfis**

Ator: Usuário Registrado

Descrição: Permite que os usuários editem suas informações de perfil, incluindo upload de fotos.

**Modelagem C4**

<img width="584" alt="C4" src="https://github.com/user-attachments/assets/43d7f3e2-3d5b-45b8-a857-b6b34132ec80">

**Diagrama de Containers (Resumo):**

Atores Externos: Visitante, Usuário Registrado, Administrador.

Frontend (React): Interface do usuário, exibe informações e permite interação.

Backend (Node.js + Express): Lógica do sistema, autenticação, requisições CRUD (criação, leitura, atualização, exclusão).

Banco de Dados (MySQL): Armazena os dados dos casarões, usuários, preferências.

Serviços Externos (JWT para Autenticação): Garantia de segurança e autorização.

**Exemplo de Fluxo Completo no Diagrama de Containers:**

**Um Visitante acessa a página inicial no Frontend (React).
O Frontend se comunica com o Backend (Node.js) para realizar uma pesquisa de casarões.
O Backend consulta o Banco de Dados e retorna os resultados para o Frontend, que exibe ao usuário.
Um Usuário Registrado faz login no sistema, o que aciona o Serviço de Autenticação (JWT) para validar suas credenciais.
Um Administrador acessa as funcionalidades de gerenciamento de usuários e casarões, enviando requisições via Backend para o Banco de Dados.**


