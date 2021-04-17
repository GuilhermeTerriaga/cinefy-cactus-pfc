import Sequelize, { Model } from 'sequelize';

class Resenha extends Model {
  static init(Sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        corpo: Sequelize.TEXT,
        nota: Sequelize.INTEGER,
      },
      {
        Sequelize,
      }
    );
    return this;
  }
}
export default Resenha;
