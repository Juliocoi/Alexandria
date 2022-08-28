import ListFuncionarioService from '../../services/funcionario/ListFuncionarioService';

class ListAllFuncionariosControler {
    constructor (){
        this.service = new ListFuncionarioService();
    };

    index(request, response) {

        const listarFuncionarios = this.service.listaFuncionarioService();

        return response.status(200).json(listarFuncionarios);
    };

    listarFuncionariosNome(request, response) {
        const { nome } = request.query;

        if (!nome) {
            return response.status(400).json({ 'Erro': 'Você precisa indicar um nome' });
        }

        const funcionario = this.service.listaFuncionarioDados(nome);

        return response.status(200).json(funcionario);
    }


};

export default ListAllFuncionariosControler;