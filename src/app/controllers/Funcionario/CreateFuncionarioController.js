import CreateFuncionarioService from '../../services/funcionario/CreateFuncionarioService';

class CreateFuncionarioController{
    constructor() {

        this.service = new CreateFuncionarioService();
    };

    create(request, response) {
        
        const { matricula, nome, mae, pai, email, dataDeNascimento } = request.body;

        const funcionario = this.service.createFuncionario(matricula, nome, mae, pai, email, dataDeNascimento);

        return response.status(200).json(funcionario);
    };

}

export default CreateFuncionarioController;