import { Injectable } from '@nestjs/common';
import { JoinUserDto } from './dto/join-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users : JoinUserDto[] = [];

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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
