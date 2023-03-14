import connection from './connection';
import { Order } from '../interfaces/order';

export default async function getAll(): Promise<Order[]> {
  const [orders] = await connection.execute(`SELECT *, JSON_ARRAYAGG(id) as products 
    FROM Trybesmith.orders group by id;`);
  return orders as Order[];
}