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
        references: {
          model: {
            tableName: 'alunos',
          },
          key: 'id'
        },
        allowNull: false
      },
      funcionarioId: {
        type: Sequelize.UUID,       
        references: {
          model: {
            tableName: 'funcionarios',
          },
          key: 'id'
        },
        allowNull: false
      },
      livroId: {
        type: Sequelize.UUID,       
        references: {
          model: {
            tableName: 'livros',
          },
          key: 'id'
        },
        allowNull: false
      },
      dataEmprestimo: {
        type: Sequelize.DATE,
        allowNull: false
      },
      estimativaEntrega: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dataEntrega: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("emprestimo");
  }
};
