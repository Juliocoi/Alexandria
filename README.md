# :scroll: Projeto Integrador - Alexandria :scroll:

## :books: Descrição do Projeto

<p> Este projeto é um sistema criado para administração de empréstimos de livros da biblioteca de uma universidade. O sistema realiza o empréstimo e a devolução de livros feitos pelos alunos. Alexandria permite que cada aluno empreste até 3 livros por vez, com prazo para devolvé-los 7 dias depois, para que outros alunos possam usufruir dos mesmos livros.</p>

<p>Esse projeto é parte do Projeto Integrador do curso Back End Nodejs da Digital House patrocinado pelo iFood.
</p>

## :books: Sumário

- [Estrutura do projeto](#estrutura-do-projeto)
- [Configuração](#config)
- [Comandos](#comandos)
- [Contribuidores](#contribuidores)
- [Apoio](#apoio)

## :books: Estrutura do sistema

```
src\
 |--\app\controllers\    # Controllers
 |--\app\models\         # Modelos
 |--\app\services\       # Lógica do Sistema
 |--\app\utils\          # Utilitários
 |--config\         # Configuração 
 |--\database\migrations\  # Migrations com as tabelas do sistema
 |--\database\index.js   # Conexão com o banco de dados
 |--middlewares\    # Middlewares personalizados de validação
 |--routes.js        # Rotas
```

## :books: Config

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

## :books: Comandos

- Para rodar o código, digite no terminal:

```bash
npm start
```

<!-- ## API Endpoints

 Verificar se é pra usar a documentação aqui -->

## :books: Contribuidores

  :smiley: [Julio Cesar](https://github.com/Juliocoi)
  :wink: [Katherine](https://github.com/hanakathy)
  :sunglasses: [Lucas](https://github.com/Lucas98s)

## :books: Apoio

<table>
<tr>
    <td align="center"><a href="https://www.ifood.com.br/"><img src="https://geek360.com.br/wp-content/uploads/2021/06/iFood-tabela.png" width="100px;" alt=""/><br /><sub><b>IFood</b></sub></a><br /></td> 
    <td align="center"><a href="https://www.potenciatech.com.br/"><img src="https://images.assets-landingi.com/KTHBpSLedd3x87rx/logo_copiar_1.png" width="100px;" alt=""/><br /><sub><b>Potência Tech</b></sub></a><br /></td>
    <td align="center"><a href="https://www.digitalhouse.com/br"><img src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1061/s300/digitalhouse.jpg" width="100px;" alt=""/><br /><sub><b>Digital House</b></sub></a><br /></td>
</table>

<!-- Imagens em MD
[![iFood](https://geek360.com.br/wp-content/uploads/2021/06/iFood-tabela.png)](https://www.ifood.com.br/)
 [![Potencia Tech](https://images.assets-landingi.com/KTHBpSLedd3x87rx/logo_copiar_1.png)](https://www.potenciatech.com.br/)
 [![Digital House](https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1061/s300/digitalhouse.jpg)](https://www.digitalhouse.com/br)
 -->
