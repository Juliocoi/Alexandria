import ModelFuncionario from "../../models/usuario/ModelFuncionario";
class AtualizarFuncionario{

    constructor() {}

    async atualizar(matricula, senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario){
        try {
            const funcionario = await ModelFuncionario.findOne({where: {matricula: matricula}})
            
            if(!funcionario){
                return { menssagem: 'Funcionário não encontrado' }
            }

            const [funcionarioAtualizado] = await ModelFuncionario.update({ senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario}, {where: {matricula}});

            if (funcionarioAtualizado === 0){
                return { mensagem: "As alterações prentendidas já existem em nosso servidor" };

            } else {
                return { matricula, senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario };
            }

        } catch (error) {
            return {erro: error.message};
        }
    }
}
export default AtualizarFuncionario;