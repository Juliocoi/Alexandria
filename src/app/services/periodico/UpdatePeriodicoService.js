import ModelPeriodico from "../../models/catalogo/ModelPeriodico";
class UpdatePeriodico{
    constructor(){}

    async atualizar(id, issn, nome, anoLancamento, edicao, editora, estante, palavraChave){
        try{
            const periodico = await ModelPeriodico.findByPk(id);
            
            if (!periodico) {
                return { mensagem: "Periódico não encontrado" };
              } 
              
            const [periodicosAtualizados] = await ModelPeriodico.update({
               issn, nome, anoLancamento, edicao, editora, estante, palavraChave
            }, {where: {id}})

      if (periodicosAtualizados === 0) {
          return { mensagem: "As alterações prentendidas já existem em nosso servidor" };
          } else {
                return {
                  issn, nome, anoLancamento, edicao, editora, estante, palavraChave
                };
              }
        } 
        catch (error){
            console.log(error);
            return {erro: error.message};
        }
    }
}

export default UpdatePeriodico;