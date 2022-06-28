import { Role } from "./role";



export class User {
    id: number;
    username: string;
    role: Role;
    token?: string;

  constructor(
    id: number, 
    username: string, 
    role: Role, 
    token?: string
) {
    this.id = id
    this.username = username
    this.role = role
    this.token = token
  }

}

export class UserLogin{

  email: string;

  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }
  password: string;

}
