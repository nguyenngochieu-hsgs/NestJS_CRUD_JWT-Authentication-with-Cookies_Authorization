import { ConfigService } from '@nestjs/config';
import { UserService } from './../user/user.service';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    private configService;
    constructor(userService: UserService, configService: ConfigService);
    validate(payload: any): Promise<{
        id: number;
        username: string;
    }>;
}
export {};
