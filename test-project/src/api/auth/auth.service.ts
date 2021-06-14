import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(userId: string, userPassword: string): Promise<any> {
        const user = await this.usersService.findOne(userId);
        if (user && user.userPw === userPassword) {
            const { userPw , ...result } = user;
            return result;
        }
        return null;
    }
}