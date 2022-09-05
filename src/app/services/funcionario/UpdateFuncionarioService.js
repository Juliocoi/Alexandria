import ModelFuncionario from "../../models/usuario/ModelFuncionario";

class AtualizarFuncionario{

    constructor() {}

    async atualizar(id, nome, email, dataDeNascimento, mae, pai, matricula){
        try {
            const funcionario = ModelFuncionario.findOne(matricula)
            
            if(!funcionario){
                return { menssagem: 'Funcionário não encontrado' }
            }

            const [funcionarioAtualizado] = await ModelFuncionario.update({nome, email, dataDeNascimento, mae, pai}, {where: {matricula}});

            if (funcionarioAtualizado === 0){
                return { mensagem: "As auterações prentendidas já existem em nosso servidor" }

            } else {
                return { id, nome, email, dataDeNascimento, mae, pai, matricula };
            }

        } catch (error) {
            console.log(error);
            return {erro: error.message};
        }
    }
}
export default AtualizarFuncionario;