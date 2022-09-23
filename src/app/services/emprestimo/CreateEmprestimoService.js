import ModelEmprestimo from '../../models/emprestimo/ModelEmprestimo';
import { v4 } from 'uuid';

class CreateEmprestimo {
    constructor(){};

    async createEmprestimo(alunoId, funcionarioId,livroId,dataEmprestimo, estimativaEntrega){
        try {
            const novoEmprestimo = await ModelEmprestimo.create({ id: v4(), alunoId, funcionarioId, livroId, dataEmprestimo, estimativaEntrega });

            return novoEmprestimo;
            
        } catch (error) {
            console.log(error);
            return {erro: error.message};
        }

    }
}

export default CreateEmprestimo;
