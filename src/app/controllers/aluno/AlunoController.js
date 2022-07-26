const CreateAlunoService = require('../../services/aluno/CreateAlunoService')
const ListaAlunoService = require('../../services/aluno/ListAlunoService')

const Controller = {

    index: (request, response) => {
        const listarAlunos = ListaAlunoService.listaAlunoService()
        response.json(listarAlunos)
    },

    listarAlunosNome: (request, response) => {
        
        const { nome } = request.query;
        
        if (!nome) {
            return response.status(400).json({'Erro': 'Você precisa indicar um nome válido'});
        }
        
        const aluno = ListaAlunoService.listaAlunoDados(nome);

        if(aluno === undefined){
            return response.status(404).json({'Erro': 'Aluno não localizado em nossa base de dados'});
        }

        return response.status(200).json(aluno);
    },

    create: (request, response) => {
        const { nome, mae, pai, email, matricula, dataDeNascimento } = request.body;

        const aluno = CreateAlunoService.createAluno(nome, mae, pai, email, matricula, dataDeNascimento);

        return response.json(aluno)

    }

}



module.exports = Controller






