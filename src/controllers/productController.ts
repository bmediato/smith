import { Request, Response } from 'express';
import { NewProduct } from '../interfaces';

import * as productService from '../services/productService';

export async function getAll(_req: Request, res: Response) {
  const result = await productService.getAll();
  res.status(200).json(result);
}

export async function create(req: Request, res: Response) {
  const product = req.body as NewProduct;

  const result = await productService.create(product);

  res.status(201).json(result);
}