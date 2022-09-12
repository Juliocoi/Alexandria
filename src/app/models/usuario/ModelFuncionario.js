import { Sequelize, DataTypes, Model } from "sequelize";
import database from '../../../config/database'

const sequelize = new Sequelize(database);

class ModelFuncionario extends Model{};

ModelFuncionario.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        matricula: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        dataDeNascimento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        mae: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        pai: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

    },
    {
        sequelize,
        modelName: "ModelFuncionario",
        timestamps: true,
        tableName: "funcionarios"
    }
);

export default ModelFuncionario;
