import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';
import { MessagesController } from './controllers/MessagesController';

const routes = Router();
/**
    GET = BUSCAS
    POST = CRIAÇÃO
    PUT = ALTERAÇÃO
    DELETE = DELETAR
    PATCH = ALTERAR UMA INFORMAÇÃO ESPECÍFICA
 */

/**
    Tipos de parâmetros

    Routes Params => Parâmetros de rotas
    Query Params => Filtros e buscas
    Body Params => {

    }
 */
const settingsController = new SettingsController();
const usersController    = new UsersController();
const messagesController    = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export {routes}