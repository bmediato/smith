import { LoginUser, NewUser } from '../interfaces/user';
import * as userModel from '../models/userModel';
import createToken from '../middleware/auth';

export async function create(user:NewUser) {
  const result = await userModel.create(user);
  const token = createToken(result);
  return token;
}

export async function getByName(user: LoginUser) {
  const result = await userModel.getByName(user.username);
  return result;
}