import CreateLivroService from '../../services/livro/CreateLivroService'

class CreateLivroController{
    constructor() {
        this.service = new CreateLivroService();

    }

    create(request, response){
        const {isbn, nome, autor, coautor, editora, anoLancamento, edicao} = request.body;

        const livro = this.service.createLivro(isbn, nome, autor, coautor, editora, anoLancamento, edicao);

        return response.status(200).json(livro);
    }
}

export default CreateLivroController