import ModelCatalogo from "./ModelCatalogo";
import Sequelize, { Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelPeriodico extends Model {}

ModelPeriodico.init(
	{
		id: Sequelize.UUIDV4(),
		issn: Sequelize.INTEGER,
		anoLancamento: Sequelize.DATE,
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
		modelName: "periodicos",
		timestamps: false,
	}
);

ModelPeriodico.hasOne(ModelCatalogo,{
    foreignKey: "catalogoId"
});

export default ModelPeriodico;