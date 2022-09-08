import ModelUsuario from "./ModelUsuario";
import { Sequelize, DataTypes, Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelAluno extends Model {} //refatoração pro extends do Model

ModelAluno.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
				
		usuarioId:{
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			references: {
				model: 'usuarios',
				key: 'id',
			}
		},
	},
	{
		sequelize,
		tableName: "alunos",
		timestamps: false, // indica que o banco não terá a coluna de registros(tipo um log para as alterações. Esta coluna é para controle do interno do banco de dados), caso omisso, teremos que criar uma coluna para guardar essas informações (createdAt, updatedAt, deactivatedAt). Essas colunas devem ser add apenas nas migration. Não há necesside de colocá-las na model.
	}
);

//aqui faz associação 1:n
ModelAluno.belongsTo(ModelUsuario)

ModelUsuario.hasMany(ModelAluno, {
    foreignKey: "usuarioId"
});

export default ModelAluno;
