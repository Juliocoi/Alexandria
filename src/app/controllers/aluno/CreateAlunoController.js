import CreateAlunoService from '../../services/aluno/CreateAlunoService';
class CreateAlunoController {

    constructor(){
        this.service = new CreateAlunoService();
    };

    async create(request, response) {
        const { matricula, nome, email, senha, dataDeNascimento, mae, pai} = request.body;

        const createAluno = await this.service.createAluno(matricula, nome, email, senha, dataDeNascimento, mae, pai);
        return response.status(200).json(createAluno);
    }

};

export default CreateAlunoController;
