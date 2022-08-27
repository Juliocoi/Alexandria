import Sequelize, { Model } from "sequelize";
const database = require('../../../config/database');

class ModelUsuario extends Model{
    static init(sequelize){
        super.init(
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
            }
        );
    }
}

export default ModelUsuario;