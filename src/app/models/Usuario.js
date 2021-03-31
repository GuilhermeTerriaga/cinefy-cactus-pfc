import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        apelido: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        hash_senha: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.hash_senha = await bcrypt.hash(usuario.senha, 8);
      }
    });
    return this;
  }

  verificarSenha(senha) {
    return bcrypt.compare(senha, this.hash_senha);
  }

  static associate(models) {
    this.belongsTo(models.Arquivo, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Usuario;
