import ListAlunoService from './ListAlunoService';

class DeleteAlunoService{

  constructor(){
    this.service = new ListAlunoService()
  };

  delete(matricula){
    const alunos = this.service.listaAlunoService();
    
    const alunoIndice = alunos.findIndex(item => item.matricula === Number(matricula))

    if (alunoIndice === -1) {
      return { erro: "Aluno não encontrado" }
    }

    alunos.splice(alunoIndice, 1)

    return { mensagem: "Aluno removido com sucesso" }
  }
}

export default DeleteAlunoService;