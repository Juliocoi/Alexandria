import ModelAluno from '../../models/usuario/ModelAluno';
import SenhaHash from '../../utils/SenhaHash';

class AtualizarAlunoService {
  constructor(){};

  async atualizar(matricula, senha, nome, email, dataDeNascimento, mae, pai) {
    
    try {
      const aluno = await ModelAluno.findOne({ where: { matricula: matricula } });

      if (!aluno) {
        return { menssagem: 'Aluno não encontrado.' }
      }

      const senhaHash = SenhaHash.hash(senha);

      const [alunoAtualizado] = await ModelAluno.update(
        { senha: senhaHash, nome, email, dataDeNascimento, mae, pai }, { where: { matricula } });

      if (alunoAtualizado === 0) {
        return { mensagem: "As alterações prentendidas já existem em nosso servidor" };

      } else {

        return { matricula, senha: senhaHash, nome, email, dataDeNascimento, mae, pai };
      }
    } catch (error) {
      return { erro: error.message }

    };
  };
}

export default AtualizarAlunoService;
