import ModelUsuario from "./ModelUsuario";
import Sequelize, { Model } from "sequelize";
import database from "../../../config/database";
import { Model } from "sequelize/types";

const sequelize = new Sequelize(database);

class ModelAluno extends Model {} //refatoração pro extends do Model

ModelAluno.init(
	{
		id: Sequelize.UUIDV4(),
		matricula: Sequelize.INTEGER,
		usuarioId:{
			type: Sequelize.UUIDV4(),
			references: {
				model: ModelUsuario,
				key: 'id',
			}
		},
	},
	{
		sequelize,
		modelName: "alunos",
		timestamps: false, // indica que o banco não terá a coluna de registros(tipo um log para as alterações. Esta coluna é para controle do interno do banco de dados), caso omisso, teremos que criar uma coluna para guardar essas informações (createdAt, updatedAt, deactivatedAt). Essas colunas devem ser add apenas nas migration. Não há necesside de colocá-las na model.
	}
);

//aqui faz associação 1:n
ModelAluno.belongsTo(ModelUsuario)

// {
//     foreignKey: "usuarioId"
// });

export default ModelAluno;