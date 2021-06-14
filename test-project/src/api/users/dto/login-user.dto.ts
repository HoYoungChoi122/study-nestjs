import {JoinUserDto} from "./join-user.dto";

export class LoginUserDto extends JoinUserDto {
    userId : string;
    userPw : string;
}
