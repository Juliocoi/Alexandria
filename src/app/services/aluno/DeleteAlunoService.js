import ModelAluno from '../../models/usuario/ModelAluno';

class DeleteAlunoService{

  constructor(){};

  async delete(matricula){
    try {
      const aluno = await ModelAluno.findOne(matricula)

      if(!aluno){
        return {mensagem: 'Aluno não localizado'}
      }

      const alunoDeletado = await aluno.destroy();
      return {mensagem: 'Aluno deletado com sucesso: ' + alunoDeletado}
      
    } catch (error) {
      return { erro: error.message };
    };
  };

}

export default DeleteAlunoService;