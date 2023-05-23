import { Router } from 'express';
import { getAll, getOne, post, update, softDelete, deleteForce, restore } from '../controllers/ProductController';

const router = Router();

router.get('/products', getAll);
router.get('/products/:id', getOne);
router.post('/products/create', post);
router.put('/products/:id', update);
router.delete('/products/:id', softDelete);
router.delete('/products/deleteforce/:id', deleteForce);
router.patch('/products/restore/:id', restore);

export default router;
