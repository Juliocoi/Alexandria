import ModelPeriodico from '../../models/catalogo/ModelPeriodico';
import { v4 } from 'uuid';

class CreatePeriodicoService{
    constructor(){}

    async createPeriodico(issn, anoLancamento, nome, edicao, editora, estante){
        try{
        const newPeriodico = await ModelPeriodico.create({id: v4(), issn, anoLancamento, nome, edicao, editora, estante});
        
        return newPeriodico;
    }

        catch(error){
            console.log(error);
            return { erro: error.message };
        }       
    }
}

export default CreatePeriodicoService