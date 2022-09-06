import ModelFuncionario from '../../models/usuario/ModelFuncionario';
import v4 from 'uuid';

class CreateFuncionarioService {
    constructor () { };

    async createFuncionario(nome, email, dataDeNascimento, mae, pai, matricula){
        
        try {
            const newFuncionario = await ModelFuncionario.create({ id: v4(), nome, email, dataDeNascimento, mae, pai, matricula });

            return newFuncionario;

        } catch (error) {
            console.log(error);
            return { erro: error.message }
            
        }
    }
}

export default CreateFuncionarioService;