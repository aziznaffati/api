import express from 'express';

import { getHistorique, getHisto, createHistorique, updateHistorique, deleteHistorique, getHistoriqueWithMat } from '../controlleur/historique.js'

const router = express.Router();

router.post('/', createHistorique);
router.get('/', getHistorique);
router.get('/:mat/:sn', getHisto);
router.get('/:mat', getHistoriqueWithMat);
router.patch('/:sn', updateHistorique);
router.delete('/:mat', deleteHistorique);


export default router;