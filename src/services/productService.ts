import { NewProduct } from '../interfaces';
import * as productModel from '../models/productModel';

export default async function getAll() {
  const result = await productModel.getAll(); // lembrar de colocar .getAll 

  return result;
}

export async function create(product: NewProduct) {
  const result = await productModel.create(product);
  return result;
}