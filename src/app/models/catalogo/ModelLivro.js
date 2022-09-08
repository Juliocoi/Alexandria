import ModelCatalogo from "./ModelCatalogo";
import { Sequelize, DataTypes, Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelLivro extends Model{}

ModelLivro.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		isbn: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		autor: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		anoLancamento: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		coAutor: {
			type: DataTypes.STRING,
			
		},
		catalogoId: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
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

ModelLivro.belongsTo(ModelCatalogo);

ModelCatalogo.hasMany(ModelLivro, {
	foreignKey: "catalogoId"
});

export default ModelLivro;
