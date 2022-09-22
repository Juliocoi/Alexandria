import AtualizarEmprestimoService from "../../services/emprestimo/AtualizarEmprestimoService";

class EmprestimoController {
    constructor (){
        this.service = new AtualizarEmprestimoService();
    };

    async emprestimo(request, response) {
        const { id } = request.params;

        const { disponivel } = request.body;

        const emprestimo = await this.service.emprestimo(disponivel);

        response.status(200).json(emprestimo);
    }
}

export default EmprestimoController;
