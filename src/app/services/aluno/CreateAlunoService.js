const ModelAluno = require('../../models/aluno/ModelAluno');

const CreateServiceAluno = {
  createAluno: (nome, email, matricula, dataDeNascimento) => {
    const newAluno = new ModelAluno(nome, email, matricula, dataDeNascimento);
    
    return newAluno;
  }
}

module.exports = CreateServiceAluno;