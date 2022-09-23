import UpdateLivroService from '../../services/livro/UpdateLivroService'

class EmprestimoController {
    constructor (){
        this.service = new UpdateLivroService();
    };

    async emprestimo(request, response) {
        const { id } = request.params;

        const { isbn, nome, autor, anoLancamento, coautor, edicao, editora, estante, disponivel, palavraChave } = request.body;

        const emprestimo = await this.service.atualizar(id, isbn, nome, autor, anoLancamento, coautor, edicao, editora, estante, disponivel, palavraChave);

        return response.status(200).json(emprestimo);
    }
}

export default EmprestimoController;
