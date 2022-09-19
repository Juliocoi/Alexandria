import { Sequelize, DataTypes, Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelPeriodico extends Model {}

ModelPeriodico.init(
	{
		id: {
			type: DataTypes.UUIDV4,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		issn: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		nome: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		anoLancamento: {
			type: DataTypes.DATE,
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
		palavraChave: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	},
	{
		sequelize,
		tableName: "periodicos",
		modelName: "ModelPeriodico",
		timestamps: false,
	}
);

export default ModelPeriodico;