import UpdatePeriodicoService from "../../services/periodico/UpdatePeriodicoService";

class UpdatePeriodicoController{
    constructor(){
        this.service = new UpdatePeriodicoService();
    }

    async update(request, response){
        const { id } = request.params;

        const { issn, nome, anoLancamento, edicao, editora, estante, palavraChave } = request.body;

        const atualizacao = await this.service.atualizar(id, issn, nome, anoLancamento, edicao, editora, estante, palavraChave);

        return response.status(200).json(atualizacao);
    }
}

export default UpdatePeriodicoController;