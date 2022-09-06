import DeleteAlunoService from '../../services/aluno/DeleteAlunoService';

class DeleteAlunoController{
    
    constructor(){
        this.service = new DeleteAlunoService()
    };

    async delete(request, response) {
        const { matricula } = request.params

        const resultado = await this.service.delete(matricula)
        return response.status(200).send(resultado);
    }
}

export default DeleteAlunoController;