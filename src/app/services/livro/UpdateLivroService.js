import ModelLivro from '../../models/catalogo/ModelLivro';

class AtualizarLivro{
    constructor(){}
    

    async atualizar(id, isbn, nome, autor, anoLancamento,coautor, edicao, editora, estante, disponivel, palavraChave){
        try{
        const livro = await ModelLivro.findByPk(id);

        if(!livro){
            return {mensagem: 'Livro não encontrado.'}
        }

        const [livroAtualizado] = await ModelLivro.update({
             isbn, nome, autor, anoLancamento,coautor, edicao, editora, estante, disponivel, palavraChave
        }, {where: {id}});

        if (livroAtualizado === 0){
                return { mensagem: "As alterações prentendidas já existem em nosso servidor" };
        } else {
          return {isbn, nome, autor, anoLancamento,coautor, edicao, editora, estante, disponivel, palavraChave};
        }       
        
      } catch(error) {
        console.log(error);
        return {erro: error.message};
      }
    }
}

export default AtualizarLivro