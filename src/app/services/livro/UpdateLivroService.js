import ListLivroService from '../../services/livro/ListLivroService'

class AtualizarLivro{
    constructor(){
        this.service = new ListLivroService()
    }

    atualizar(isbn, nome, autor, coautor, editora, anoLancamento, edicao){
        
        const livros = this.service.listaLivroService();

        const IndexISBNLivro = livros.findIndex(item => item.isbn === Number(isbn));

        if(IndexISBNLivro === -1){
            return {'Erro': 'Livro não encontrado em nosso banco de dados'}
        }

        livros[IndexISBNLivro] = {
            nome, autor, coautor, editora, anoLancamento, edicao
        }

        return {
            isbn,
            ...livros[IndexISBNLivro]
        }
    }
}

export default AtualizarLivro