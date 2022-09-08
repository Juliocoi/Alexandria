import { Sequelize, DataTypes, Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelUsuario extends Model {};

ModelUsuario.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        dataDeNascimento: {
            type: DataTypes.DATE,
            allowNull: false
        },

        mae: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pai: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        modelName: "usuarios", //colocar o nome como tá na migrations
        timestamps: false, // indica que o banco não terá a coluna de registros(tipo um log para as alterações. Esta coluna é para controle do interno do banco de dados), caso omisso, teremos que criar uma coluna para guardar essas informações (createdAt, updatedAt, deactivatedAt). Essas colunas devem ser add apenas nas migration. Não há necesside de colocá-las na model.
    }
);

export default ModelUsuario;
