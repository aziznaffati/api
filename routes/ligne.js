import express from 'express';

import { getLigne, createLigne, updateLigne, getLine, deleteLigne } from '../controlleur/ligne.js'

const router = express.Router();

router.post('/', createLigne);
router.get('/', getLigne);
router.get('/:sn', getLine);
router.patch('/:sn', updateLigne);
router.delete('/:snp', deleteLigne);


export default router;