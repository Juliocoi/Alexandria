const ListFuncionarioService = require("../../services/Funcionario/ListFuncionarioService");

const DeleteFuncionarioService = {
  delete: (matricula) => {
    const funcionarios = ListFuncionarioService.listaFuncionarioService()
    const funcionarioIndice = funcionarios.findIndex(item => item.matricula === Number(matricula))

    if (funcionarioIndice === -1) {
      return { erro: "Funcionario não encontrado" }
    }

    funcionarios.splice(funcionarioIndice, 1)

    return { mensagem: "Funcionario removido com sucesso" }
  }
}

module.exports = DeleteFuncionarioService;