import { Request, NextFunction, Response } from 'express';
import { NewUser } from '../interfaces/user';

function validateUserName(username: string) { 
  if (!username) return ({ status: 400, message: '"username" is required' });
  if (typeof username !== 'string') {
    return ({ status: 422, message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return ({ status: 422, message: '"username" length must be at least 3 characters long' });
  }
  return null;
}

function validateVocation(vocation: string) { 
  if (!vocation) return ({ status: 400, message: '"vocation" is required' });
  if (typeof vocation !== 'string') {
    return ({ status: 422, message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return ({ status: 422, message: '"vocation" length must be at least 3 characters long' });
  }
  return null;
}

function validateLevel(level: number) { 
  if (level < 1) {
    return ({ status: 422, message: '"level" must be greater than or equal to 1' });
  }
  if (!level) return ({ status: 400, message: '"level" is required' });
  if (typeof level !== 'number') {
    return ({ status: 422, message: '"level" must be a number' });
  }
  return null;
}

function validatePassword(password: string) { 
  if (!password) return ({ status: 400, message: '"password" is required' });
  if (typeof password !== 'string') {
    return ({ status: 422, message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return ({ status: 422, message: '"password" length must be at least 8 characters long' });
  }
  return null;
}

export default function validateUser(req: Request, res: Response, next: NextFunction) {
  const { username, vocation, level, password } = req.body as NewUser;

  const errorUN = validateUserName(username);
  const errorV = validateVocation(vocation);
  const errorL = validateLevel(level);
  const errorP = validatePassword(password);

  if (errorUN) return res.status(errorUN.status).json({ message: errorUN.message });
  if (errorV) return res.status(errorV.status).json({ message: errorV.message });
  if (errorL) return res.status(errorL.status).json({ message: errorL.message });
  if (errorP) return res.status(errorP.status).json({ message: errorP.message });

  next();
}