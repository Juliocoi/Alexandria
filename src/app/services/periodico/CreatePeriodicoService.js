import ModelPeriodico from '../../models/catalogo/ModelPeriodico';
import { v4 } from 'uuid';

class CreatePeriodicoService{
    constructor(){}

    async createPeriodico(nome, edicao, editora, estante, issn, anoLancamento){
        try{
        const newPeriodico = await ModelPeriodico.create({id: v4(), nome, edicao, editora, estante, issn, anoLancamento});
        
        return newPeriodico;
    }

        catch(error){
            console.log(error);
            return { erro: error.message };
        }       
    }
}

export default CreatePeriodicoService;