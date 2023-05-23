import { Router } from 'express';
import { getAll, getOne, post, softDelete, deleteForce, restore, update } from '../controllers/CategoryController';

const router = Router();

router.get('/category', getAll);
router.get('/category/:id', getOne);
router.post('/category/create', post);
router.put('/category/:id', update);
router.patch('/category/restore/:id', restore);
router.delete('/category/:id', softDelete);
router.delete('category/deleteforce/:id', deleteForce);

export default router;
