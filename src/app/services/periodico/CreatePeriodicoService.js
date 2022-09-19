import ModelPeriodico from '../../models/catalogo/ModelPeriodico';
import { v4 } from 'uuid';

class CreatePeriodicoService{
    constructor(){}

    async createPeriodico(issn, nome, anoLancamento, edicao, editora, estante, palavraChave){
        try{
        const newPeriodico = await ModelPeriodico.create({id: v4(), issn, nome, anoLancamento, edicao, editora, estante, palavraChave});
        
        return newPeriodico;
        
    }   catch(error){
            console.log(error);
            return { erro: error.message };
        }       
    }
}

export default CreatePeriodicoService;