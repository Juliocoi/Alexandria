const ModelAluno = require('../../models/ModelAluno');

const CreateServiceAluno = {
  createAluno: (nome, mae, pai, email, matricula, dataDeNascimento) => {
    const newAluno = new ModelAluno(nome, mae, pai, email, matricula, dataDeNascimento);
    
    return newAluno;
  }
}

module.exports = CreateServiceAluno;