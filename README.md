
**Sistema Web de Casarões Históricos**

Visão Geral do Projeto

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

**Diagrama de Casos de Uso (Descrição)**

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

**Tecnologias Utilizadas**

Front-end: React

Back-end: Node.js

Banco de Dados: SQL
