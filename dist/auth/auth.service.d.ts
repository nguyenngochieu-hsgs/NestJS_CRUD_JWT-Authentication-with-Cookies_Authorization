import { ConfigService } from '@nestjs/config';
import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        token: string;
    }>;
}
