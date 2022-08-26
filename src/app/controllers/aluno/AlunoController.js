const CreateAlunoService = require('../../services/aluno/CreateAlunoService');
const ListaAlunoService = require('../../services/aluno/ListAlunoService');
const AtualizarAlunoService = require('../../services/aluno/AtualizarAlunoService');
const DeleteAlunoService = require('../../services/aluno/DeleteAlunoService');

const Controller = {

    index: (request, response) => {
        const listarAlunos = ListaAlunoService.listaAlunoService();
        response.json(listarAlunos);
    },

    listarAlunosNome: (request, response) => {
        
        const { nome } = request.query;
        
        if (!{ nome }) {
            return response.status(400).json({'Erro': 'Você precisa indicar um nome válido'});
        }
        
        const aluno = ListaAlunoService.listaAlunoDados(nome);

        return response.status(200).json(aluno);
    },

    create: (request, response) => {
        const { matricula, nome, mae, pai, email, dataDeNascimento } = request.body;

        const aluno = CreateAlunoService.createAluno(matricula, nome, mae, pai, email, dataDeNascimento);

        return response.status(200).json(aluno);

    },

    atualizar: (request, response) => {
        const { matricula } = request.params;

        const { nome, mae, pai, email, dataDeNascimento } = request.body;

        const atualizacao = AtualizarAlunoService.atualizar(matricula, nome, mae, pai, email, dataDeNascimento) 

        response.json(atualizacao)
    },

    delete: (request, response) => {
        const { matricula } = request.params
    
        const resultado = DeleteAlunoService.delete(matricula)
    
        response.send(resultado)
    }

}



module.exports = Controller






