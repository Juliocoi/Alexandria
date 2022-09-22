import ModelLivro from '../../models/catalogo/ModelLivro';

class AtualizarEmprestimoService {
    constructor(){}
    
    async emprestimo(id, disponivel){
        try{
        const livro = await ModelLivro.findByPk(id);

        if(!livro){
            return { mensagem: "Livro não registrado." }
        }

        const [livroStatus] = await ModelLivro.update(
            { disponivel }, 
            { where: {id} }
		);

        if (livroStatus === 0){
                return { mensagem: "Este livro não está diponivel para emprestimo" };
        } else {
            return { 
                mensagem:"Emprestimo realizado!" };
        }       

      } catch(error) {
        console.log(error);
        return { erro: error.message };
      }
    }
}

export default AtualizarEmprestimoService;