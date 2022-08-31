import Sequelize, { Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelCatalogo extends Model{}

ModelCatalogo.init(
    {
        id: Sequelize.UUIDV4(),
        nome: Sequelize.STRING,
        edicao: Sequelize.INTEGER,
        editora: Sequelize.STRING,
        estante: Sequelize.STRING,
    },
    {
        sequelize,
        modelName: "catalogos",
        timestamps: false,
    }
);
 
ModelCatalogo.belongsTo(ModelLivro);

export default ModelCatalogo;