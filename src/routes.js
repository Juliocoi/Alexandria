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
import SessionFuncionarioController from './app/controllers/auth/SessionFuncionarioController';
import ValidarTokenSessao from './Middlewares/ValidarTokenSessao';

import EmprestimoController from './app/controllers/emprestimo/EmprestimoController';
import CreateEmprestimoController from './app/controllers/emprestimo/CreateEmprestimoController';
import EntregaEmprestimoController from './app/controllers/emprestimo/EntregaEmprestimoController';

import alunoValidator from './Middlewares/AlunoValidator';
import funcionarioValidator from './Middlewares/FuncionarioValidator';
import livroValidator from './Middlewares/LivroValidator';
import periodicoValidator from './Middlewares/PeriodicoValidator';
import  swagger  from 'swagger-ui-express';
import swaggerjson from './docs/swagger.json'

const routes = new Router();

routes.use('/docs', swagger.serve, swagger.setup(swaggerjson) )

const listLivroController = new ListLivroController();

routes.get('/livros', (req, resp) => listLivroController.index(req, resp));
routes.get('/livro/:nome', (req, resp) => listLivroController.listarLivrosNome(req, resp));

const listPeriodicoController = new ListPeriodicoController();

routes.get('/periodicos', (req, resp) => listPeriodicoController.index(req, resp));
routes.get('/periodico/:nome', (req, resp) => listPeriodicoController.listarPeriodicosNome(req, resp));

routes.post('/sessionFuncionario', (req, resp) => SessionFuncionarioController.create(req, resp));

routes.use(ValidarTokenSessao);

const createAlunoController = new CreateAlunoController();
const listAllAlunoController = new ListAllAlunoController();
const updateAlunoController = new UpdateAlunoController();
const deleteAlunoController = new DeleteAlunoController();

routes.post('/aluno', alunoValidator, (req, resp) => createAlunoController.create(req, resp));
routes.get('/alunos', (req, resp) => listAllAlunoController.index(req, resp));
routes.get('/aluno/:matricula', (req, resp) => listAllAlunoController.listarAlunoMatricula(req, resp));
routes.put('/aluno/:matricula', (req, resp) => updateAlunoController.atualizar(req, resp));
routes.delete('/aluno/delete/:matricula', (req, resp) => deleteAlunoController.delete(req, resp));


const listAllFuncionarioController = new ListAllFuncionarioController();
const updateFuncionarioController = new UpdateFuncionarioController();
const deleteFuncionarioController = new DeleteFuncionarioController();
const createFuncionarioController = new CreateFuncionarioController();

routes.post('/funcionario', funcionarioValidator, (req, resp) => createFuncionarioController.create(req, resp));
routes.get('/funcionarios', (req, resp) => listAllFuncionarioController.index(req, resp));
routes.get('/funcionario/:matricula', (req, resp) => listAllFuncionarioController.listarFuncionariosMatricula(req, resp));
routes.put('/funcionario/:matricula', (req, resp) => updateFuncionarioController.update(req, resp));
routes.delete('/funcionario/delete/:matricula', (req, resp) => deleteFuncionarioController.delete(req, resp));

const createLivroController = new CreateLivroController();
const updateLivroController = new UpdateLivroController();
const deleteLivrosController = new DeleteLivrosController();

routes.post('/livro', livroValidator, (req, resp) => createLivroController.create(req, resp));
routes.put('/livro/:id', (req, resp) => updateLivroController.update(req, resp));
routes.delete('/livro/delete/:id', (req, resp) => deleteLivrosController.delete(req, resp));

const createPeriodicoController = new CreatePeriodicoController();
const updatePeriodicoController = new UpdatePeriodicoController();
const deletePeriodicoController = new DeletePeriodicoController();

routes.post('/periodico', periodicoValidator, (req, resp) => createPeriodicoController.create(req, resp));
routes.put('/periodico/:id', (req, resp) => updatePeriodicoController.update(req, resp));
routes.delete('/periodico/delete/:id', (req, resp) => deletePeriodicoController.delete(req, resp));

//Rota para emprestimo
const emprestimoController = new EmprestimoController();
const createEmprestimoController = new CreateEmprestimoController();
const entregaEmprestimoController = new EntregaEmprestimoController()

routes.put('/emprestimo/:id', (req, resp) => emprestimoController.emprestimo(req, resp));
routes.post('/emprestimo', (req, resp) => createEmprestimoController.create(req, resp));
routes.put('/devolucao', (req, resp) => entregaEmprestimoController.devolucaoLivro(req, resp));

//routes.post('/sessionAluno', (req, resp) => SessionAlunoController.create(req, resp));

export default routes;
