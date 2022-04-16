import { TaskEntity } from "src/task/task.entity";
export declare class UserEntity {
    id: number;
    username: string;
    password: string;
    tasks: TaskEntity[];
    hashPassword(): Promise<void>;
}
