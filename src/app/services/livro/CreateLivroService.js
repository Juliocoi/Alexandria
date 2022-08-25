const ModelLivro = require('../../models/livro/ModelLivro');

const CreateServiceLivro = {
  createLivro: (isbn, nome, autor, coautor, editora, anoLancamento, edicao) => {
    const newLivro = new ModelLivro(isbn, nome, autor, coautor, editora, anoLancamento, edicao);
    
    return newLivro;
  }
}

module.exports = CreateServiceLivro;