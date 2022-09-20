import {Sequelize, DataTypes, Model} from 'sequelize';
import database from '../../../config/database';
import ModelAluno from '../usuario/ModelAluno';
import ModelFuncionario from '../usuario/ModelFuncionario';
import ModelLivro from '../catalogo/ModelLivro';

const sequelize = new Sequelize(database);

class ModelEmprestimo extends Model {};

ModelEmprestimo.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true
        },
        alunoId: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            references: {
                model: ModelAluno,
                key: 'id'
            }
        },
        funcionarioId: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            references: {
                model: ModelFuncionario,
                key: 'id'
            }
        },
        livroId: {
            type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            references: {
                model: ModelLivro,
                key: 'id'
            }
        },
        dataEmprestimo: {
            type: DataTypes.DATE,
            allowNull: false
        },
        estimativaEntrega: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },   
    {
        sequelize,
        modelName: 'ModelEmprestimo',
        timestamps: false,
        tableName: 'emprestimo'
    }
);

//Aluno
ModelAluno.belongsToMany(ModelLivro, {
    through:ModelEmprestimo,
});
ModelAluno.belongsToMany(ModelFuncionario, {
    through:ModelEmprestimo,
});

//Funcionario
ModelFuncionario.belongsToMany(ModelLivro,{
    through:ModelEmprestimo,
});
ModelFuncionario.belongsToMany(ModelAluno,{
    through:ModelEmprestimo,
});

//Livro
ModelLivro.belongsToMany(ModelAluno,{
    through:ModelEmprestimo,
});
ModelLivro.belongsToMany(ModelFuncionario,{
    through:ModelEmprestimo,
});

//Emprestimo
ModelEmprestimo.belongsTo(ModelAluno, {
    as: "alunos",
    foreignKey: "alunoId",
});
ModelEmprestimo.belongsTo(ModelFuncionario, {
    as: "funcionarios",
    foreignKey: "funcionarioId",
});
ModelEmprestimo.belongsTo(ModelLivro, {
    as: "livros",
    foreignKey: "livroId",
});

export default ModelEmprestimo;
