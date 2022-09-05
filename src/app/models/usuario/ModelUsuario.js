import Sequelize, { Model } from "sequelize";
import ModelAluno from "./ModelAluno";
import ModelFuncionario from "./ModelFuncionario";
import database from "../../../config/database";

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
        timestamps: false, // indica que o banco não terá a coluna de registros(tipo um log para as alterações. Esta coluna é para controle do interno do banco de dados), caso omisso, teremos que criar uma coluna para guardar essas informações (createdAt, updatedAt, deactivatedAt). Essas colunas devem ser add apenas nas migration. Não há necesside de colocá-las na model.
    }
);  

ModelUsuario.belongsTo(ModelAluno);
ModelUsuario.belongsTo(ModelFuncionario);

export default ModelUsuario;