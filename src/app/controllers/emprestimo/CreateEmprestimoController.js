import CreateEmprestimoService from "../../services/emprestimo/CreateEmprestimoService";
import UpdateLivroService from '../../services/livro/UpdateLivroService';
import ListLivroService from '../../services/livro/ListLivroService';
import ModelLivro from "../../models/catalogo/ModelLivro";


class EmprestimoController{
    constructor(){
        this.service = new CreateEmprestimoService();
        this.update = new UpdateLivroService();
        this.listService = new ListLivroService();
        //this.model = new ModelLivro()
    };

    async updateDisponibilidade(req, resp){
        const { id, disponivel } = req.body;
        console.log(disponivel);

        const livro = await this.listService.listaLivroId(id);

        if(mudaDisponivel.disponivel === true){
            return 
        }
    }

    async create(req, resp){
        const { alunoId, funcionarioId, livroId, dataEmprestimo, estimativaEntrega } = req.body;

        const emprestimo = await this.service.createEmprestimo(alunoId, funcionarioId, livroId, dataEmprestimo, estimativaEntrega);

        return resp.status(200).json(emprestimo);

    }
}
export default EmprestimoController;
