import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { Response } from 'express';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto, req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll(req: any, res: Response): Promise<Response<any, Record<string, any>>>;
    getOne(taskId: string, res: Response, req: any): Promise<Response<any, Record<string, any>>>;
    updateOne(updateTaskDto: UpdateTaskDto, taskId: string, res: Response, req: any): Promise<Response<any, Record<string, any>>>;
    deleteOne(taskId: string, res: Response, req: any): Promise<Response<any, Record<string, any>>>;
}
