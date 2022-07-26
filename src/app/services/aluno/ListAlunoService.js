const ModelAluno = require('../../models/ModelAluno');


const Alunos = {
    
    listaAlunoService: () => {
        const aluno = new ModelAluno(
            'Aluno Y',
            'Mãe Aluno y',
            'Desconhecido',
            'alunoy@gmail.com',
            1,
            '15/03/1988'           
        );

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
        
        const listarAluno = Alunos.listaAlunoService();
        const aluno = listarAluno.find(item => item.nome === alunoNome);
        return aluno;

    }

}

module.exports = Alunos