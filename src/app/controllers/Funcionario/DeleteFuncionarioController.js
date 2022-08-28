import DeleteFuncionarioService from '../../services/funcionario/DeleteFuncionarioService'

class DeleteFuncionarioController {

    constructor() {

        this.service = new DeleteFuncionarioService();
    };

    delete(request, response){
        const { id } = request.params;

        const deletado = this.service.delete(id);

        return response.send(` Funcionário ${deletado} excluído com sucesso`);
    }
}

export default DeleteFuncionarioController;