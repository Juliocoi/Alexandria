const Router = require('express');
const AlunoController = require('./app/controllers/aluno/AlunoController');
const FuncionarioController = require('./app/controllers/Funcionario/FuncionarioController');

const routes = new Router();


routes.get('/aluno', AlunoController.index);
routes.get('/aluno/:nome', AlunoController.listarAlunosNome);
routes.post('/aluno', AlunoController.create);
routes.put('/aluno/:matricula', AlunoController.atualizar);
routes.delete('/aluno/:matricula', AlunoController.delete);

routes.get('/Funcionario', FuncionarioController.index);
routes.get('/Funcionario/:nome', FuncionarioController.listarFuncionariosNome);
routes.post('/Funcionario', FuncionarioController.create);
routes.put('/Funcionario/:matricula', FuncionarioController.atualizar);
routes.delete('/Funcionario/:matricula', FuncionarioController.delete);

module.exports = routes;