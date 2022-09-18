import UpdateLivroService from '../../services/livro/UpdateLivroService';

class UpdateLivroController{
    constructor(){
        this.service = new UpdateLivroService();
    }

    async update(request, response){
        const { id } = request.params;

        const { isbn, nome, autor, anoLancamento,coautor, edicao, editora, estante, disponivel, palavraChave } = request.body;

        const atualizacao = await this.service.atualizar(id, isbn, nome, autor, anoLancamento,coautor, edicao, editora, estante, disponivel, palavraChave);

        return response.status(200).json(atualizacao);
    }
}

export default UpdateLivroController