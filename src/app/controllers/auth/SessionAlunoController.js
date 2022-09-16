import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';
import ListAlunoService from '../../services/aluno/ListAlunoService';
import SenhaHash from '../../utils/SenhaHash';

class SessionAlunoController {
    constructor(){};

    static async create(req, resp) {
        const { matricula, senha } = req.body; 

        const service = new ListAlunoService()
        const aluno = await service.listaAlunoMatricula(matricula)
        
        if(!aluno){
            return resp.status(401).json({error: 'A matrícula ou senha estão incorretas'})
        }

        const validarSenha = SenhaHash.validacao(senha, aluno.senha);

        if(!validarSenha){
            return resp.status(401).json({Error: "A matrícula ou senha estão incorretas"}) // confirmar concordância verbal
        } 

        const {id, nome} = aluno;

        return resp.json({
            aluno: {
                id,
                nome,
                email
            },
            // mudar secret/private key
            token: jwt.sign({id}, process.env.JWT_PRIVATE_KEY, {
                expiresIn: '5d'
            })
        })

    }
}

export default SessionAlunoController;
