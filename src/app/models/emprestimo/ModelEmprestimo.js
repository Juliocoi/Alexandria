import Sequelize, {DataTypes, Model} from 'sequelize';
import database from '../../../config/database';
import ModelAluno from '../usuario/ModelAluno';
import ModelFuncionario from '../usuario/ModelFuncionario';
import ModelLivro from '../catalogo/ModelLivro';

const sequelize = new Sequelize(database);

class ModelEmprestimo extends Model {};

ModelEmprestimo.init(
    {
        id: {
            type: DataTypes.UUIDV4(),
            primaryKey: true
        },
        emprestimo_Aluno_id: {
            type: DataTypes.UUIDV4(),
            references: {
                model: ModelAluno,
                key: 'id'
            }
        },
        emprestimo_Funcionario_id: {
            type: DataTypes.UUIDV4(),
            references: {
                model: ModelFuncionario,
                key: 'id'
            }
        },
        emprestimo_Livro_id: {
            type: DataTypes.UUIDV4(),
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

ModelAluno.hasOne(ModelEmprestimo, {
    foreignKey: {
        name:'emprestimo_Aluno_id',
        allowNull: false    
    }
});

ModelFuncionario.hasOne(ModelEmprestimo, {
    foreignKey: {
        name:'emprestimo_Funcionario_id',
        allowNull: false
    }
});

ModelLivro.hasOne(ModelEmprestimo, {
    foreignKey: {
        name:'emprestimo_Livro_id',
        allowNull: false
    }
});

ModelEmprestimo.belongsTo(ModelAluno);
ModelEmprestimo.belongsTo(ModelFuncionario);
ModelEmprestimo.belongsTo(ModelLivro);

export default ModelEmprestimo;
