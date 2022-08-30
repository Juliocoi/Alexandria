import ModelCatalogo from "./ModelCatalogo";
import Sequelize from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelPeriodico extends ModelCatalogo{}

ModelPeriodico.init(
	{
		id: Sequelize.UUIDV4(),
		issn: Sequelize.INTEGER,
		anoLancamento: Sequelize.DATE,
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

ModelPeriodico.hasOne(ModelCatalogo,{
    foreignKey: "catalogoId"
});

export default ModelPeriodico;