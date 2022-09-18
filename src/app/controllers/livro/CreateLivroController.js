import CreateLivroService from '../../services/livro/CreateLivroService'

class CreateLivroController{
    constructor() {
        this.service = new CreateLivroService();

    }

    async create(request, response){
        const {isbn, nome, autor, anoLancamento,coautor, edicao, editora, estante, disponivel, palavraChave} = request.body;

        const livro = await this.service.createLivro(isbn, nome, autor, anoLancamento,coautor, edicao, editora, estante, disponivel, palavraChave);

        return response.status(200).json(livro);
    }
}

export default CreateLivroController