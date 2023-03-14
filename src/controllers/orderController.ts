import { Request, Response } from 'express';
import orderService from '../services/orderService';

export default async function getAll(req: Request, res: Response) {
  const result = await orderService();
  return res.status(200).json(result);  
}