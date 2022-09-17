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
            type: DataTypes.UUIDV4,
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

ModelAluno.hasMany(ModelEmprestimo, {
    foreignKey:'alunoId',
});

ModelFuncionario.hasMany(ModelEmprestimo,{
    foreignKey: 'funcionarioId'
});

ModelLivro.hasOne(ModelEmprestimo,{
    foreignKey: 'livroId'
});

ModelEmprestimo.belongsTo(ModelAluno);
ModelEmprestimo.belongsTo(ModelFuncionario);
ModelEmprestimo.belongsTo(ModelLivro);

export default ModelEmprestimo;
