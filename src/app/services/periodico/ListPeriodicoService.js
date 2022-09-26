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

   async listaPeriodicoDados(nome){
    try{
        const periodico = await ModelPeriodico.findOne({where: { nome: nome }});
        
        return periodico;
        
    } catch(error){
        console.log(error);
        return { erro: error.message };

    }    
  }
}

export default Periodicos;
