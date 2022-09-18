import ModelPeriodico from "../../models/catalogo/ModelPeriodico"
class DeletePeriodicoService{
    constructor(){};

    async delete(id){
        try{
            const periodico = await ModelPeriodico.findByPk(id);

            if (!periodico) {
                return { mensagem: "Periódico não encontrado" };
              }

              const periodicoDeletado = await periodico.destroy();

              return {mensagem: "Periódico deletado com sucesso."};
        }
        catch(error){
            console.log(error);
            return { erro: error.message };
        }
    }
}

export default DeletePeriodicoService;