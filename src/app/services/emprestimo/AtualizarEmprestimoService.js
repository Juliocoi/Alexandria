import ModelLivro from '../../models/catalogo/ModelLivro';
//TODO ver se vai precisar manter este arquivo;
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
 
        return { disponivel };
        
      } catch(error) {
        console.log(error);
        return { erro: error.message };
      }
    }
}

export default AtualizarEmprestimoService;
