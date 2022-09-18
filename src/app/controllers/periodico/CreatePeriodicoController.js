import CreatePeriodicoService from '../../services/periodico/CreatePeriodicoService';

class CreatePeriodicoController {

    constructor(){
        this.service = new CreatePeriodicoService();
    };

    async create(request, response) {

        const { issn, nome, anoLancamento, edicao, editora, estante, palavraChave } = request.body;

        const periodico = await this.service.createPeriodico(issn, nome, anoLancamento, edicao, editora, estante, palavraChave);

        return response.status(200).json(periodico);
    };

};

export default CreatePeriodicoController;