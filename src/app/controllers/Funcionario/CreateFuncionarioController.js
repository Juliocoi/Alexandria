import CreateFuncionarioService from '../../services/funcionario/CreateFuncionarioService';

class CreateFuncionarioController{
    constructor() {

        this.service = new CreateFuncionarioService();
    };

    async create(request, response) {
        
        const {matricula, senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario } = request.body;
        
        const funcionario = await this.service.createFuncionario(matricula, senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario);

        return response.status(200).json(funcionario);
    };

}

export default CreateFuncionarioController;