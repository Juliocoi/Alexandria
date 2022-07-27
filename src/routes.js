const Router = require('express');
const controller = require('./app/controllers/aluno/AlunoController');

const routes = new Router();


routes.get('/alunos', controller.index);
routes.get('/alunos/:nome', controller.listarAlunosNome);
routes.post('/aluno', controller.create);
routes.put('/aluno/:matricula', controller.atualizar);

module.exports = routes