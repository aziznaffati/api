import express from 'express';

import { getEnvChariot,createEnvChariot,getEnvC,updateChar,deleteChariot } from '../controlleur/chariot.js'

const router = express.Router();

router.post('/CEnv', createEnvChariot);
router.get('/', getEnvChariot);
router.get('/:snC', getEnvC);
router.patch('/:snC', updateChar);
router.delete('/:id', deleteChariot);


export default router;