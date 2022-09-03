import UpdatePeriodicoService from "../../services/periodico/UpdatePeriodicoService";

class UpdatePeriodicoController{
    constructor(){
        this.service = new UpdatePeriodicoService();
    }

    async update(request, response){
        const { id } = request.params;

        const { nome, edicao, editora, estante, issn, anoLancamento } = request.body;

        const atualizacao = await this.service.atualizar(id, nome, edicao, editora, estante, issn, anoLancamento);

        return response.json(atualizacao);
    }
}

export default UpdatePeriodicoController;