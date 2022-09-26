import ModelLivro from '../../models/catalogo/ModelLivro';

class DeleteLivroService{
    constructor(){}

    async delete(id){
        try {
        const livro = await ModelLivro.findByPk(id);
               
        const livroDeletado = await livro.destroy();

        return {mensagem: "Livro deletado com sucesso." }
    } catch (error){
        console.log(error);
        return {Message: error.message}
    };
  }
}

export default DeleteLivroService
