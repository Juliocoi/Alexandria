import ModelUsuario from "./ModelUsuario";
import Sequelize, { Model } from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelFuncionario extends Model {}

ModelFuncionario.init(
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
        modelName: "funcionarios",
        timestamps: false, // indica que o banco não terá a coluna de registros(tipo um log para as alterações. Esta coluna é para controle do interno do banco de dados), caso omisso, teremos que criar uma coluna para guardar essas informações (createdAt, updatedAt, deactivatedAt). Essas colunas devem ser add apenas nas migration. Não há necesside de colocá-las na model.
    }
);

//aqui faz o relacionamento 1:n
ModelFuncionario.hasOne(ModelUsuario,{
    foreignKey: "usuarioId"
});

export default ModelFuncionario;