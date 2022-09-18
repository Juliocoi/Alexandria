import ModelAluno from '../../models/usuario/ModelAluno';

class DeleteAlunoService{

  constructor(){};

  async delete(matricula){
    try {
      const aluno = await ModelAluno.findOne({where: {matricula: matricula}})

      if(!aluno){
        return {mensagem: 'Aluno não encontrado'}
      }

      const alunoDeletado = await aluno.destroy();
      return {mensagem: "Aluno deletado com sucesso"}
      
    } catch (error) {
      return { erro: error.message };
    };
  };

}

export default DeleteAlunoService;