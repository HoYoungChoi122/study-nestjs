import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    console.log("controller start")
    return {
      result : false,
      message : "안녕"
    };
  }
  @Get('/test')
  getTest() : any{
    console.log("controller start")
    return {
      test:true,
      message : "test message"
    }
  }


}
