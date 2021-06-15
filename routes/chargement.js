import express from 'express';

import { getChargement, getch, createChargement, updateChargement, deleteChargement } from '../controlleur/chargement.js'

const router = express.Router();

router.post('/', createChargement);
router.get('/', getChargement);
router.get('/:sn', getch);
router.patch('/:sn', updateChargement);
router.delete('/:snC', deleteChargement);


export default router;