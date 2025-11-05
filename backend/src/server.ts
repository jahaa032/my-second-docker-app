import app from './app.js';
import tasksRouter from './routes/tasks.js';


app.use('/api/v1/tasks', tasksRouter);

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
