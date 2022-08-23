function ModelAluno(matricula, nome, mae, pai, email, dataDeNascimento) {
    this.matricula = matricula;
    this.nome = nome;
    this.mae = mae;
    this.pai = pai;
    this.email = email;
    this.dataDeNascimento = dataDeNascimento;

}

module.exports = ModelAluno;