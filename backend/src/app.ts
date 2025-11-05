import 'reflect-metadata';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { createExpressServer } from 'routing-controllers';

// import { errorHandler } from './middlewares/error.handler.js';
import { HealthController } from './controllers/health.controller.js';
import { PingController } from "./controllers/ping.controller.js";
import TaskController from './controllers/task.controller.js';

const app = createExpressServer({
  routePrefix: '/api',      
  controllers: [
    HealthController,
    PingController,
    TaskController,
  ],
  validation: true,
  classTransformer: true,
  defaultErrorHandler: false,
});

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
// app.use(errorHandler);

export default app;

