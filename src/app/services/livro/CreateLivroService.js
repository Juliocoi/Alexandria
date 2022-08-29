import ModelLivro from '../../models/catalogo/ModelLivro';

class CreateLivroService{
  constructor(){}
  
  createLivro(isbn, nome, autor, coautor, editora, anoLancamento, edicao){
    const newLivro = new ModelLivro(isbn, nome, autor, coautor, editora, anoLancamento, edicao);
    
    return newLivro;
  }
}

export default CreateLivroService;