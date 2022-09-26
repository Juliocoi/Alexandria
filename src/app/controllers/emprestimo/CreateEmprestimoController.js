import CreateEmprestimoService from "../../services/emprestimo/CreateEmprestimoService";

class EmprestimoController {
  constructor() {
    this.service = new CreateEmprestimoService();
  };
  
  async create(req, resp) {
    const { alunoId, funcionarioId, livroId, dataEmprestimo, estimativaEntrega } = req.body;

    const emprestimo = await this.service.createEmprestimo(alunoId, funcionarioId, livroId, dataEmprestimo, estimativaEntrega);

    return resp.status(201).json(emprestimo);

  };
}
export default EmprestimoController;
