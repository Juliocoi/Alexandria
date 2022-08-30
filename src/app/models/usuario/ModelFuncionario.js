import ModelUsuario from "./ModelUsuario";
import Sequelize from "sequelize";
import database from "../../../config/database";

const sequelize = new Sequelize(database);

class ModelFuncionario extends ModelUsuario {}
ModelFuncionario.init(
    {
        id: Sequelize.UUIDV4(),
        matricula: Sequelize.INTEGER,
        usuarioId:{
            type: Sequelize.UUIDV4(), //o bd ainda não sabe como gerar esse uuid
            references: {
                model: ModelUsuario,
                key: 'id',
                }
        },
    },
    {
        sequelize,
        modelName: "funcionarios",
        timestamps: false,
    }
);

//aqui faz o relacionamento 1:n
ModelFuncionario.hasOne(ModelUsuario,{
    foreignKey: "usuarioId"
});

export default ModelFuncionario;