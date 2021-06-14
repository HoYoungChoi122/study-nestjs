import {Controller, Request, Get, Post, UseGuards, Query} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from "./api/auth/auth.service";
import {UserService} from "../dist/user/user.service";
import {UsersService} from "./api/users/users.service";

@Controller()
export class AppController {
  constructor(private userService : UsersService) {
  }

  @UseGuards(AuthGuard('local'))
  @Get('/auth/login')
  async login(@Request() req) {
    return req.user;

  }

  // @Get('/auth/login')
  // async test(@Query() q : any){
  //   const user = await this.userService.findOne(q.username);
  //   return user;
  // }

  @Get('/index')
  async getIndex(){
    return {index:"index"};
  }


}