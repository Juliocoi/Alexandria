const ModelFuncionario = require('../../models/funcionario/ModelFuncionario')

const CreateServiceFuncionario = {
    createFuncionario: (matricula, nome, mae, pai, email, dataDeNascimento) => {
        const newFuncionario = new ModelFuncionario(matricula, nome, mae, pai, email, dataDeNascimento);

        return newFuncionario;
    }
}

module.exports = CreateServiceFuncionario;