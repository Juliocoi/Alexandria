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
        matricula: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false
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
            allowNull: true
        },
        tipoFuncionaro: {
            type: DataTypes.ENUM,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: ModelFuncionario,
        tableName: "funcionarios",
        timestamps: false,
    }
);

export default ModelFuncionario;
