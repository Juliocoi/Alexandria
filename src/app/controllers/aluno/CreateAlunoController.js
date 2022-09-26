import CreateAlunoService from '../../services/aluno/CreateAlunoService';
class CreateAlunoController {

    constructor(){
        this.service = new CreateAlunoService();
    };

    async create(request, response) {
        
        const { matricula, senha, nome, email, dataDeNascimento, mae, pai} = request.body;

        const aluno = await this.service.createAluno(matricula, senha, nome, email, dataDeNascimento, mae, pai);
        
        return response.status(201).json(aluno);
    }

};

export default CreateAlunoController;
