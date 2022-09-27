import  * as yup from 'yup';

const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/

export default async function livroValidator(request, response, next){
    const schema = yup.object().shape({

        isbn: yup.number().integer().nullable().required("ISBN é obrigatório").typeError("ISBN inválido"),
        nome: yup.string().nullable().required("Nome do livro é obrigatório").matches(regex,"Nome do livro inválido" ),
        autor: yup.string().nullable().required("Nome de autor é obrigatório").matches(regex,"Nome de autor inválido" ),
        anoLancamento: yup.date().nullable().required("Data de lançamento é obrigatória").typeError("Digite uma data válida"),
        coAutor: yup.string().matches(regex,"Nome do Co-Autor inválido"),
        edicao: yup.number().integer().nullable().required("Digite a edição do livro").typeError("Edição recebe somente números"),
        editora: yup.string().nullable().required("Nome da editora é obrigatório").typeError("nome da editora inválido"),
        estante: yup.string().nullable().required("Nome da estante é obrigatório").typeError("Nome da estante inválida"),
        disponivel: yup.boolean().nullable().required("Escolha a disponibilidade"),
        palavraChave: yup.string().nullable().required("Palavra chave é obrigatória").typeError("Palavra chave inválida")

    });

    const body = request.body;

    try {
        await schema.validate(body);
        next();
    } catch (error) { return response.status(400).json({ erro: error.message }) };
}