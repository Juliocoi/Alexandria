import ListLivroService from '../../services/livro/ListLivroService';

class ListLivroController{
    constructor(){
        this.service = new ListLivroService();
    }

    listAll(request, response){
        const listarLivros = this.service.listaLivroService();
        response.json(listarLivros);
    }

    listarLivrosNome(request,response){
        const { nome } = request.query;

        if (!{ nome }) {
            return response.status(400).json({ Erro: 'Você precisa indicar um nome válido' });
        }

        const livro = this.service.listaLivroNome(nome);

        return response.status(200).json(livro);
    }
}

export default ListLivroController;