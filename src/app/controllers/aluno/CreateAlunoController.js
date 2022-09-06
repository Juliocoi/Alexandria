import CreateAlunoService from '../../services/aluno/CreateAlunoService';

class CreateAlunoController {

    constructor(){
        this.service = new CreateAlunoService();
    };

    async create(request, response) {
        const { nome, email, dataDeNascimento, mae, pai, matricula } = request.body;

        const createAluno = await this.service.createAluno(nome, email,dataDeNascimento, mae, pai, matricula);
        return response.status(200).json(createAluno);

    }

};

export default CreateAlunoController;