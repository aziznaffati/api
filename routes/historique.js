import express from 'express';

import { getHistorique, getHisto, createHistorique, updateHistorique, deleteHistorique } from '../controlleur/historique.js'

const router = express.Router();

router.post('/', createHistorique);
router.get('/', getHistorique);
router.get('/:mat/:sn', getHisto);
router.patch('/:sn', updateHistorique);
router.delete('/:id', deleteHistorique);


export default router;