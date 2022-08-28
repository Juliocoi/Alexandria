import ListFuncionarioService from './ListFuncionarioService';

class AtualizarFuncionario{

    constructor() {
        this.service = new ListFuncionarioService()
     }

    atualizar(matricula, nome, mae, pai, email, dataDeNascimento){
        

        const funcionarios = this.service.listaFuncionarioService()
        
        const IDmatriculaFuncionario = funcionarios.findIndex(item => item.matricula === Number(matricula));

        if(IDmatriculaFuncionario === -1){
            return {'Erro': 'Funcionario não encontrado em nosso banco de dados'}
        }

        funcionarios[IDmatriculaFuncionario] = { nome, mae, pai, email, dataDeNascimento };

        return {
            matricula,
            ...funcionarios[IDmatriculaFuncionario]
        }
   }
}

export default AtualizarFuncionario;