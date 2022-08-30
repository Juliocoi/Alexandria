import DeleteLivroService from '../../services/livro/DeleteLivroService';


class DeleteLivroController{

    constructor(){
        this.service = new DeleteLivroService();
    }

    delete(request, response) {
        const { isbn } = request.params;

        const resultado = this.service.delete(isbn);

        response.status(200).send(resultado);
    }
}

export default DeleteLivroController