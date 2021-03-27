import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    // cria o servidor
    this.server = express();
    // confugura as rotas
    this.routes();
    // sobe os middlewares
    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files'.express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
