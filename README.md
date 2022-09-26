# Projeto Integrador - Alexandria

## Descrição do Projeto

<p> Este projeto é um sistema criado para administração de empréstimos de livros da biblioteca de uma universidade. O sistema realiza o empréstimo e a devolução de livros feitos pelos alunos. Alexandria permite que cada aluno empreste até 3 livros por vez, com prazo para devolvé-los 7 dias depois, para que outros alunos possam usufruir dos mesmos livros.</p>

<p>Esse projeto é parte do Projeto Integrador do curso Back End Nodejs da Digital House patrocinado pelo iFood.
</p>

## Sumário

- [Estrutura do projeto](#estrutura-do-projeto)
- [Instalação](#manual)
- [Comandos](#comandos)
- [API Endpoints](#api-endpoints)
- [Contribuidores](#contribuidores)

## Estrutura do projeto

```
src\
 |--\app\controllers\    # Controllers
 |--\app\models\         # Modelos
 |--\app\services\       # Lógica do Sistema
 |--\app\utils\          # Classes e funções utilitárias
 |--config\         # Configuração 
 |--\database\migrations\  # Migrations com as tabelas do sistema
 |--\database\index.js   # Conexão com o banco de dados
 |--middlewares\    # Middlewares personalizados de validação
 |--routes.js        # Rotas

```

## Instalação

- **Clone o repositório do GitHub:**

```bash
git clone https://github.com/Juliocoi/Alexandria.git
cd Alexandria
```

- **Instale as dependências do projeto:**

```bash
npm install
```

- **Configure as variáveis de ambiente:**

Crie o arquivo `.env`

```bash
cp .env.example .env
```

Adicione as seguintes variáveis de ambiente no arquivo `.env` com seus respectivos valores

```json
##Porta do servidor
API_PORT =

##MySQL
DB_TYPE = 
DB_PORT = 
DB_HOST = 
DB_USERNAME = 
DB_PASSWORD = 
DB_DATABASE = 

##Criptografia
PASSWORD_SALT=
#JWT
JWT_PRIVATE_KEY=
```

## Comandos

- Para rodar o código, digite no terminal:

```bash
npm start
```

## API Endpoints

<!-- Verificar se é pra usar a documentação aqui -->

## Contribuidores

Contribuidores do projeto:

<!-- Colocar nossos nomes -->
