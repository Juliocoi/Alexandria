import ModelFuncionario from "../../models/usuario/ModelFuncionario";

class DeleteFuncionarioService {

  constructor(){};

  async delete(matricula){
    try {
      const funcionario = await ModelFuncionario.findOne(matricula);

      if (!funcionario) {
        return { message: 'Funcionário não encontrado.' }
      };

      const funcionarioDeletado = await funcionario.destroy();
      return {mensagem: 'Funcionário deletado com sucesso: ' + funcionarioDeletado}

    } catch (error) {
      console.log(error);
      return {Message: error.message}
    };
    
  }
}

export default DeleteFuncionarioService;