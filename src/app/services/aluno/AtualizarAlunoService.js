import ModelAluno from '../../models/usuario/ModelAluno';

class AtualizarAlunoService {

    constructor() {};

    async atualizar(matricula, senha, nome, email, dataDeNascimento, mae, pai) {

        try {
            const aluno = await ModelAluno.findOne({where: {matricula: matricula}});

            if(!aluno){
                return { menssagem: 'Aluno não encontrado.'}
            }

            const [alunoAtualizado] = await ModelAluno.update(
                { senha, nome, email, dataDeNascimento, mae, pai}, { where: { matricula } });

            if (alunoAtualizado === 0) {
                return { mensagem: "As alterações prentendidas já existem em nosso servidor" };

            } else {

                return { matricula, senha, nome, email, dataDeNascimento, mae, pai};
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message }

        };
    };
}

export default AtualizarAlunoService;
