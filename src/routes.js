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

const routes = new Router();

const createAlunoController = new CreateAlunoController();
const listAllAlunoController = new ListAllAlunoController();
const updateAlunoController = new UpdateAlunoController();
const deleteAlunoController = new DeleteAlunoController();


routes.post('/aluno', (req, resp) => createAlunoController.create(req, resp));
routes.get('/alunos', (req, resp) => listAllAlunoController.index(req, resp));
routes.get('/aluno', (req, resp) => listAllAlunoController.listarAlunosNome(req, resp));
routes.put('/aluno/:matricula', (req, resp) => updateAlunoController.atualizar(req, resp));
routes.delete('/aluno/:matricula', (req, resp) => deleteAlunoController.delete(req, resp));


const createFuncionarioController = new CreateFuncionarioController();
const listAllFuncionarioController = new ListAllFuncionarioController();
const updateFuncionarioController = new UpdateFuncionarioController();
const deleteFuncionarioController = new DeleteFuncionarioController();
 
routes.post('/funcionario', (req, resp) => createFuncionarioController.create(req, resp));
routes.get('/funcionarios', (req, resp) => listAllFuncionarioController.index(req, resp));
routes.get('/funcionario/:nome', (req, resp) => listAllFuncionarioController.listarFuncionariosNome(req, resp));
routes.put('/funcionario/:id', (req, resp) => updateFuncionarioController.update(req, resp));
routes.delete('/funcionario/:id', (req, resp) => deleteFuncionarioController.delete(req, resp));

const createLivroController = new CreateLivroController();
const listLivroController = new ListLivroController();
const updateLivroController = new UpdateLivroController();

routes.post('/livros', (req, resp) => createLivroController.create(req, resp));
routes.get('/livros', (req, resp) => listLivroController.listAll(req, resp));
routes.put('/livro', (req, resp) => updateLivroController.atualizar(req, resp));

export default routes;