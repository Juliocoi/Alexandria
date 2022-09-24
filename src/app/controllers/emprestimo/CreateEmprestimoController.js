import CreateEmprestimoService from "../../services/emprestimo/CreateEmprestimoService";

class EmprestimoController {
  constructor() {
    this.service = new CreateEmprestimoService();
  };

  // async updateDisponibilidade(req, resp){
  //     const { id, disponivel } = req.body;
  //     console.log(disponivel);

  //     const livro = await this.listService.listaLivroId(id);

  //     if(mudaDisponivel.disponivel === true){
  //         return 
  //     }
  // }

  async create(req, resp) {
    const { alunoId, funcionarioId, livroId, dataEmprestimo, estimativaEntrega } = req.body;

    const emprestimo = await this.service.createEmprestimo(alunoId, funcionarioId, livroId, dataEmprestimo, estimativaEntrega);

    return resp.status(200).json(emprestimo);

  };
}
export default EmprestimoController;
