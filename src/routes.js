import Router from 'express';

import CreateAlunoController from './app/controllers/aluno/CreateAlunoController';
import ListAllAlunoController from './app/controllers/aluno/ListAllAlunoController';
import UpdateAlunoController from './app/controllers/aluno/UpdateAlunoController';
import DeleteAlunoController from './app/controllers/aluno/DeleteAlunoController';

import CreateFuncionarioController from './app/controllers/Funcionario/CreateFuncionarioController';
import ListAllFuncionarioController from './app/controllers/Funcionario/ListAllFuncionarioController';
import UpdateFuncionarioController from './app/controllers/Funcionario/UpdateFuncionarioController';
import DeleteFuncionarioController from './app/controllers/Funcionario/DeleteFuncionarioController';

import CreateLivroController from './app/controllers/livro/CreateLivroController';
import ListLivroController from './app/controllers/livro/ListLivroController';
import UpdateLivroController from './app/controllers/livro/UpdateLivroController';
import DeleteLivrosController from './app/controllers/livro/DeleteLivroController';

import CreatePeriodicoController from './app/controllers/periodico/CreatePeriodicoController';
import ListPeriodicoController from './app/controllers/periodico/ListPeriodicoController';
import UpdatePeriodicoController from './app/controllers/periodico/UpdatePeriodicoController';
import DeletePeriodicoController from './app/controllers/periodico/DeletePeriodicoController';

import SessionAlunoController from './app/controllers/auth/SessionAlunoController';
import SessionFucionarioController from './app/controllers/auth/SessionFuncionarioController';
import ValidarTokenSessao from './Middlewares/ValidarTokenSessao';
import SessionFuncionarioController from './app/controllers/auth/SessionFuncionarioController';

const routes = new Router();

const createAlunoController = new CreateAlunoController();
const listAllAlunoController = new ListAllAlunoController();
const updateAlunoController = new UpdateAlunoController();
const deleteAlunoController = new DeleteAlunoController();

routes.post('/aluno', (req, resp) => createAlunoController.create(req, resp));
routes.get('/alunos', (req, resp) => listAllAlunoController.index(req, resp));
routes.get('/aluno/:nome', (req, resp) => listAllAlunoController.listarAlunosNome(req, resp));
routes.put('/aluno/:matricula', (req, resp) => updateAlunoController.atualizar(req, resp));
routes.delete('/aluno/:matricula', (req, resp) => deleteAlunoController.delete(req, resp));

const createFuncionarioController = new CreateFuncionarioController();
const listAllFuncionarioController = new ListAllFuncionarioController();
const updateFuncionarioController = new UpdateFuncionarioController();
const deleteFuncionarioController = new DeleteFuncionarioController();
 
routes.post('/funcionario', (req, resp) => createFuncionarioController.create(req, resp));
routes.get('/funcionarios', (req, resp) => listAllFuncionarioController.index(req, resp));
routes.get('/funcionario/:nome', (req, resp) => listAllFuncionarioController.listarFuncionariosNome(req, resp));
routes.put('/funcionario/:matricula', (req, resp) => updateFuncionarioController.update(req, resp));
routes.delete('/funcionario/:matricula', (req, resp) => deleteFuncionarioController.delete(req, resp));

const createLivroController = new CreateLivroController();
const listLivroController = new ListLivroController();
const updateLivroController = new UpdateLivroController();
const deleteLivrosController = new DeleteLivrosController();

routes.post('/livros', (req, resp) => createLivroController.create(req, resp));
routes.get('/livros', (req, resp) => listLivroController.listAll(req, resp));
routes.get('livro', (req, resp) => listLivroController.listarLivrosNome(req, resp))
routes.put('/livro/:id', (req, resp) => updateLivroController.atualizar(req, resp));
routes.delete('/livro/:id', (req, resp) => deleteLivrosController.delete(req, resp));

const createPeriodicoController = new CreatePeriodicoController();
const listPeriodicoController = new ListPeriodicoController();
const updatePeriodicoController = new UpdatePeriodicoController();
const deletePeriodicoController = new DeletePeriodicoController();

routes.post('/periodico', (req, resp) => createPeriodicoController.create(req, resp));
routes.get('/periodicos', (req, resp) => listPeriodicoController.index(req, resp));
routes.get('/periodico', (req, resp)=> listPeriodicoController.listarPeriodicosNome(req, resp));
routes.put('/periodico/:id', (req, resp) => updatePeriodicoController.atualizar(req, resp));
routes.delete('/periodico/:id', (req, resp) => deletePeriodicoController.delete(req, resp));

//Rota para criar sessão de aluno. [IMPORTANTE](ver posição correta no futuro)
routes.post('/sessionAluno', (req, resp) => SessionAlunoController.create(req, resp));

routes.post('/sessionFuncionario', (req, resp) => SessionFuncionarioController.create(req, resp));

//middleware global - está no local errado, verificar antes do commit
routes.use(ValidarTokenSessao);

export default routes;