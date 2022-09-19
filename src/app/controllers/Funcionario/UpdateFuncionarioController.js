import UpdateFuncionarioService from '../../services/funcionario/UpdateFuncionarioService';

class UpdateFuncionarioController {

    constructor (){
        this.service = new UpdateFuncionarioService()
    }

    async update(request, response) {
        const { matricula } = request.params;

        const { senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario } = request.body;

        const atualizacaoFunc = await this.service.atualizar( matricula, senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario);

        return response.status(200).json(atualizacaoFunc);
    };
}

export default UpdateFuncionarioController;