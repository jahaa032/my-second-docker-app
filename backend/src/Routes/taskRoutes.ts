import { Router } from 'express';
import { getAllTasks } from '../controllers/taskController';

const router = Router();
router.get('/tasks', getAllTasks);

export default router;
