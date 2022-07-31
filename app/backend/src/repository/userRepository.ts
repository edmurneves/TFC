import Model from '../database/models/User';
import { IUserModel, IUser } from '../interfaces';

export default class UserRepository implements IUserModel {
  constructor(private model = Model) {
    this.model = model;
  }

  async findUser(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }

  async findRole(password: string): Promise<IUser | null> {
    const role = await this.model.findOne({ where: { password },
      attributes: { exclude: ['id', 'username', 'email', 'password'] } });
    return role;
  }
}
