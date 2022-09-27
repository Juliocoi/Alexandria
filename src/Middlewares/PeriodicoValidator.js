import  * as yup from 'yup';

const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/

export default async function periodicoValidator(request, response, next){

    const schema = yup.object().shape({

        issn: yup.number().integer().nullable().required("ISBN é obrigatório").typeError("ISSN inválido"),
        nome: yup.string().nullable().required("Nome do periódico é obrigatório").matches(regex,"Nome do periódico inválido" ),
        anoLancamento: yup.date().nullable().required("Data de lançamento é obrigatória").typeError("Digite uma data válida"),
        edicao: yup.number().integer().nullable().required("Digite a edição do periódico").typeError("Edição recebe somente números"),
        editora: yup.string().nullable().required("Nome da editora é obrigatório").typeError("nome da editora inválido"),
        estante: yup.string().nullable().required("Nome da estante é obrigatório").typeError("Nome da estante inválida"),
        palavraChave: yup.string().nullable().required("Palavra chave é obrigatória").typeError("Palavra chave inválida")

    });

  const body = request.body;

  try {
    await schema.validate(body);
    next();
  } catch (error) { return response.status(400).json({ erro: error.message }) };

}