const ModelUsuario = require("./ModelUsuario");
import Sequelize from "sequelize";

class ModelFuncionario extends ModelUsuario () {
    static init(sequelize){
        super.init(
            {
                matricula: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );
    }
}

export default ModelFuncionario;