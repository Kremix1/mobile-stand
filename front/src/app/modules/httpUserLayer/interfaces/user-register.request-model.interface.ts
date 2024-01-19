export interface IUserRegisterRequestModel{
    username: string,
    password: string,
    guid?: string

    scopeList?: string[];
}
