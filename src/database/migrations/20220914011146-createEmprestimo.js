'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable("emprestimo", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      emprestimo_Aluno_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            schema: 'schema',
            tableName: 'alunos'
          },
          key: 'id'
        },
        allowNull: false
      },
      emprestimo_Funcionario_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            schema: 'schema',
            tableName: 'funcionarios'
          },
          key: 'id'
        },
        allowNull: false
      },
      emprestimo_Livro_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            schema: 'schema',
            tableName: 'livros'
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
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("emprestimo");
  }
};
