import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(userId: string, userPassword: string): Promise<any> {
        const user = await this.usersService.findOne(userId);
        if (user && user.userPw === userPassword) {
            const { userPw , ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.userName, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}