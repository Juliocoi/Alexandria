import AtualizarAlunoService from '../../services/aluno/AtualizarAlunoService';

class AtualizarAlunoController {

    constructor() {
        this.service = new AtualizarAlunoService();
    };

    async atualizar(request, response) {
        const { matricula } = request.params;

        const { nome, mae, pai, email, dataDeNascimento } = request.body;

        const atualizacao = await this.service.atualizar(nome, mae, pai, email, dataDeNascimento, matricula);

        response.status(200).json(atualizacao);
    }

}

export default AtualizarAlunoController;