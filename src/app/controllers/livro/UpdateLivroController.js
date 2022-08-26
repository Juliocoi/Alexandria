const UpdateLivroService = require('../../services/livro/UpdateLivroService');

class UpdateLivroController{

    atualizar(request, response){
        const { isbn } = request.params;

        const { nome, autor, coautor, editora, anoLancamento, edicao } = request.body;

        const atualizacao = UpdateLivroService.atualizar(isbn, nome, autor, coautor, editora, anoLancamento, edicao)

        response.json(atualizacao)
    }
}

export default UpdateLivroController