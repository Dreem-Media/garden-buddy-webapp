import { NewUser } from "src/app/api/models";

export class NewUserModel implements NewUser {
  email: string;
  password: string;

  constructor(newUser: NewUserModel) {
    this.email = newUser.email;
    this.password = newUser.password;
  }
}