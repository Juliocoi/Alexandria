import * as yup from 'yup';

const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/
// /^[A-Za-z]+((\s)?([A-Za-z])+)*$/g

export default async function alunoValidator(request, response, next){
    const schema = yup.object().shape({
        
        matricula: yup.number().integer().nullable().required("Matricula é obrigatória").typeError("Matricula recebe somente números"),
        senha: yup.string().nullable().required("Senha é obrigatória"),
        nome: yup.string().nullable().min(4, "nome deve ter no mínimo 4 caracteres").required("Nome é obrigatório").matches(regex,"Nome inválido" ),
        email: yup.string().email("Digite um e-mail válido").nullable().required("E-mail é obrigatório"),
        dataDeNascimento: yup.date().nullable().required("Data de nascimento é obrigatória").typeError("Digite uma data válida"),
        mae: yup.string().nullable().required("Mãe é obrigatória").matches(regex,"Nome da mãe inválido"),
        pai: yup.string().matches(regex,"Nome do pai inválido"),
    })

    const body = request.body

    try { 
        await schema.validate(body);

        next();

    } catch(error){ return response.status(404).json({erro: error.message})};


}
