# gestao-de-tarefas

Este é um projeto que demonstra o uso das tecnologias Angular, Spring Boot e PostgreSQL para criar uma aplicação de gerenciamento de tarefas.

## Tecnologias utilizadas

- Angular
- Angular Material
- Spring Boot
- PostgreSQL

## Pré-requisitos

- Node.js (versão 18.6.0)
- Java Development Kit (JDK) 11
- PostgreSQL (versão 12.15)

## Passo a passo para executar o projeto

1. Clone o repositório para o seu ambiente local:

git clone https://github.com/hmesquita26/gestao-de-tarefas.git

2. Acesse o diretório do projeto:

para o back-end:
cd gestao-de-tarefas-back 

para o front-end:
cd gestao-de-tarefas-front

3. Configure o banco de dados PostgreSQL:

   - Crie um banco de dados chamado `gestao` no PostgreSQL.
   - Abra o arquivo `application.properties` localizado no diretório `gestao-de-tarefas-back/src/main/resources` e atualize as configurações de conexão com o banco de dados, incluindo o nome do banco, nome de usuário e senha.

4. Execute o backend Spring Boot:

./mvnw spring-boot:run

5. Execute o frontend Angular:

npm install
ng serve

6. Acesse a aplicação no navegador:

http://localhost:4200

7. Pronto! Agora você pode usar a aplicação para gerenciar suas tarefas.

## Funcionalidades

- Listagem de tarefas
- Criação de novas tarefas
- Edição de tarefas existentes
- Atualização de estado das tarefas



