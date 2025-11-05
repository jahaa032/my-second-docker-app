import { Router } from 'express';
import type { Request, Response } from 'express';
import pool from '../db.js';


const router = Router();

router.get('/ping', (_req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

router.get('/', async (_req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err: any) {
    console.error(err instanceof Error ? err.message: err);
    res.status(500).json({ error: 'Database error', details: err instanceof Error? err.message: String(err) });
  }
  });

  router.post('/', async (req: Request<{}, {},{ title: string; description?: string}>,  res: Response) => {
    try {
        const { title, description } = req.body ?? {};
        
        if(!title || typeof title !== 'string'){
        return res.status(400).json({ error: 'Title is required to be a string' });
    }

    const result = await pool.query(
       `INSERT INTO tasks (title, description)
        VALUES ($1, $2)
        RETURNING *`,
            [ title, description ?? null ]
        );

        res.status(201).json(result.rows[0]);
        } catch ( err: any ){
            console.error(err);
            res.status(500).json({ error: 'Database error', details: err instanceof Error ? err.message: String(err)});
        }
  });


export default router;