const ModelUsuario = require("./ModelUsuario");
import Sequelize from "sequelize";

class ModelAluno extends ModelUsuario () {
	static init(sequelize){
		super.init(
		    {
                id: 
                {
                    type: Sequelize.UUIDV4(),
                    references: {
                        model: Usuario,
                        key: 'id',
                        }
                },
                matricula: Sequelize.INTEGER
            },
            {
                sequelize,
            }
	    );
	}
}

export default ModelAluno;