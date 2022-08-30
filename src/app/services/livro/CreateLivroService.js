import ModelLivro from '../../models/catalogo/ModelLivro';
import v4 from 'uuid';

class CreateLivroService{
  constructor(){}
  
  createLivro(isbn, nome, autor, coautor, editora, anoLancamento, edicao){
    const newLivro = new ModelLivro(v4(), isbn, nome, autor, coautor, editora, anoLancamento, edicao);
    
    return newLivro;
  }
}

export default CreateLivroService;