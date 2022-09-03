import UpdatePeriodicoService from "../../services/periodico/UpdatePeriodicoService";

class UpdatePeriodicoController{
    constructor(){
        this.service = new UpdatePeriodicoService();
    }

    async update(request, response){
        const { id } = request.params;

        const { issn, anoLancamento, nome, edicao, editora, estante } = request.body;

        const atualizacao = await this.service.atualizar(id, issn, anoLancamento, nome, edicao, editora, estante);

        return response.json(atualizacao);
    }
}

export default UpdatePeriodicoController;