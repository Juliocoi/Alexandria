import AtualizarAlunoService from '../../services/aluno/AtualizarAlunoService';

class AtualizarAlunoController {

    constructor() {
        this.service = new AtualizarAlunoService();
    };

    atualizar(request, response) {
        const { matricula } = request.params;

        const { nome, mae, pai, email, dataDeNascimento } = request.body;

        const atualizacao = AtualizarAlunoService.atualizar(matricula, nome, mae, pai, email, dataDeNascimento)

        response.status(200).json(atualizacao)
    }


}

export default AtualizarAlunoController;