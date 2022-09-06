import ListAlunoService from '../../services/aluno/ListAlunoService';

class ListAlunoController {

    constructor() {
        this.service = new ListAlunoService();
    };

    async index(request, response) {
        const listarAlunos = await this.service.listaAlunoService();
        return response.status(200).json(listarAlunos);
    }

    async listarAlunosNome(request, response) {
        const { nome } = request.query;

        if (!nome ) {
            return response.status(400).json({ Erro: 'Você precisa indicar um nome válido' });
        }

        const aluno = await this.service.listaAlunoDados(nome);
        return response.status(200).json(aluno);
    }

};

export default ListAlunoController;