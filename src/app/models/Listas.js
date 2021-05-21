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
}

export default Listas;
