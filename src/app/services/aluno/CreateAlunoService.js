import ModelAluno from '../../models/usuario/ModelAluno';
import { v4 } from 'uuid';

class CreateAlunoService {

  constructor(){};

  async createAluno(nome, email, dataDeNascimento, mae, pai, matricula) {
    try {
      // o create abaixo é um metodo nativo do sequelize.
      const newAluno = await ModelAluno.create({ id: v4(), nome, email, dataDeNascimento, mae, pai, matricula });

      return newAluno;

    } catch (error) {

      return { erro: error.message };

    };

  }
}

export default CreateAlunoService;