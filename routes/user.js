import express from 'express';

import { getUser, getUs, createUser, updateUser, deleteUser } from '../controlleur/user.js'

const router = express.Router();

router.post('/', createUser);
router.get('/', getUser);
router.get('/:mat', getUs);
router.patch('/:mat', updateUser);
router.delete('/:id', deleteUser);


export default router;