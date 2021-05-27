import express from 'express';

import {  getPanne, createPanne, getPane,updatePanne, deletePanne } from '../controlleur/panne.js'

const router = express.Router();

router.post('/', createPanne);
router.get('/', getPanne);
router.get('/:mat', getPane);
router.put('/:id', updatePanne);
router.delete('/:id', deletePanne);



export default router;