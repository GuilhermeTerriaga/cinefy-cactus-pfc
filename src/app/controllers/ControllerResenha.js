import * as Yup from 'yup';
import Resenha from '../models/Resenha';

class ControllerResenha {
  async store(req, res) {
    const schema = Yup.object().shape({
      titulo: Yup.string().required(),
      corpo: Yup.string().required(),
      nota: Yup.integer().required().min(1),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Erro na validação dos dados enviados',
      });
    }

    const { titulo, corpo, nota } = await Resenha.create(req.body);

    return res.json({
      titulo,
      corpo,
      nota,
    });
  }
}
export default new ControllerResenha();
