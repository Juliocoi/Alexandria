import CreatePeriodicoService from '../../services/periodico/CreatePeriodicoService';

class CreatePeriodicoController {

    constructor(){
        this.service = new CreatePeriodicoService();
    };

    async create(request, response) {

        const { issn, anoLancamento, nome, edicao, editora, estante } = request.body;

        const createPeriodico = await this.service.createPeriodico(issn, anoLancamento, nome, edicao, editora, estante);

        return response.status(200).json(createPeriodico);

    }

};

export default CreatePeriodicoController;