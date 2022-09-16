import jwt from 'jsonwebtoken';
import ListAlunoService from '../app/services/aluno/ListAlunoService'

function ValidarTokenSessao(req, resp, next){
    //obtendo o token para validação. O token vem no header da requisição. Aqui vamos verificar se o token está sendo passado.
    const token = req.headers.authorizarion;

    if(!token){
        return resp.status(401).json({error: "Você precisa estar logado"});
         
    }
    // tratando o token, que chega com um 'Bearer(espaço) token'.
    const tratarToken = String(token).split('Bearer ')[1];
    // verifica se o token é válido (corresponde ao esperado)
    try {
        const validarToken = jwt.verify(tratarToken, process.env.JWT_PRIVATE_KEY);
        //verifica se o dia e a hora que o token foi expirado é maior que a data atual, se sim o token é inválido. A verificação pode ser inválida pois o verify já valida o tempo de expiração do token.
        if(new Date() > validarToken.exp * 1000){
            return resp.status(401).json({error: "Token expirado"});
        }
        const listAlunoService = new ListAlunoService();
        const verificaId = listAlunoService.listaAlunoId(validarToken.id);

        if(!verificaId){
            return resp.status(401).json({erro: "Aluno não encontrado"});
        }

    } catch (error) {
        console.log(error);
        return resp.status(401).json({error: error.message});
    }
     
    next();
} 

export default ValidarTokenSessao;
