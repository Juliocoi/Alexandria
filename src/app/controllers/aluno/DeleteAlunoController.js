import DeleteAlunoService from '../../services/aluno/DeleteAlunoService';

class DeleteAlunoController{
    
    constructor(){};

    delete(request, response) {
        const { matricula } = request.params

        const resultado = DeleteAlunoService.delete(matricula)

        response.status(200).send(resultado);
    }
}

export default DeleteAlunoController;