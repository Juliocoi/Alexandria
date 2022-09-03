import ModelPeriodico from "../../models/catalogo/ModelPeriodico";

class UpdatePeriodico{
    constructor(){}

    async atualizar(id, nome, edicao, editora, estante, issn, anoLancamento){
        try{
            const periodico = await ModelPeriodico.findByPk(id);
            
            if (!periodico) {
                return { mensagem: "Periódico não encontrado" };
              } 
              
            const [numeroDeRegistrosAtualizados] = await ModelPeriodico.update({
              nome, 
              edicao, 
              editora, 
              estante, 
              issn, 
              anoLancamento
            },
            {
                where: { id },
                });

              if (numeroDeRegistrosAtualizados === 0) {
                return { mensagem: "Dados iguais, não houve atualização" };
              } else {
                return {
                    id, nome, edicao, editora, estante, issn, anoLancamento
                };
              }
        } 
        catch (error){
            console.log(error);
            return {message: error.message};
        }
    }
}

export default UpdatePeriodico;