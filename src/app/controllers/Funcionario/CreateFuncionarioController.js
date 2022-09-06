import CreateFuncionarioService from '../../services/funcionario/CreateFuncionarioService';

class CreateFuncionarioController{
    constructor() {

        this.service = new CreateFuncionarioService();
    };

    async create(request, response) {
        
        const { nome, email, dataDeNascimento, mae, pai, matricula } = request.body;

        const funcionario = await this.service.createFuncionario(nome, email, dataDeNascimento, mae, pai, matricula);

        return response.status(200).json(funcionario);
    };

}

export default CreateFuncionarioController;