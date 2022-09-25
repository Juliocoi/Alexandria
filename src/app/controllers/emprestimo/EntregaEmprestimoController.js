import EntregaEmprestimoService from "../../services/emprestimo/EntregaEmprestimoService";

class EntregaEmprestimoController {
  constructor(){
    this.service = new EntregaEmprestimoService();
  };

  async devolucaoLivro(req, resp){
    const { alunoId, livroId } = req.body;

    const devolucao = await this.service.entrega(alunoId, livroId);

    return resp.status(200).json(devolucao);
  };
}

export default EntregaEmprestimoController;