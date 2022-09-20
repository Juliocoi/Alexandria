'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("emprestimo", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      alunoId: {
        type: Sequelize.UUID,
        allowNull: false,       
        references: {
          model: {
            schema: "schema",
            tableName: "alunos"
          },
          key: "id"
        },
      },
      funcionarioId: {
        type: Sequelize.UUID,
        allowNull: false,       
        references: {
          model: {
            schema: "schema",
            tableName: "funcionarios"
          },
          key: "id"
        },
      },
      livroId: {
        type: Sequelize.UUID,
        allowNull: false, 
        references: {
          model: {
            schema: "schema",
            tableName: "livros"
          },
          key: "id"
        },
      },
      dataEmprestimo: {
        type: Sequelize.DATE,
        allowNull: false
      },
      estimativaEntrega: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    return await queryInterface.dropTable("emprestimo");
  }
};
