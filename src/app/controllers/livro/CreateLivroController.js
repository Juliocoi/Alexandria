const CreateLivroService = require('../../services/livro/CreateLivroService')

class CreateLivroController{
    constructor() {}

    create(request, response){
        const {isbn, nome, autor, coautor, editora, anoLancamento, edicao} = request.body;

        const livro = CreateLivroService.createLivro(isbn, nome, autor, coautor, editora, anoLancamento, edicao);

        return response.status(200).json(livro);
    }
}

export default CreateLivroController