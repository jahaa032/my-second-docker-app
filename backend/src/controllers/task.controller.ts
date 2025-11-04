import { Controller } from "routing-controllers";

@Controller('/tasks')
export default class TaskController {
    @Post('/')
    async createTask()
}
