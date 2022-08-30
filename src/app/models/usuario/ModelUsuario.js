const ModelUsuario = require("./ModelUsuario");
import Sequelize from "sequelize";
import ModelAluno from "./ModelAluno";
import ModelFuncionario from "./ModelFuncionario";
const database = require('../../../config/database');

const sequelize = new Sequelize(database);

class ModelUsuario extends Model{}

ModelUsuario.init(
    {
        id: Sequelize.UUIDV4(),
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        dataDeNascimento: Sequelize.DATE,
        mae: Sequelize.STRING,
        pai: Sequelize.STRING,
    },
    {
        sequelize,
        modelName: "usuarios", //colocar o nome como tá na migrations
        timestamps: false,
    }
);  

ModelUsuario.belongsTo(ModelAluno);
ModelUsuario.belongsTo(ModelFuncionario);

export default ModelUsuario;