const ModelFuncionario = require("../../models/funcionario/ModelFuncionario")

const Funcionarios = {

    listaFuncionarioService: () => {
        const funcionario = new ModelFuncionario(
            10,
            'Funcionario A',
            'Mãe Funcionario A',
            'Pai Funcionario A',
            'funcA@gmail.com',
            '15/07/1995'  
        );

        const funcionario2 = new ModelFuncionario(
            20,
            'Funcionario B',
            'Mãe Funcionario B',
            'Pai Funcionario B',
            'funcB@gmail.com',
            '06/03/1990'  
        );

        return [funcionario, funcionario2]
    },

    listaFuncionarioDados: (funcionarioNome) => {

        const listarFuncionario = Funcionarios.listaFuncionarioService();
        const funcionario = listarFuncionario.find(item => item.nome === funcionarioNome);

        if(funcionario === undefined){
            return {'Erro': 'Funcionario não localizado em nosso banco de dados'}
        }

        return funcionario;
    }

}

module.exports = Funcionarios;