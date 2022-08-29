import ModelAluno from '../../models/usuario/ModelAluno';
import v4 from 'uuid';

class CreateAlunoService {
  
  constructor (){};

  createAluno(matricula, nome, mae, pai, email, dataDeNascimento){
    const newAluno = new ModelAluno(v4(), matricula, nome, mae, pai, email, dataDeNascimento);
    
    return newAluno;
  }
}

export default CreateAlunoService;