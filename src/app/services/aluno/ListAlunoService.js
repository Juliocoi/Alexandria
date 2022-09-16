import ModelAluno from '../../models/usuario/ModelAluno';

class Alunos {
    constructor(){};

    async listaAlunoService(){
        try {
            const alunos = await ModelAluno.findAll();
            return alunos;

        } catch(error){
            console.log(error);
            return { erro: error.message };
        };
    };

    async listaAlunoMatricula(matricula){
        try {
            const aluno = await ModelAluno.findOne({
                where: {
                    matricula,
                }
            });

            return aluno;

        } catch (error) {
            console.log(error)
            return {error: error.message}
        }
    };

    async listaAlunoId(id) {
        try {
            const aluno = await ModelAluno.findOne({
                where: {
                    id,
                }
            });

            return aluno;
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
    };

    async listaAlunoDados(Nome){
        
        try{
            // SELECT * from alunos WHERE name = ?
            const aluno = await ModelAluno.findOne({where: { nome: Nome }});

            if(!aluno){
                return { message: 'Aluno não encontrado'};
            }
            return aluno;
            
        } catch(error){
            return { erro: error.message }
        }
    };
    
} 

export default Alunos;
