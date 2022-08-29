import DeleteLivroService from '../../services/livro/DeleteLivroService';


class DeleteLivroController{

    constructor(){};

    delete(request, response) {
        const { isbn } = request.params;

        const resultado = DeleteLivroService.delete(isbn);

        response.status(200).send(resultado);
    }
}

export default DeleteLivroController