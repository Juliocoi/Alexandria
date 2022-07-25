const CreateAlunoService = require('../../services/aluno/CreateAlunoService')

const Controller = {

        // falta criar metódo para listar todos os alunos e listar por nome, resolvi esperar a aula sobre banco de dados.

    create: (request, response) => {
        const { nome, mae, pai, email, matricula, dataDeNascimento } = request.body;

        const aluno = createServiceAluno.createAluno(nome, mae, pai, email, matricula, dataDeNascimento);

        return response.json(aluno)

    }





}










