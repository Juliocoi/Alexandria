import ListLivroService from '../../services/livro/ListLivroService';

class ListLivroController{
    constructor(){}

    listAll(request, response){
        const listarLivros = ListLivroService.listaLivroService();
        response.json(listarLivros);
    }
}

export default ListLivroController;