import ListAlunoService from '../../services/aluno/ListAlunoService';

class ListAlunoController {

    constructor() {
        this.service = new ListAlunoService();
    };

    async index(request, response) {
        const listarAlunos = await this.service.listaAlunoService();
        return response.status(200).json(listarAlunos);
    };Y

    async listarAlunoMatricula(request, response){
        const { matricula } = request.params;

        if(!matricula){
            return response.status(404).json({ Erro: 'Você precisa indicar uma matrícula válida.'})
        }

        const aluno = await this.service.listaAlunoMatricula(matricula)

        return response.status(200).json(aluno);
    };
    
    async listarAlunosNome(request, response) {
        const { nome } = request.params;
        
        if (!nome) {
            return response.status(404).json({ Erro: 'Você precisa indicar uma nome válido.' })
        }

        const aluno = await this.service.listaAlunoDados(nome);
        return response.status(200).json(aluno);
    }


};

export default ListAlunoController;
