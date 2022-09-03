import ModelCatalogo from "./ModelCatalogo";
import Sequelize, { Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelLivro extends Model {}

ModelLivro.init(
	{
		id: Sequelize.UUIDV4(),
		isbn: Sequelize.INTEGER,
		autor: Sequelize.STRING,
		anoLancamento: Sequelize.DATE,
		coAutor: Sequelize.STRING,
		catalogoId: {
			type: Sequelize.UUIDV4(),
			references: {
				model: ModelCatalogo,
				key: 'id',
			}
		},
	},
	{
		sequelize,
		modelName: "livros",
		timestamps: false,
	}
);

ModelLivro.hasOne(ModelCatalogo,{
    foreignKey: "catalogoId"
});

export default ModelLivro;