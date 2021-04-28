import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

// import das controladoras

import ControllerUsuario from './app/controllers/ControllerUsuario';
import SessionController from './app/controllers/ControllerSessao';
import ControllerArquivo from './app/controllers/ControllerArquivo';
// import ReviewController from './app/controllers/ControllerResenha';

// import do middleware

import autMiddleware from './app/middlewares/autMiddleware';

const routes = new Router();

const upload = multer(multerConfig);

// rotas que não necessitam de autenticação

routes.post('/users', ControllerUsuario.store);
routes.post('/sessions', SessionController.store);
// routes.post('/review', ReviewController.store);

// a partir do use(autMiddleware) necessitará
routes.use(autMiddleware);

routes.put('/users', ControllerUsuario.update);

routes.get('/users', ControllerUsuario.index);

routes.get('/users/show', ControllerUsuario.show);

routes.get('/users/search', ControllerUsuario.search);

routes.post('/files', upload.single('arquivo'), ControllerArquivo.store);

module.exports = routes;
