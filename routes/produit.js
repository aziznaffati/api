import express from 'express';

import { getProduit, createProduit, updateProduit, getProd, deleteProduit, updateQteProduit } from '../controlleur/produit.js'

const router = express.Router();

router.post('/', createProduit);
router.get('/', getProduit);
router.get('/:sn', getProd);
router.patch('/:sn', updateProduit);
router.patch('/updateqte/:sn', updateQteProduit);
router.delete('/:sn', deleteProduit);


export default router;