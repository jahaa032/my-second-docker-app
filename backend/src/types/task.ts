export interface TaskDTO {
    title: string;
    description: string;
    status: string;
}
export type TaskJobData =
| {type: "create"; body: TaskDTO}
| {type: "update"; id: string; body: Partial<TaskDTO>}
| {type: "delete"; id: string};