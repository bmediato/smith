export interface LoginUser {
  username: string;
  password: string;
}

export interface NewUser extends LoginUser{
  vocation: string;
  level: number;
}

export interface User extends NewUser{
  id:number;
 
}