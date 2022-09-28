import ModelFuncionario from "../../models/usuario/ModelFuncionario";
import SenhaHash from "../../utils/SenhaHash";
class AtualizarFuncionario{

    constructor() {}

    async atualizar(matricula, senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario){
        try {
            const funcionario = await ModelFuncionario.findOne({where: {matricula: matricula}})
            
            if(!funcionario){
                return { menssagem: 'Funcionário não encontrado' }
            }

            const senhaHash = SenhaHash.hash(senha);

            const [funcionarioAtualizado] = await ModelFuncionario.update({ senha: senhaHash, nome, email, dataDeNascimento, mae, pai, tipoFuncionario}, {where: {matricula}});

            if (funcionarioAtualizado === 0){
                return { mensagem: "As alterações prentendidas já existem em nosso servidor" };

            } else {
                return { matricula, senha: senhaHash, nome, email, dataDeNascimento, mae, pai, tipoFuncionario };
            }

        } catch (error) {
            return {erro: error.message};
        }
    }
}
export default AtualizarFuncionario;
