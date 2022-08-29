import ModelAluno from '../../models/usuario/ModelAluno';

class Alunos {

    constructor(){};

    listaAlunoService(){
        const aluno = new ModelAluno(
            1,
            'Aluno Y',
            'Mãe Aluno y',
            'Desconhecido',
            'alunoy@gmail.com',
            '15/03/1988'           
        )

        const aluno2  = new ModelAluno(
            2,
            'Aluno X',
            'Mãe Aluco x',
            'Pai Aluno x',
            'alunox@gmail.com',
            '16/03/1988' 
        )

        return [aluno, aluno2]
    };

    listaAlunoDados(alunoNome){
        
        const listarAluno = Alunos.listaAlunoService();
        const aluno = listarAluno.find(item => item.nome === alunoNome);

        if (aluno === undefined) {
            return { 'Erro': 'Aluno não localizado em nosso banco de dados' };
        }

        return aluno;

    }

}

export default Alunos;