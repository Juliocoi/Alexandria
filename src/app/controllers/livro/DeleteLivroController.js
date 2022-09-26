import DeleteLivroService from '../../services/livro/DeleteLivroService';

class DeleteLivroController{

    constructor(){
        this.service = new DeleteLivroService();
    }

    async delete(request, response) {
        const { id } = request.params;

        if (!id) {
            return response.status(404).json({Mensagem: "Livro não localizado."})
        };

        const deletado = await this.service.delete(id);

        return response.status(200).json(deletado);
    }
}

export default DeleteLivroController