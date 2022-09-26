import ModelFuncionario from '../../models/usuario/ModelFuncionario';
import {v4} from 'uuid';
import SenhaHash from '../../utils/SenhaHash';

class CreateFuncionarioService {
    
    constructor () { };

    async createFuncionario(matricula, senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario){
        console.log("Create service: " + senha)
        const senhaHash = SenhaHash.hash(senha); 
        
        try {
            const newFuncionario = await ModelFuncionario.create({ id: v4(), matricula, senha: senhaHash, nome, email, dataDeNascimento, mae, pai, tipoFuncionario });

            return newFuncionario;

        } catch (error) {
            console.log(error);
            return { erro: error.message }
            
        }
    }
}

export default CreateFuncionarioService;
