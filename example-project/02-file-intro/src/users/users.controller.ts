import {Get, Post, Controller, Query , ParseIntPipe,Param} from '@nestjs/common';
import {FindUserDto, LoginUserDto} from "./dto/userDto";
import e from "express";

@Controller('users')
export class UsersController {
    //test Temp Data
    private _usersInfo:any = [
        {
            id : "1a",
            pw : "1234",
            name : "hoyoung",
            phone : "01000000001",
        },
        {
            id : "2b",
            pw : "1234",
            name : "taehun",
            phone : "01000000002",
        },
        {
            id : "3c",
            pw : "1234",
            name : "majin",
            phone : "01000000003",
        },
    ]

    get usersInfo() {
        return this._usersInfo;
    }

    @Get()
    notFound() : string {
        return "잘못된 접근방식입니다."
    }


    @Get('userAll')
    userAll(): any {
        return this.usersInfo;
    }

    //원래는 포스트 형식이나 테스트를 위해 get으로 진행
    @Get('/login')
    LoginUser(@Query() user :LoginUserDto ):any{
        // url에 포함되어야 할 정보
        // http://localhost:3000/users/login?userId=1a&userPw=1234

        // userId : string;
        // userPw : string;
        // userName : string;
        // userPhoneNumber : string;
        let userInfo = this.usersInfo.find(e => e.id === user.userId)
        if(userInfo && userInfo.pw == user.userPw){

            return {
                userName:userInfo.name,
                phone:userInfo.phone,
                userId:userInfo.id,
            }

        }else {
            return "조회되는 ID가 없습니다."
        }


    }

    @Get("/find")
    FindUser(@Query() user : FindUserDto ):any{
        // url에 포함되어야 할 정보
        // http://localhost:3000/users/find?userName=taehun&userPhone=01000000002
        let userInfo = this.usersInfo.find(e => e.name === user.userName && e.phone === user.userPhone );

        if(userInfo){
            return {
                userId:userInfo.id,
                userPw:userInfo.pw,
            }
        }else {
            return "조회되는 정보가 없습니다."
        }

        return "해당 유저의 정보입니다."
    }


}
