import listaPeriodicoService from '../../services/periodico/ListPeriodicoService';

class listPeriodicoController {
    constructor (){
        this.service = new listaPeriodicoService();
    };

    async index(request, response) {

        const listarPeriodicos = await this.service.listaPeriodicoService();

        return response.status(200).json(listarPeriodicos);
    };

    async listarPeriodicosNome(request, response) {
        const { nome } = request.query;

        if (!nome) {
            return response.status(400).json({ 'Erro': 'Você precisa indicar um nome' });
        }

        const periodico = await this.service.listaPeriodicoDados(nome);

        return response.status(200).json(periodico);
    }


};

export default listPeriodicoController;