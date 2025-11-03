import { Request, Response } from 'express';
import db from '../db';

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

