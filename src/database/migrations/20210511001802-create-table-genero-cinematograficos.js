module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('usuarios', 'genero_cinematografico_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    }),

  down: async (queryInterface) =>
    queryInterface.removeColumn('usuarios', 'genero_cinematografico_id'),
};

// 20210511000921-add-column-usuario-genero-cinematografico
