import ModelUsuario from "./ModelUsuario";
import Sequelize from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelAluno extends ModelUsuario {}
ModelAluno.init(
	{
		id: Sequelize.UUIDV4(),
		matricula: Sequelize.INTEGER,
		usuarioId:{
			type: Sequelize.UUIDV4(), //o bd ainda não sabe como gerar esse uuid
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