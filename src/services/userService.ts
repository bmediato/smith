import { NewUser } from '../interfaces/user';
import * as userModel from '../models/userModel';
import createToken from '../middleware/auth';

export async function create(user:NewUser) {
  const result = await userModel.create(user);
  const token = createToken(result);
  return token;
}

export async function getByName(username:string) {
  const result = await userModel.getByName(username);

  return result;
}