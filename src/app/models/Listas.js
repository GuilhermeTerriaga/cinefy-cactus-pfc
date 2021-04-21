import Sequelize, { Model } from 'sequelize';

class Listas extends Model {
  static init(sequelize) {
    super.init(
      {
        dados_listas: Sequelize.JSON,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
  }
}

export default Listas;
