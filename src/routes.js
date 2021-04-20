import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

// import das controladoras

import UserController from './app/controllers/ControllerUsuario';
import SessionController from './app/controllers/ControllerSessao';
import FileController from './app/controllers/ControllerArquivos';
import ReviewController from './app/controllers/ControllerResenha';

// import do middleware

import autMiddleware from './app/middlewares/autMiddleware';

const routes = new Router();

const upload = multer(multerConfig);

// rotas que não necessitam de autenticação

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/review', ReviewController.store);

// a partir do use(autMiddleware) necessitará
routes.use(autMiddleware);

routes.put('/users', UserController.update);

routes.get('/users', UserController.index);

routes.get('/users/show', UserController.show);

routes.post('/files', upload.single('arquivo'), FileController.store);

module.exports = routes;
