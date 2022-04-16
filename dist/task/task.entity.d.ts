import { UserEntity } from 'src/user/user.entity';
export declare class TaskEntity {
    id: number;
    title: string;
    description: string;
    user: UserEntity;
}
