import DeleteFuncionarioService from '../../services/funcionario/DeleteFuncionarioService'

class DeleteFuncionarioController {

  constructor() {
    this.service = new DeleteFuncionarioService();
  };

  async delete(request, response) {
    const { matricula } = request.params;

    // if (!matricula) {
    //   return response.status(404).json({ 'Erro': "Você precisa indicar uma matrícula válida1." });
    // }

    const deletado = await this.service.delete(matricula);

    return response.status(200).json({ Mensagem: "Funcionário deletado com sucesso" });
  }
}

export default DeleteFuncionarioController;