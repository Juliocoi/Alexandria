//confirmar se chamo o model aluno ou usuário
import ModelAluno from '../../models/usuario/ModelAluno';

class Alunos {

    constructor(){};

    async listaAlunoService(){
        try {
            const alunos = await ModelAluno.findAll();
            return alunos;

        } catch(error){
            return { erro: error.message };
        };
    };

    async listaAlunoDados(alunoNome){
        
        try{
            // SELECT * from alunos WHERE name = ?
            const aluno = await ModelAluno.findOne({where: { nome: alunoNome }});

            if(!aluno){
                return { message: 'Aluno não encontrado'};
            }
            return aluno;
            
        } catch(error){
            return { erro: error.message }
        };

    };
    
} 

export default Alunos;