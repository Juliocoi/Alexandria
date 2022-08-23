const Router = require('express');
const Alunocontroller = require('./app/controllers/aluno/AlunoController');
const FuncionarioController = require('./app/controllers/Funcionario/FuncionarioController')

const routes = new Router();


routes.get('/alunos', Alunocontroller.index);
routes.get('/alunos/:nome', Alunocontroller.listarAlunosNome);
routes.post('/aluno', Alunocontroller.create);
routes.put('/aluno/:matricula', Alunocontroller.atualizar);

routes.get('/funcionarios', FuncionarioController.index);
routes.get('/funcionarios/:nome', FuncionarioController.listarFuncionariosNome)
routes.post('/funcionario', FuncionarioController.create);
routes.put('/funcionario/:matricula', FuncionarioController.atualizar)

module.exports = routes