import ModelAluno from '../../models/usuario/ModelAluno';

class AtualizarAlunoService {

    constructor() {};

    async atualizar(id, nome, email, dataDeNascimento, mae, pai, matricula) {

        try {
            const aluno = await ModelAluno.findOne(matricula);

            if(!aluno){
                return { menssagem: 'Aluno não encontrado.'}
            }

            const [alunoAtualizado] = await ModelAluno.update(
                { nome, email, dataDeNascimento, mae, pai}, { where: { matricula } });

            if (alunoAtualizado === 0) {
                return { mensagem: "As auterações prentendidas já existem em nosso servidor" };

            } else {

                return { id, nome, email, dataDeNascimento, mae, pai, matricula};
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message }

        };

    };
}

export default AtualizarAlunoService;
