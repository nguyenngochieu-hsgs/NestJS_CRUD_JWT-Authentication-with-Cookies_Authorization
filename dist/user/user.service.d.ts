import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    validate(username: string, password: string): Promise<UserEntity>;
    create(createUserDto: CreateUserDto): Promise<{
        userId: number;
        username: string;
    }>;
    findById(id: string): Promise<{
        id: number;
        username: string;
    }>;
}
