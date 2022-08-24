const ListAlunoService = require("../../services/aluno/ListAlunoService");

const DeleteAlunoService = {
  delete: (matricula) => {
    const alunos = ListAlunoService.listaAlunoService()
    const alunoIndice = alunos.findIndex(item => item.matricula === Number(matricula))

    if (alunoIndice === -1) {
      return { erro: "Aluno não encontrado" }
    }

    alunos.splice(alunoIndice, 1)

    return { mensagem: "Aluno removido com sucesso" }
  }
}

module.exports = DeleteAlunoService;