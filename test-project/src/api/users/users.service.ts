import { Injectable } from '@nestjs/common';
import { JoinUserDto } from './dto/join-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = any;

@Injectable()
export class UsersService {
  // private users : JoinUserDto[] = [];


  private readonly users =  [
    {
      userId: "12",
      userPw: '12',
      userName: 'hoyoung',
    },
    {
      userId: "john",
      userPw: "changme",
      userName: 'john',
    },
    {
      userId: "123",
      userPw: '2613',
      userName: 'choi ho young',
    },
  ];



  create(user: JoinUserDto) {
    try{
      this.users.push(user)
      return {
        result : true,
        message: "가입 성공"
      }
    } catch (e){
      return {
        result : false,
        message : e.message
      }
    }
  }

  loginUser({ userId  , userPw }) {
    const user  = this.users.find( e => e.userId ===userId && e.userPw === userPw );

    if(user){
      return {
        result : true,
        user : user,
        message : "로그인에 성공하였습니다."
      }
    }else{
      return {
        result : false,
        message : "아이디나 비밀번호를 확인하세요"
      }
    }
      
  }

  async findOne(userId: string): Promise<User | undefined> {
    // console.log("here")
    return this.users.find(user => user.userId === userId);
    // return this.users1.find(user => user.username === username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
