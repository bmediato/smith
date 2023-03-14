import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Products, NewProduct, ReturnProduct } from '../interfaces';

export async function getAll(): Promise<Products[]> {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.products');

  return products as Products[];
}

export async function create(product: NewProduct): Promise<ReturnProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const value = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, value);
  const { insertId: id } = result;

  const newProduct: ReturnProduct = { id, name, amount };
  return newProduct;
}