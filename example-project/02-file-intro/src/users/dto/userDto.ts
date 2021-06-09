export class LoginUserDto{
    private _userId : string;
    private _userPw : string;

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get userPw(): string {
        return this._userPw;
    }

    set userPw(value: string) {
        this._userPw = value;
    }
}

export class FindUserDto{
    private _userPhone : string;
    private _userName : string;


    get userPhone(): string {
        return this._userPhone;
    }

    set userPhone(value: string) {
        this._userPhone = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }
}