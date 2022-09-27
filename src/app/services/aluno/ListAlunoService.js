import ModelAluno from '../../models/usuario/ModelAluno';

class Alunos {
  constructor() { };

  async listaAlunoService() {
    try {
      const alunos = await ModelAluno.findAll();
      return alunos;

    } catch (error) {
      return { erro: error.message };
    };
  };

  async listaAlunoMatricula(matricula) {
    try {
      const aluno = await ModelAluno.findOne({ where: { matricula: matricula } });
      return aluno;

    } catch (error) {
      return { error: error.message }
    }
  };

  async listaAlunoId(id) {
    try {
      const aluno = await ModelAluno.findOne({ where: { id: id } });
      return aluno;

    } catch (error) {
      return { error: error.message }
    }
  };

  async listaAlunoDados(nome) {

    try {

      const aluno = await ModelAluno.findOne({ where: { nome: nome } });
      return aluno;

    } catch (error) {
      return { erro: error.message }
    }
  };

}

export default Alunos;
