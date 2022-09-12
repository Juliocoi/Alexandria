import { Sequelize, DataTypes, Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelAluno extends Model {};

ModelAluno.init(
	{
		id:{
			type: DataTypes.UUIDV4,
			primaryKey: true
		},
		matricula:{
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: true
		},
		nome:{
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		email:{
			type: DataTypes.STRING(45),
			allowNull: false,
		},
		dataDeNascimento:{
			type: DataTypes.DATE,
			allowNull: false
		},
		mae:{
			type: DataTypes.STRING(100),
			allowNull: false
		},
		pai:{
			type: DataTypes.STRING(100),
			allowNull: true
		}
	},
	{
		sequelize,
		modelName: "ModelAluno",
		timestamps: true, // indica que o banco terá a coluna de registros(tipo um log para as alterações. Esta coluna é para controle do interno do banco de dados), caso omisso, teremos que criar uma coluna para guardar essas informações (createdAt, updatedAt, deactivatedAt). Essas colunas devem ser add apenas nas migration. Não há necesside de colocá-las na model.
		tableName: 'Alunos'
	}
);

export default ModelAluno;
