import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'userId',
            passwordField: 'userPw',
        });
    }

    async validate(userId: string, userPw: string): Promise<any> {
        try{

            const user = await this.authService.validateUser(userId, userPw);
            if (!user) {
                throw new UnauthorizedException("이름이나 비밀번호가 틀렸습니다.");
            }

            return user;

        }catch (e){

            return  { LoginError : e.message || e} ;

        }
    }
}