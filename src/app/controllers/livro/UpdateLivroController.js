import UpdateLivroService from '../../services/livro/UpdateLivroService';

class UpdateLivroController{
    constructor(){
        this.service = new UpdateLivroService();
    }

    atualizar(request, response){
        const { isbn } = request.params;

        const { nome, autor, coautor, editora, anoLancamento, edicao } = request.body;

        const atualizacao = this.service.atualizar(isbn, nome, autor, coautor, editora, anoLancamento, edicao)

        response.json(atualizacao);
    }
}

export default UpdateLivroController