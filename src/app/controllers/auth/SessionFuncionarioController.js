import ListFuncionarioService from '../../services/funcionario/ListFuncionarioService';
import jwt from 'jsonwebtoken';
import SenhaHash from '../../utils/SenhaHash';

class SessionFuncionarioController {
    constructor(){}

    static async create(req, resp){
        const { matricula, senha } = req.body;

        const service = new ListFuncionarioService()
        const funcionario = service.listaFuncionarioMatricula(matricula)

        if(!funcionario){
            return resp.status(401).json({error: "A matrícula ou senha estão incorretas"})
        }

        const validarSenha = SenhaHash.validacao(senha, funcionario.senha);

        if (!validarSenha){
            return resp.status(401).json({ error: "A matrícula ou senha estão incorretas" })
        }

        const { id, nome } = funcionario;

        return resp.json({
            funcionario: {
                id,
                nome,
                matricula
            },

            token: jwt.sign({id}, process.env.JWT_PRIVATE_KEY, {
                expiresIn: '5d'
            })
        })
    }

}

export default SessionFuncionarioController;
