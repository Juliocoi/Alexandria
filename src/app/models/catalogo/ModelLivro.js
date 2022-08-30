import ModelCatalogo from "./ModelCatalogo";
import Sequelize from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelLivro extends ModelCatalogo{}

ModelLivro.init(
	{
		id: Sequelize.UUIDV4(),
		isbn: Sequelize.INTEGER,
		autor: Sequelize.STRING,
		anoLancamento: Sequelize.DATE,
		coAutor: Sequelize.STRING,
		catalogoId: {
			type: Sequelize.UUIDV4(), //o bd ainda não sabe como gerar esse uuid
			references: {
				model: ModelCatalogo,
				key: 'id',
				}
		},
	},
	{
		sequelize,
		modelName: "catalogos",
		timestamps: false,
	}
);

ModelLivro.hasOne(ModelCatalogo,{
    foreignKey: "catalogoId"
});

export default ModelLivro;