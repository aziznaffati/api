import express from 'express';

import { getProduit, createProduit, updateProduit, getProd, deleteProduit } from '../controlleur/produit.js'

const router = express.Router();

router.post('/', createProduit);
router.get('/', getProduit);
router.get('/:sn', getProd);
router.patch('/:sn', updateProduit);
router.delete('/:id', deleteProduit);


export default router;