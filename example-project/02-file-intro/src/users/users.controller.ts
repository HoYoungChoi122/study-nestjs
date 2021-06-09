import { Get, Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    findAll(): string{

        return "기본경로 >/users< 에 대한 요청 처리 메소드 "

    }



}
