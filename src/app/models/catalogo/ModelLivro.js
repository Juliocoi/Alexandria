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
		nome: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		edicao:{
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		editora: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		estante: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dipsponivel: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		palavraChave: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		tableName: "livros",
		modelName: ModelLivro,
		timestamps: false,
	}
);

export default ModelLivro;
