import ModelLivro from "../../models/catalogo/ModelLivro";
import ModelEmprestimo from "../../models/emprestimo/ModelEmprestimo";

class EntregaEmprestimoService {
  constructor() {};

  async entrega(alunoId, livroId) {
    //Pega o último registro da tabela empréstimo, considerando os parametros passados
    try {
      const emprestimo = await ModelEmprestimo.findOne({
        where: {
          alunoId,
          livroId,
          dataEntrega: null
        },
        order: [
          ['id', 'DESC'],
        ],
      });

      if (!emprestimo) {
        throw new Error("Empréstimo não localizado");
      }
      const data = new Date()
      emprestimo.dataEntrega = data;
      emprestimo.save();
      

      ModelLivro.update({ disponivel: true }, { where: { id: livroId } });

      return {message: "A devolução foi efetuada com sucesso"};
      
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}
export default EntregaEmprestimoService;