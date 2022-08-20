const ListFuncionarioService = require('./ListFuncionarioService');

const AtualizarFuncionario = {

    atualizar: (matricula, nome, mae, pai, email, dataDeNascimento) => {
        const funcionarios = ListFuncionarioService.
        listaFuncionarioService();
        
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

module.exports = AtualizarFuncionario;