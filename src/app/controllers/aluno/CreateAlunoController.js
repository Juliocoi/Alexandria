import CreateAlunoService from '../../services/aluno/CreateAlunoService';

class CreateAlunoController {

    constructor(){
        this.service = new CreateAlunoService();
    };

    create(request, response) {

        const { matricula, nome, mae, pai, email, dataDeNascimento } = request.body;

        const createAluno = this.service.createAluno(matricula, nome, mae, pai, email, dataDeNascimento);

        return response.status(200).json(createAluno);

    }

};

export default CreateAlunoController;