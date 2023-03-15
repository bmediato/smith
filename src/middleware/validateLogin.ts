import { Request, NextFunction, Response } from 'express';

import { LoginUser } from '../interfaces/user';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body as LoginUser;

  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });
  next();
}
