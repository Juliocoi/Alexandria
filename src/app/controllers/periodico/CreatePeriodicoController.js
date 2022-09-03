import CreatePeriodicoService from '../../services/periodico/CreatePeriodicoService';

class CreatePeriodicoController {

    constructor(){
        this.service = new CreatePeriodicoService();
    };

    async create(request, response) {

        const { nome, edicao, editora, estante, issn, anoLancamento } = request.body;

        const createPeriodico = await this.service.createPeriodico(nome, edicao, editora, estante, issn, anoLancamento);

        return response.status(200).json(createPeriodico);

    }

};

export default CreatePeriodicoController;