import ListFuncionarioService from './ListFuncionarioService';

class DeleteFuncionarioService {

  constructor(){
    this.service = new ListFuncionarioService()
  };

  delete(id){
    const funcionario = this.service.listaFuncionarioService()

    const funcionarioIndice = funcionario.findIndex(item => item.id === Number(id))

    if (funcionarioIndice === -1) {
      return { erro: "Funcionario não encontrado" }
    }

    funcionario.splice(funcionarioIndice, 1)

    return { mensagem: "Funcionario removido com sucesso" }
  }
}

export default DeleteFuncionarioService;