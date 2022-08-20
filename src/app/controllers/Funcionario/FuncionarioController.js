const ListaFuncionarioService = require('../../services/funcionario/ListFuncionarioService');
const CreateFuncionarioService = require('../../services/funcionario/CreateFuncionarioService');
const AtualizarAlunoService = require('../../services/funcionario/UpdateFuncionarioService');


const Controller = {

    index: (request, response) => {
        const listarFuncionarios = ListaFuncionarioService.listaFuncionarioService();
        response.json(listarFuncionarios);
    },

    listarFuncionariosNome: (request, response) =>{
        const { nome } = request.query;

        if(!nome) {
            return response.status(400).json({'Erro': 'Você precisa indicar um nome válido'});
        }

        const funcionario = ListaFuncionarioService.listaFuncionarioDados(nome);

        return response.status(200).json(funcionario);
    },
    
    create: (request, response) => {
        const {matricula, nome, mae, pai, email, dataDeNascimento} = request.body;

        const funcionario = CreateFuncionarioService.createFuncionario(matricula, nome, mae, pai, email, dataDeNascimento);

        return response.status(200).json(funcionario);
    },

    atualizar: (request, response) => {
        const { matricula } = request.params;

        const { nome, mae, pai, email, dataDeNascimento } = request.body;

        const atualizacao = AtualizarAlunoService.atualizar(matricula, nome, mae, pai, email, dataDeNascimento)

        response.json(atualizacao)
    }



}

module.exports = Controller



