import ModelLivro from '../../models/catalogo/ModelLivro';
class AtualizarEmprestimoService {
    constructor(){}
    
    async emprestimo(id, disponivel){
        try{

        const livro = await ModelLivro.findByPk(id);

            console.log(livro);

        if(!livro){
            return { mensagem: "Livro não registrado." }
        }

        const [livroStatus] = await ModelLivro.update(
            { disponivel }, 
            { where: {id} }
		);
        

        // if (livro.getDataValue('disponivel') === 0){
        //         return { mensagem: "Este livro não está diponivel para emprestimo" };
        // } else {
        // }       
        return { disponivel };
        
      } catch(error) {
        console.log(error);
        return { erro: error.message };
      }
    }
}

export default AtualizarEmprestimoService;