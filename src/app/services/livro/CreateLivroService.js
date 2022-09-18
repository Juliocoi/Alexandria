import ModelLivro from '../../models/catalogo/ModelLivro';
import {v4} from 'uuid';
class CreateLivroService{
  constructor(){}
  
  async createLivro(isbn, nome, autor, anoLancamento,coautor, edicao, editora, estante, disponivel, palavraChave){

    try {
    const newLivro = await  ModelLivro.create({id: v4(), isbn, nome, autor, anoLancamento,coautor, edicao, editora, estante, disponivel, palavraChave });
    
    return newLivro;
  } catch (error) {
    console.log(error);
    return { erro: error.message }
  }
 }
}

export default CreateLivroService;