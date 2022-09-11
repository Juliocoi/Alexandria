import Sequelize, { Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelLivro extends Model {}

ModelLivro.init(
	{
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4
		},
		nome: Sequelize.STRING,
        edicao: Sequelize.INTEGER,
        editora: Sequelize.STRING,
        estante: Sequelize.STRING,
		isbn: Sequelize.INTEGER,
		autor: Sequelize.STRING,
		anoLancamento: Sequelize.DATE,
		coAutor: Sequelize.STRING,
		palavraChave: Sequelize.STRING,
	},
	{
		sequelize,
		tableName: "livros",
		timestamps: false,
	}
);

export default ModelLivro;