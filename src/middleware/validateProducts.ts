import { Request, NextFunction, Response } from 'express';

import { NewProduct } from '../interfaces/product';

function validateName(name: string) {
  if (!name) return ({ status: 400, message: '"name" is required' });
  if (typeof name !== 'string') return ({ status: 422, message: '"name" must be a string' });
  if (name.length < 2) {
    return ({ status: 422, message: '"name" length must be at least 2 characters long' });
  }
  return null;
}

function validateAmount(amount: string) {
  if (!amount) return ({ status: 400, message: '"amount" is required' });
  if (typeof amount !== 'string') return ({ status: 422, message: '"amount" must be a string' });
  if (amount.length < 2) {
    return ({ status: 422, message: '"amount" length must be at least 3 characters long' });
  }
  return null;
}

export default function validateProduct(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body as NewProduct;
 
  const errorName = validateName(name);
  const errorAmount = validateAmount(amount);
  if (errorName) return res.status(errorName.status).json({ message: errorName.message });
  if (errorAmount) return res.status(errorAmount.status).json({ message: errorAmount.message });
  next();
}
