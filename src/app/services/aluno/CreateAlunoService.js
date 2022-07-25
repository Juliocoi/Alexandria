const ModelAluno = require('../../models/aluno/ModelAluno');

const createServiceAluno = {
  createAluno: (nome, email, matricula, dataDeNascimento) => {
    const newAluno = new ModelAluno(nome, email, matricula, dataDeNascimento);
    
    return newAluno;
  }
}

module.exports = createServiceAluno;