import ModelCatalogo from "./ModelCatalogo";
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
		anoLancamento: {
			type: DataTypes.DATE,
			allowNull: false,
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
		tableName: "periodicos",
		timestamps: false,
	}
);

ModelPeriodico.belongsTo(ModelCatalogo);

ModelCatalogo.hasMany(ModelPeriodico, {
	foreignKey: "catalogoId"
})

export default ModelPeriodico;