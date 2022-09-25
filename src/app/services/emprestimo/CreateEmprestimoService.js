import ModelEmprestimo from '../../models/emprestimo/ModelEmprestimo';
import { v4 } from 'uuid';
import ModelLivro from '../../models/catalogo/ModelLivro';

class CreateEmprestimo {
    constructor() { };

    async createEmprestimo(alunoId, funcionarioId, livroId, dataEmprestimo, estimativaEntrega) {
        try {
            // valida a quantidade de emprestimos do aluno.
            const emprestimos = await ModelEmprestimo.findAll({ where: { alunoId, dataEntrega: null}})

            if(emprestimos.length >= 3){
                throw new Error('Quantidade máxima de empréstimo excedida')
            }

            const livro = await ModelLivro.findByPk(livroId)
            
            if (!livro.disponivel) {
                throw new Error('Este livro já está emprestado')
            }

            const novoEmprestimo = await ModelEmprestimo.create({ id: v4(), alunoId, funcionarioId, livroId, dataEmprestimo, estimativaEntrega });

            livro.disponivel = false;
            livro.save()

            return novoEmprestimo;

        } catch (error) {
            console.error(error);
            return { erro: error.message};
        }

    }
}

export default CreateEmprestimo;
