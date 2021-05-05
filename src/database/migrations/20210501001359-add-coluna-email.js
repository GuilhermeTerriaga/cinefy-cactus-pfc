module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('usuarios', 'email', {
      type: Sequelize.STRING,
      allowNul: false,
      unique: true,
    }),
  down: async (queryInterface) =>
    queryInterface.removeColumn('usuarios', 'email'),
};
