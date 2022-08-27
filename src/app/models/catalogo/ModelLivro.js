function ModelLivro(isbn, nome, autor, coautor, editora, anoLancamento, edicao){
    this.isbn = isbn;
	this.nome = nome;
	this.autor = autor;
	this.coautor = coautor;
	this.editora = editora;
	this.anoLancamento = anoLancamento;
	this.edicao = edicao;
}

module.exports = ModelLivro;