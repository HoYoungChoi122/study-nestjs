import { IsString, IsInt } from "class-validator";

export class User {

    @IsString()
    userId : string;

    @IsString()
    userPw : string;

    @IsString()
    userName : string;

    @IsInt()
    userAge : number;

    @IsInt()
    phone : string


}