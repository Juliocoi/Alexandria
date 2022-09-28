import ModelFuncionario from "../../models/usuario/ModelFuncionario";
class DeleteFuncionarioService {

  constructor(){};

  async delete(matricula) {
    try {
      const funcionario = await ModelFuncionario.findOne({ where: { matricula} })

      const funcionarioDeletado = await funcionario.destroy();
      
    } catch (error) {
      return { erro: error.message };
    };
  };
}

export default DeleteFuncionarioService;