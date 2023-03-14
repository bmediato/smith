import { NewUser } from '../interfaces/user';
import userModel from '../models/userModel';
import createToken from '../middleware/auth';

export default async function create(user:NewUser) {
  const result = await userModel(user);
  const token = createToken(result);
  return token;
}