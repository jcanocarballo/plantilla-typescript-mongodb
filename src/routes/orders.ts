import { Router } from 'express';
import { getItems } from '../controllers/order';
import { checkSession } from '../middleware/session';

const router = Router();

/**
 * http://localhost:3002/orders
 */
router.get('/',[checkSession], getItems);
export { router };