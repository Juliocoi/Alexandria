import ListPeriodicoService from '../../services/periodico/ListPeriodicoService';

class listPeriodicoController {
    constructor (){
        this.service = new ListPeriodicoService();
    };

    async index(request, response) {

        const listarPeriodicos = await this.service.listaPeriodicoService();

        return response.status(200).json(listarPeriodicos);
    };

    async listarPeriodicosNome(request, response) {
        const { nome } = request.params;

        if (!nome) {
            return response.status(404).json({ 'Erro': 'Você precisa indicar um nome válido.' });
        }

        const periodico = await this.service.listaPeriodicoDados(nome);

        return response.status(200).json(periodico);
    }


};

export default listPeriodicoController;