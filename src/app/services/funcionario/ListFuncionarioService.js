import ModelFuncionario from '../../models/usuario/ModelFuncionario';

class Funcionarios{
    constructor () {};

    async listaFuncionarioService(){
        try {
            const funcionarios = await ModelFuncionario.findAll();
            return funcionarios;

        } catch (error) {
            console.log(error);
            return {erro: error.message}
            
        }
    };

    async listaFuncionarioMatricula(matricula){
        try {
            const funcionario = await ModelFuncionario.findOne({
                where: {
                    matricula
                }
            });

            return funcionario;
            
        } catch (error) {
            console.log(error);
            return {erro: error.message}
        } 
    }

    async listaFuncionarioDados(funcionarioNome){
        try {
            const funcionario = await ModelFuncionario.findOne({ where: {name: funcionarioNome} });

            if(!funcionario){
                return { message: 'Funcionário não encontrado'}
            }
            
            return funcionario;
            
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
       
    }

}

export default Funcionarios;
