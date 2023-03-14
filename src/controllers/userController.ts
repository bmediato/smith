import { Request, Response } from 'express';
import { NewUser } from '../interfaces/user';
import userService from '../services/userService';

export default async function create(req:Request, res: Response) {
  const user = req.body as NewUser;
  const token = await userService(user);

  return res.status(201).json({ token });
}