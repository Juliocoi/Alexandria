const ListAlunoService = require('./ListAlunoService');

const AtualizarAluno = {
    atualizar: (matricula, nome, mae, pai, email, dataDeNascimento) => {
        const alunos = ListAlunoService.listaAlunoService();
        const matriculaAluno = alunos.findIndex(item => item.matricula === Number(matricula));

        if(matriculaAluno === -1){
            return {'Erro': 'Aluno não encontrado em nosso banco de dados'}
        }
        ////aqui estamos atualizando o índice dentro do array. Seria o mesmo que alunos[0] ou alunos[1], só que uso os dados da busca na const matriculaAluno
        alunos[matriculaAluno] = { nome, mae, pai, email, dataDeNascimento };

        return {
            matricula,
            ...alunos[matriculaAluno]
        }
    }
}

module.exports = AtualizarAluno;
