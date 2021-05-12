module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('usuarios', 'lista_id', {
      type: Sequelize.INTEGER,
      references: { model: 'listas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: async (queryInterface) =>
    queryInterface.removeColumn('usuarios', 'lista_id'),
};
