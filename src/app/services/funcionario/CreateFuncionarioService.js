import ModelFuncionario from '../../models/usuario/ModelFuncionario';
import {v4} from 'uuid';

class CreateFuncionarioService {
    
    constructor () { };

    async createFuncionario(matricula, senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario){
        
        try {
            const newFuncionario = await ModelFuncionario.create({ id: v4(), matricula, senha, nome, email, dataDeNascimento, mae, pai, tipoFuncionario });

            return newFuncionario;

        } catch (error) {
            console.log(error);
            return { erro: error.message }
            
        }
    }
}

export default CreateFuncionarioService;