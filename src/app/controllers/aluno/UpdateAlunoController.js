import AtualizarAlunoService from '../../services/aluno/AtualizarAlunoService';
class AtualizarAlunoController {
    constructor() {
        this.service = new AtualizarAlunoService();
    };

    async atualizar(request, response) {
        const { matricula } = request.params;

        const { senha, nome, email, dataDeNascimento, mae, pai } = request.body;

        const atualizacao = await this.service.atualizar(matricula, senha, nome, email, dataDeNascimento, mae, pai);

        response.status(201).json(atualizacao);
    }
}

export default AtualizarAlunoController;
