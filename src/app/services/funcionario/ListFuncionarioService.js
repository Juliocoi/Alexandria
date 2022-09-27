import ModelFuncionario from '../../models/usuario/ModelFuncionario';

class Funcionarios {
  constructor() { };

  async listaFuncionarioService() {
    try {
      const funcionarios = await ModelFuncionario.findAll();
      return funcionarios;

    } catch (error) {
      return { erro: error.message }

    }
  };

  async listaFuncionarioMatricula(matricula) {
    try {
      const funcionario = await ModelFuncionario.findOne({ where: { matricula }});

      if (!funcionario) {
        
        return { 'Erro': "Você precisa indicar uma matrícula válida." };
      }
      return funcionario;

    } catch (error) {
      return { erro: error.message };
    };
  };

  async listaFuncionarioId(id) {
    try {
      const funcionario = await ModelFuncionario.findOne({ where: { id: id } });

      return funcionario;
    } catch (error) {
      return { error: error.message };
    };
  };


  async listaFuncionarioDados(funcionarioNome) {
    try {
      const funcionario = await ModelFuncionario.findOne({ where: { nome: funcionarioNome } });

      return funcionario;
           
    } catch (error) {
      return { erro: error.message };
    };
  };
}

export default Funcionarios;
