import { Router } from 'express';
import { deleteItem, getItem, getItems, insertItem, updateItem } from '../controllers/item';
import { logMiddleware } from '../middleware/log';

const router = Router();

/**
 * http://localhost:3002/items
 */
router.get('/:id', logMiddleware, getItem);
router.get('/', getItems);
router.post('/', insertItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export { router };