const ListLivroService = require('../../services/livro/ListLivroService');

const AtualizarLivro = {

    atualizar: (isbn, nome, autor, coautor, editora, anoLancamento, edicao) => {
        const livros = ListLivroService.listaLivroService();

        const IndexISBNLivro = livros.findIndex(item => item.isbn === Number(isbn));

        if(IndexISBNLivro === -1){
            return {'Erro': 'Livro não encontrado em nosso banco de dados'}
        }

        livros[IndexISBNLivro] = {
            isbn, nome, autor, coautor, editora, anoLancamento, edicao
        }

        return {
            isbn,
            ...livros[IndexISBNLivro]
        }
    }
}

module.exports = AtualizarLivro;