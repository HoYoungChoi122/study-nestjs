import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { JoinUserDto } from './dto/join-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {LoginUserDto} from "./dto/login-user.dto";


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('join')
  create(@Body() user : JoinUserDto) {
    return this.usersService.create(user);
  }

  @Post('login')
  async loginUser(@Body() userInfo : LoginUserDto ) {

    const { result , user } = await this.usersService.loginUser(userInfo);
    // const payload = await "auth서비스에서 token 만들기";

    return {
      result,
      ...user,
      payload : "토큰"

    }




  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }


}
