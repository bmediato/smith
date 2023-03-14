import { Request, Response } from 'express';

import productService from '../services/productService';

export default async function getAll(req: Request, res: Response) {
  const result = await productService();
  res.status(200).json(result);
}