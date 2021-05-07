import * as Yup from 'yup';
// import Resenha from '../models/Resenha';

class ControllerResenha {
  async store(req, res) {
    const schema = Yup.object().shape({
      titulo: Yup.string().required(),
      corpo: Yup.string().required(),
      nota: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Erro na validação dos dados enviados',
      });
    }
    const testeFuncionando = 'Esta vindo até aqui e tudo bem';
    const { titulo, corpo, nota } = req.body;

    return res.json({
      testeFuncionando,
      titulo,
      corpo,
      nota,
    });
  }
}
export default new ControllerResenha();
