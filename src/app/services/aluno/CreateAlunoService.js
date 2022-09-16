import ModelAluno from '../../models/usuario/ModelAluno';
import { v4 } from 'uuid';
import SenhaHash from '../../utils/SenhaHash';
class CreateAlunoService {
  constructor(){};

  async createAluno(matricula, nome, email, senha, dataDeNascimento, mae, pai) {
    // pega a senha do usuário e mascara com um código que passaremos abaixo, criptografando a senha.
    const senhaHash = SenhaHash.hash(senha);

    try {
      // o create abaixo é um metodo nativo do sequelize.
      const newAluno = await ModelAluno.create({ 
        id: v4(), 
        matricula, 
        nome, 
        email, 
        senha: senhaHash,
        dataDeNascimento, 
        mae, 
        pai
      });

      return {
        sucess: true,
        message: newAluno
      }
    } catch (error) {
      console.log(error)
      return { erro: error.message };
    };

  }
}

export default CreateAlunoService;
