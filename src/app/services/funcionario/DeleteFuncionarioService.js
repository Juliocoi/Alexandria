import ModelFuncionario from "../../models/usuario/ModelFuncionario";
class DeleteFuncionarioService {

  constructor(){};

  async delete(funcionariomatricula){
    try {
      const funcionario = await ModelFuncionario.findOne({where: {matricula: funcionariomatricula}});

      if (!funcionario) {
        return { message: 'Funcionário não encontrado.' }
      };

      const funcionarioDeletado = await funcionario.destroy();
      return {mensagem: "Funcionário deletado com sucesso."}

    } catch (error) {
      console.log(error);
      return {Message: error.message}
    };
    
  }
}

export default DeleteFuncionarioService;