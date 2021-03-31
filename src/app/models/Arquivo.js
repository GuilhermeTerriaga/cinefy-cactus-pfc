import Sequelize, { Model } from 'sequelize';

class Arquivo extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        caminho: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/arquivos/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
  }
}

export default Arquivo;
