const ModelUsuario = require("./ModelUsuario");
import Sequelize from "sequelize";
const database = require('../../../config/database');

const sequelize = new Sequelize(database);

class ModelFuncionario extends ModelUsuario {}
ModelFuncionario.init(
    {
        id: Sequelize.UUIDV4(),
        matricula: Sequelize.INTEGER,
        usuarioId:{
            type: Sequelize.UUIDV4(), //o bd ainda não sabe como gerar esse uuid
            references: {
                model: Usuario,
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