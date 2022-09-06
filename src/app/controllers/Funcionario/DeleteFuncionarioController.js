import DeleteFuncionarioService from '../../services/funcionario/DeleteFuncionarioService'

class DeleteFuncionarioController {

    constructor() {
        this.service = new DeleteFuncionarioService();
    };

    async delete(request, response){
        const { matricula } = request.params;

        const deletado = await this.service.delete(matricula);

        return response.send(` Funcionário ${deletado} excluído com sucesso`);
    }
}

export default DeleteFuncionarioController;