import { Router } from 'express';
import { login, register } from '../controllers/auth';

const router = Router();

/**
 * http://localhost:3002/auth/login
 */

router.post('/register', register);
router.post('/login', login);

export { router };