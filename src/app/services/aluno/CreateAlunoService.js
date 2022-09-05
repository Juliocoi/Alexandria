import ModelAluno from '../../models/usuario/ModelAluno';
import { v4 } from 'uuid';

class CreateAlunoService {

  constructor(){};

  async createAluno(matricula, nome, mae, pai, email, dataDeNascimento) {
    try {
      // o create abaixo é um metodo nativo do sequelize.
      const newAluno = await ModelAluno.create({ id: v4(), matricula, nome, mae, pai, email, dataDeNascimento });

      return newAluno;

    } catch (error) {

      return { erro: error.message };

    };

  }
}

export default CreateAlunoService;