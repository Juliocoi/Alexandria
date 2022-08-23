const ModelAluno = require('../../models/aluno/ModelAluno');

const CreateServiceAluno = {
  createAluno: (matricula, nome, mae, pai, email, dataDeNascimento) => {
    const newAluno = new ModelAluno(matricula, nome, mae, pai, email, dataDeNascimento);
    
    return newAluno;
  }
}

module.exports = CreateServiceAluno;