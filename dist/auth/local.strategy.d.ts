import { AuthService } from './auth.service';
import { Strategy } from "passport-local";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(request: Request, username: string, password: string): Promise<any>;
}
export {};
