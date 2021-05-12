module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('resenhas', 'usuario_id', {
      type: Sequelize.INTEGER,
      references: { model: 'usuarios', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: async (queryInterface) =>
    queryInterface.removeColumn('resenhas', 'usuario_id'),
};
