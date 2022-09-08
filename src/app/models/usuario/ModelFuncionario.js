import { Sequelize, DataTypes, Model } from "sequelize";
import database from '../../../config/database'
import ModelUsuario from "./ModelUsuario";

const sequelize = new Sequelize(database);

class ModelFuncionario extends Model { };

ModelFuncionario.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        matricula: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        usuarioId:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        tableName: "funcionarios",
        timestamps: false, // indica que o banco não terá a coluna de registros(tipo um log para as alterações. Esta coluna é para controle do interno do banco de dados), caso omisso, teremos que criar uma coluna para guardar essas informações (createdAt, updatedAt, deactivatedAt). Essas colunas devem ser add apenas nas migration. Não há necesside de colocá-las na model.
    }
);

//aqui faz o relacionamento 1:n
ModelFuncionario.belongsTo(ModelUsuario)

ModelUsuario.hasMany(ModelFuncionario, {
    foreignKey: "usuarioId"
});

export default ModelFuncionario;
