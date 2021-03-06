import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

// import das controladoras

import ControllerUsuario from './app/controllers/ControllerUsuario';
import SessionController from './app/controllers/ControllerSessao';
import ControllerArquivo from './app/controllers/ControllerArquivo';
import ControllerResenha from './app/controllers/ControllerResenha';

// import do middleware

import autMiddleware from './app/middlewares/autMiddleware';

const routes = new Router();

const upload = multer(multerConfig);

// rotas que não necessitam de autenticação

routes.post('/users', ControllerUsuario.store); // se cadastrar
routes.post('/sessions', SessionController.store); // Logar
routes.post('/review', ControllerResenha.store); // Guarda Resenha
routes.get('/users', ControllerUsuario.index); // mostra todos os usuários do sistema

// a partir do use(autMiddleware) necessitará
routes.use(autMiddleware);

routes.put('/users', ControllerUsuario.update); // atualizar os proprios dados

routes.get('/users/show', ControllerUsuario.show); // visualiza apenas ele mesmo

routes.get('/users/search', ControllerUsuario.search); // visualiza apenas um, o que ele buscar

routes.post('/files', upload.single('arquivo'), ControllerArquivo.store);

// delete

module.exports = routes;
