import Arquivo from '../models/Arquivo';

class ControllerArquivos {
  async store(req, res) {
    const { nomeoriginal: nome, nomearquivo: caminho } = req.file;

    const arquivo = await Arquivo.create({
      nome,
      caminho,
    });
    return res.json(arquivo);
  }
}

export default ControllerArquivos();
