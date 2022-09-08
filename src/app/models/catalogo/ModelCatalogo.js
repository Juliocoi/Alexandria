import { Sequelize, DataTypes, Model } from "sequelize";
import database from "../../../config/database";


const sequelize = new Sequelize(database);

class ModelCatalogo extends Model{}

ModelCatalogo.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
                        
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        edicao: {
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
    },
    {
        sequelize,
        modelName: "catalogos",
        timestamps: false,
    }
);
 
export default ModelCatalogo;
