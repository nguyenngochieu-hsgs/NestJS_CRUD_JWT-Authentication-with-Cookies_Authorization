import { AuthService } from './../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    register(createUserDto: CreateUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    login(req: any, res: Response): Promise<{
        message: string;
        success: boolean;
    }>;
    myinfo(req: any): Promise<any>;
}
