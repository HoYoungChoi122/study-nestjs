import {Controller, Request, Get, Post, UseGuards, Query} from '@nestjs/common';
import {UsersService} from "./api/users/users.service";
import {LocalAuthGuard} from "./api/auth/local-auth.guard";
import {AuthService} from "./api/auth/auth.service";
import {JwtAuthGuard} from "./api/auth/jwt-auth.guard";


@Controller()
export class AppController {
  constructor(private userService : UsersService,private authService: AuthService ) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req) {
   return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
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