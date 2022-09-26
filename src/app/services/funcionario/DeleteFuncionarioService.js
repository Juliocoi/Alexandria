import ModelFuncionario from "../../models/usuario/ModelFuncionario";
class DeleteFuncionarioService {

  constructor(){};

  async delete(funcionariomatricula){
    try {
      const funcionario = await ModelFuncionario.findOne({where: {matricula: funcionariomatricula}});
      const funcionarioDeletado = await funcionario.destroy();

    } catch (error) {
      console.log(error);
      return {Message: error.message}
    };
    
  }
}

export default DeleteFuncionarioService;