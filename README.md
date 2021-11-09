# CRUD em Node.js
Um CRUD feito em Node.js para receber requisições e manipular um banco de dados no SGBD MySQL.
## O que é o Node.js?
- Node.js é um software de código aberto e multiplataforma para backend que permite a execução de códigos JavaScript fora do navegador.
- Sua arquitetura é chamada **Event loop** e **Non-blocking i/O**.
- É totalmente baseado em eventos e, principalmente, rotas.
- Call Stack é uma pilha de eventos.
- O event loop fica monitorando se algum evento foi disparado e, se sim, ele executa a função referente ao evento.
- Node é single-thread.
- Permite que listagem de um página requerida seja feita em partes (e não de um vez só) sem impedir comunicação entre o frontend e o backend.
## Gerenciadores de pacotes
- Servem para instalar, remover e configurar dependências e bibliotecas de terceiros em nossos projetos.
- Embora seja mais novo, o Yarn tem algumas vantagens em relação ao NPM: por exemplo o Yarn Workspaces, que permite o compartilhamento de depedências entre múltiplos projetos, para que não precisemos instalar uma por uma em cada projeto. Além disso o Yarn é mais rápido.
## API REST
### Vantagem
- Servir múltiplos clientes com o mesmo backend (web, mobile ou mesmo uma API pública).
### Fluxo de requisição e resposta
1. O cliente faz a requisição;
2. O servidor recebe a requisição e retorna uma resposta em uma estrutura de dados (ex.: JSON);
3. O ciente recebe a resposta e processa o resultado.
### Métodos HTTP
> **MÉTODO** protocolo://url-do-servidor/recurso-ou-rota/parâmetro.
- **GET** http://myapi.com/users → Busca alguma informação no backend;
- **POST** http://myapi.com/users → Cria alguma informação no backend;
- **PUT** http://myapi.com/users/1 → Edita alguma informação no backend;
- **DELETE** http://myapi.com/users/1 → Deleta alguma informação no backend.
### Códigos HTTP
- 1xx são códigos informativos:
  - 102: PROCESSING.
- 2xx são códigos de sucesso:
  - 200: SUCCESS;
  - 201: CREATED.
- 3xx são códigos de redirecionamento:
  - 301: MOVED PERMANENTLY;
  - 302: MOVED.
- 4xx são códigos de erro do cliente:
  - 400: BAD REQUEST;
  - 401: UNAUTHORIZED;
  - 404: NOT FOUND.
- 5xx são códigos de erro do servidor:
  - 500: INTERNAL SERVER ERROR.
# Preparando o ambiente
```shell
mkdir crud # cria a pasta crud.
cd crud # entra na pasta crud.
npm install --global yarn && yarn --version # instala o yarn e exibe a versão instalada.
yarn init -y # cria o package.json e automaticamente responde sim para todas as perguntas durante a criação.
code . # abre a pasta crud no vs code.
```
- No package.json ficarão armazenadas as referências de todos os pacotes que você instalar via NPM ou Yarn.
- Abra o terminal pressionando Ctrl + Shift + \` ou Ctrl + J.
```
yarn add express
```
Crie o arquivo index.js e comece a codar.
