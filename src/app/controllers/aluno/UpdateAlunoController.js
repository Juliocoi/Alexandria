import AtualizarAlunoService from '../../services/aluno/AtualizarAlunoService';

class AtualizarAlunoController {

    constructor() {
        this.service = new AtualizarAlunoService();
    };

    async atualizar(request, response) {
        const { matricula } = request.params;

        const { id, nome, email, dataDeNascimento, mae, pai } = request.body;

        const atualizacao = await this.service.atualizar(nome, email, dataDeNascimento, mae, pai);

        response.status(200).json(atualizacao);
    }

}

export default AtualizarAlunoController;