import ModelUsuario from "./ModelUsuario";
import Sequelize, { Model } from "sequelize";
import database from "../../../config/database";
import { Model } from "sequelize/types";

const sequelize = new Sequelize(database);

class ModelAluno extends Model {} //refatoração pro extends do Model

ModelAluno.init(
	{
		id: Sequelize.UUIDV4(),
		matricula: Sequelize.INTEGER,
		usuarioId:{
			type: Sequelize.UUIDV4(),
			references: {
				model: ModelUsuario,
				key: 'id',
			}
		},
	},
	{
		sequelize,
		modelName: "alunos",
		timestamps: false,
	}
);

//aqui faz associação 1:n
ModelAluno.hasOne(ModelUsuario,{
    foreignKey: "usuarioId"
});

export default ModelAluno;