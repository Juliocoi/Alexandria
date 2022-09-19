import ListFuncionarioService from '../../services/funcionario/ListFuncionarioService';

class ListAllFuncionariosControler {
    constructor (){
        this.service = new ListFuncionarioService();
    };

    async index(request, response) {

        const listarFuncionarios = await this.service.listaFuncionarioService();

        return response.status(200).json(listarFuncionarios);
    };

    async listarFuncionariosNome(request, response) {
        const { nome } = request.params;

        if (!nome) {
            return response.status(400).json({ 'Erro': 'Você precisa indicar um nome' });
        }

        const funcionario = await this.service.listaFuncionarioDados(nome);

        return response.status(200).json(funcionario);
    }


};

export default ListAllFuncionariosControler;