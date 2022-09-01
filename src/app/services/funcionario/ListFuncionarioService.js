import ModelFuncionario from '../../models/usuario/ModelFuncionario';

class Funcionarios{
    constructor () {};

    listaFuncionarioService(){
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
    };

    listaFuncionarioDados(funcionarioData){

        const listarFuncionario = this.listaFuncionarioService();
        const funcionario = listarFuncionario.find(item => item.nome === funcionarioData);

        if(funcionario === undefined){
            return {'Erro': 'Funcionario não localizado em nosso banco de dados'}
        };

        return funcionario;
    }

}

export default Funcionarios;