import ModelPeriodico from "../../models/catalogo/ModelPeriodico";

class UpdatePeriodico{
    constructor(){}

    async atualizar(id, issn, anoLancamento, nome, edicao, editora, estante){
        try{
            const periodico = await ModelPeriodico.findByPk(id);
            
            if (!periodico) {
                return { mensagem: "Periódico não encontrado" };
              } 
              
            const [numeroDeRegistrosAtualizados] = await ModelPeriodico.update({
                issn, 
                anoLancamento, 
                nome, 
                edicao, 
                editora, 
                estante
            },
            {
                where: { id },
                });

              if (numeroDeRegistrosAtualizados === 0) {
                return { mensagem: "Dados iguais, não houve atualização" };
              } else {
                return {
                    id, issn, anoLancamento, nome, edicao, editora, estante
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