import UpdateFuncionarioService from '../../services/funcionario/UpdateFuncionarioService';

class UpdateFuncionarioController {

    constructor (){
        this.service = new UpdateFuncionarioService()
    }

    update(request, response) {
        const { id } = request.params;

        const { matricula, nome, mae, pai, email, dataDeNascimento } = request.body;

        const atualizacaoFunc = this.service.atualizar(id, matricula, nome, mae, pai, email, dataDeNascimento);

        return response.status(200).json(atualizacaoFunc);
    };
}

export default UpdateFuncionarioController;