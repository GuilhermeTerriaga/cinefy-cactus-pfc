import * as Yup from 'yup';
import Usuario from '../models/Usuario';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      apelido: Yup.string().required(),
      email: Yup.string().email().required(),
      senha: Yup.string().required().min(8),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Erro de validação' });
    }
    const usuarioExistente = await Usuario.findOne({
      where: { email: req.body.email },
    });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Usuário já existente' });
    }
    const { id, apelido, email } = await Usuario.create(req.body);

    return res.json({
      id,
      apelido,
      email,
    });
  }
}

export default new UserController();
