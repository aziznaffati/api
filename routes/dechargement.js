import express from 'express';

import { getDechargement, getDech, createDechargement, updateDechargement, deleteDechargement } from '../controlleur/dechargement.js'

const router = express.Router();

router.post('/', createDechargement);
router.get('/', getDechargement);
router.get('/:sn', getDech);
router.patch('/:sn', updateDechargement);
router.delete('/:snC', deleteDechargement);


export default router;