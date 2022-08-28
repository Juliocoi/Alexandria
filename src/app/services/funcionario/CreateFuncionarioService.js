import v4 from 'uuid';
import ModelFuncionario from '../../models/usuario/ModelFuncionario';

class CreateFuncionarioService {
    constructor () { };

    createFuncionario(matricula, nome, mae, pai, email, dataDeNascimento){
        const newFuncionario = new ModelFuncionario(v4(), matricula, nome, mae, pai, email, dataDeNascimento);

        return newFuncionario;
    }
}

export default CreateFuncionarioService;