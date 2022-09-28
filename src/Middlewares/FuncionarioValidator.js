import * as yup from 'yup';

const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;

export default async function FuncionarioValidator(request, response, next){
    const schema = yup.object().shape({
        
        matricula: yup.number().integer().nullable().required("Matricula é obrigatória").typeError("Matricula recebe somente números"),
        senha: yup.string().nullable().required("Senha é obrigatória"),
        nome: yup.string().nullable().min(4, "nome deve ter no mínimo 14 caracteres").required("Nome é obrigatório").matches(regex,"Nome inválido" ),
        email: yup.string().email("Digite um e-mail válido").nullable().required("E-mail é obrigatório"),
        dataDeNascimento: yup.date().nullable().required("Data de nascimento é obrigatória").typeError("Digite uma data válida"),
        mae: yup.string().nullable().required("Mãe é obrigatória").matches(regex,"Nome da mãe inválido"),
        pai: yup.string().matches(regex,"Nome do pai inválido"),
        tipoFuncionario: yup.string("0", "1").nullable().required("Escolha um tipo de funcionário")
    })

    const body = request.body

    try { 
        await schema.validate(body);

        next();

    } catch(error){ return response.status(400).json({erro: error.message})};


}