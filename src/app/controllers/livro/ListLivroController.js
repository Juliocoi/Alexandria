import ListLivroService from '../../services/livro/ListLivroService';

class ListLivroController{
    constructor(){
        this.service = new ListLivroService();
    }

    async index(request, response){
        const listarLivros = await this.service.listaLivroService();
        return response.status(200).json(listarLivros);
    };

    async listarLivrosNome(request,response){
        const { nome } = request.params;

        if (!nome) {
            return response.status(400).json({ Erro: 'Você precisa indicar um nome válido' });
        }

        const livro = await this.service.listaLivroNome(nome);

        return response.status(200).json(livro);
    }
}

export default ListLivroController;