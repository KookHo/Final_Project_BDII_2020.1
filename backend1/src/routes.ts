import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//Rota
//Recurso(users)
//Params:
    //Query params (enviados através da url e.g. algimacoisa?_param_&_param)
    //Route params (usado para identificar recurso na url e.g. ID)
    //Body (corpo da requisição)

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes;