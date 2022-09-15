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
		modelName: "alunos",
		timestamps: false,		
	}
);

export default ModelAluno;
