import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

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

routes.post("/settings", settingsController.create);

export {routes}