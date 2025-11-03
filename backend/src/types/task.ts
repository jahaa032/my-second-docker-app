import express from 'express';
import {getAllTasks} from '..task.controller.ts';

const router = express.Router();

router.get('/tasks', getAllTasks)

export default router;