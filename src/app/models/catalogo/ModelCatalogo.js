import Sequelize, { Model } from "sequelize";
const database = require('../../../config/database');

class ModelCatalogo extends Model{
    static init(sequelize){
        super.init(
            {
                id: Sequelize.UUIDV4(),
                nome: Sequelize.STRING,
                edicao: Sequelize.INTEGER,
                editora: Sequelize.STRING,
                estante: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default ModelCatalogo;