import { Request, Response } from 'express';
import { NewUser, LoginUser } from '../interfaces/user';
import createToken from '../middleware/auth';
import * as userService from '../services/userService';

export async function create(req:Request, res: Response) {
  const user = req.body as NewUser;
  const token = await userService.create(user);

  return res.status(201).json({ token });
}

export async function login(req: Request, res: Response) {
  const user = req.body as LoginUser;
  const result = await userService.getByName(user);

  if (result.length === 0 || result[0].password !== user.password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const users = result[0];
  const token = createToken(users);
  return res.status(200).json({ token });
}