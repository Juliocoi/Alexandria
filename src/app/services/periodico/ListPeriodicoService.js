import ModelPeriodico from "../../models/catalogo/ModelPeriodico";

class Periodicos {
    constructor(){};

   async listaPeriodicoService(){
    try{
        const periodicos = await ModelPeriodico.findAll();

    return periodicos;

    } catch(error){
        console.log(error);
        return { erro: error.message };
    }
}

   async listaPeriodicoDados(periodicoNome){
    try{
        const periodico = await ModelPeriodico.findOne({where: { nome: periodicoNome }});

        if(!periodico){
            return { message: 'Periodico não encontrado'}
        }

        return periodico;
        
    } catch(error){
        console.log(error);
        return { erro: error.message };

    }    
  }
}

export default Periodicos;