const Router = require('express');
const AlunoController = require('./app/controllers/aluno/AlunoController');
const FuncionarioController = require('./app/controllers/Funcionario/FuncionarioController');



const routes = new Router();


routes.get('/alunos', AlunoController.index);
routes.get('/aluno', AlunoController.listarAlunosNome);
routes.post('/aluno', AlunoController.create);
routes.put('/aluno/:matricula', AlunoController.atualizar);
routes.delete('/aluno/:matricula', AlunoController.delete);


routes.get('/Funcionarios', FuncionarioController.index);
routes.get('/Funcionario', FuncionarioController.listarFuncionariosNome);
routes.post('/Funcionario', FuncionarioController.create);
routes.put('/Funcionario/:matricula', FuncionarioController.atualizar);
routes.delete('/Funcionario/:matricula', FuncionarioController.delete);



module.exports = routes;