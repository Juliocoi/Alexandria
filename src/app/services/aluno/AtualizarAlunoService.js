import ListAlunoService from './ListAlunoService';

class AtualizarAluno{
    
    constructor(){
        this.service = new ListAlunoService()
    };

    atualizar(matricula, nome, mae, pai, email, dataDeNascimento){

        const alunos = this.service.listaAlunoService();

        const alunoID = alunos.findIndex(item => item.matricula === Number(matricula));

        if (alunoID === -1){
            return {'Erro': 'Aluno não encontrado em nosso banco de dados'}
        }
        
        alunos[alunoID] = { nome, mae, pai, email, dataDeNascimento };

        return {
            matricula,
            ...alunos[alunoID]
        }
    }
}

export default AtualizarAluno;
