import ListLivroService from './ListLivroService';

class DeleteLivroService{
    constructor(){
        this.service = new ListLivroService();
    }

    delete(isbn){
        const livros = this.service.listaLivroService();
        
        const livroIndex = livros.findIndex(item => item.isbn === Number(isbn));

        if (livroIndex === -1){
            return { Erro: 'Livro não encontrado'}
        }

        livros.splice(livroIndex, 1);

        return { Mensagem: 'Livro removido com sucesso' }
    }

}

export default DeleteLivroService