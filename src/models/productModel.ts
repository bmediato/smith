import connection from './connection';
import { Products } from '../interfaces';

export default async function getAll(): Promise<Products[]> {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.products');

  return products as Products[];
}
