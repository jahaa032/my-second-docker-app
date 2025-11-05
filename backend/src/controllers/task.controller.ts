import { JsonController, Get, Post, Param, Body, HttpError, Delete } from "routing-controllers";
import pool from "../db.js";
import type { TaskDTO } from "../types/task.js";

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: 'todo' | 'in_progress' | 'done';
  due_at?: string | null;
  completed_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

@JsonController('/tasks')
export default class TaskController {
  
  @Get('/')
  async getAll(): Promise<Task[]> {
    try {
      const result = await pool.query<Task>('SELECT * FROM tasks ORDER BY created_at DESC');
      return result.rows;
    } catch (err: any) {
      console.error(err);
      throw new HttpError(500, 'Database error');
    }
  }

  @Get('/:id')
  async getOne(@Param('id') id: string): Promise<Task> {
    try {
        const result = await pool.query<Task>('SELECT * FROM tasks WHERE id = $1', [id]);
        if (result.rows.length == 0) {
            throw new HttpError(404, `Task with id ${id} not found`);
        }

        return result.rows[0];
    } catch (err: any) {
      console.error(err);
      throw new HttpError(500, 'Database error');
    }
  }

  @Post('/')
  async create(@Body() task: TaskDTO): Promise<Task> {
    const { title, description } = task;
    if (!title || typeof title !== 'string') {
      throw new HttpError(400, 'Title is required and must be a string');
    }

    try {
      const result = await pool.query<Task>(
        `INSERT INTO tasks (title, description)
         VALUES ($1, $2)
         RETURNING *`,
        [title, description ?? null]
      );
      return result.rows[0];
    } catch (err: any) {
      console.error(err);
      throw new HttpError(500, 'Database error');
    }
  }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<{ message: string }> {
        try {
            const result = await pool.query<Task>('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
            
            if (result.rows.length === 0) {
                throw new HttpError(404, `Task with id ${id} not found`);
            }

            return { message: 'Task deleted successfully' };
        } catch (err: any) {
            console.error(err);
            throw new HttpError(500, 'Database error');
        }
    }
}
