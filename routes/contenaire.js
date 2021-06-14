import express from 'express';

import { createContenaire, getCont, getContenaires,updateContenaire,deleteContenaire} from '../controlleur/contenaire.js'

const router = express.Router();

router.post('/', createContenaire);
router.get('/', getContenaires);
router.get('/:snC',getCont );
router.patch('/:snc', updateContenaire);
router.delete('/:snC/:nserieProduit', deleteContenaire);


export default router;