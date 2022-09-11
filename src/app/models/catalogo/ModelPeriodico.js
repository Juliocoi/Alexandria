import Sequelize, { Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelPeriodico extends Model {}

ModelPeriodico.init(
	{
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
		},
		nome: Sequelize.STRING,
        edicao: Sequelize.INTEGER,
        editora: Sequelize.STRING,
        estante: Sequelize.STRING,
		issn: Sequelize.INTEGER,
		anoLancamento: Sequelize.DATE,
		palavraChave: Sequelize.STRING,
	},
	{
		sequelize,
		tableName: "periodicos",
		timestamps: false,
	}
);

export default ModelPeriodico;