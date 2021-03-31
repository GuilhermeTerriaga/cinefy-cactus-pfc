// Migração para o banco de dados do  usuario, aqui é onde  a mágica do ORM acontece
// onde a tabela é criada e tudo mais.

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      apelido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hash_senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('usuarios');
  },
};
