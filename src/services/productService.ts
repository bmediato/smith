import productModel from '../models/productModel';

export default async function getAll() {
  const result = await productModel(); // lembrar de colocar .getAll 

  return result;
}