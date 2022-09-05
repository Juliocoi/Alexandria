import UpdateFuncionarioService from '../../services/funcionario/UpdateFuncionarioService';

class UpdateFuncionarioController {

    constructor (){
        this.service = new UpdateFuncionarioService()
    }

    async update(request, response) {
        const { matricula } = request.params;

        const { id, nome, email, dataDeNascimento, mae, pai} = request.body;

        const atualizacaoFunc = await this.service.atualizar(id, nome, email, dataDeNascimento, mae, pai);

        return response.status(200).json(atualizacaoFunc);
    };
}

export default UpdateFuncionarioController;