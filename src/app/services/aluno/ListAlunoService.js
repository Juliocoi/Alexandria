const ModelAluno = require('../../models/ModelAluno');


const ListAluno = {
    
    listaAlunoService: () => {
        const aluno = new ModelAluno(
            'Aluno y',
            'Mãe Aluno y',
            'Desconhecido',
            'alunoy@gmail.com',
            1,
            '15/03/1988'           
        )

        const aluno2  = new ModelAluno(
            'Aluno X',
            'Mãe Aluco x',
            'Pai Aluno x',
            'alunox@gmail.com',
            2,
            '16/03/1988' 
        )

        return [aluno, aluno2]
    },

    listaAlunoDados: (alunoNome) => {
        const listaAluno = ListAluno.listaAlunoService();

        const aluno = listaAluno.find(item = item.nome === nome);

        return aluno;

    }

}

module.exports = ModelAluno;