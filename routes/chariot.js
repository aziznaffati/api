import express from 'express';

import { getChariot,createChariot,getC,updateChar,deleteChariot } from '../controlleur/chariot.js'

const router = express.Router();

router.post('/', createChariot);
router.get('/', getChariot);
router.get('/:snC', getC);
router.patch('/:snC', updateChar);
router.delete('/:snC', deleteChariot);


export default router;