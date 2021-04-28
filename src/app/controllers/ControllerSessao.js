import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Usuario from '../models/Usuario';
import autConfig from '../../config/auth';

class ControllerSessao {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      senha: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Erro na validação dos dados enviados, manda direito Gu!',
      });
    }
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }
    if (!(await usuario.verificarSenha(senha))) {
      return res.status(401).json({ error: 'Senhas não batem' });
    }
    const { id, apelido } = usuario;

    return res.json({
      usuario: {
        id,
        apelido,
        email,
      },
      token: jwt.sign({ id }, autConfig.secret, {
        expiresIn: autConfig.expiresIn,
      }),
    });
  }
}

export default new ControllerSessao();
