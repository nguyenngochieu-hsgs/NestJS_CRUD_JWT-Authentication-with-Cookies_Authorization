import { UpdateTaskDto } from './dto/update-task.dto';
import { UserEntity } from './../user/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';
export declare class TaskService {
    private taskRepository;
    private userRepository;
    constructor(taskRepository: Repository<TaskEntity>, userRepository: Repository<UserEntity>);
    getAllTasks(userId: string): Promise<TaskEntity[]>;
    getTaskById(userId: string, taskId: number): Promise<TaskEntity>;
    createTask(userId: string, createTaskDto: CreateTaskDto): Promise<TaskEntity>;
    updateTask(userId: string, taskId: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity>;
    deleteTask(userId: string, taskId: number): Promise<TaskEntity>;
}
