import ListFuncionarioService from '../../services/funcionario/ListFuncionarioService';

class ListAllFuncionariosControler {
  constructor() {
    this.service = new ListFuncionarioService();
  };

  async index(request, response) {

    const listarFuncionarios = await this.service.listaFuncionarioService();

    return response.status(200).json(listarFuncionarios);
  };

  async listarFuncionariosMatricula(request, response) {
    const { matricula } = request.params;

    if (!matricula) {
      return response.status(400).json({ 'Erro': "Você precisa indicar uma matrícula válida." });
    }

    const funcionario = await this.service.listaFuncionarioMatricula(matricula);

    return response.status(200).json(funcionario);
  }


};

export default ListAllFuncionariosControler;