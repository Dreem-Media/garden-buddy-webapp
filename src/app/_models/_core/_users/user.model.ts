import { User } from "../../../api/models/user";

export class UserModel implements User {
  email: string;

  constructor(user: User) {
    this.email = user.email;
  }
}