import connection from './connection';
import { Order } from '../interfaces/order';

export default async function getAll(): Promise<Order[]> {
  const [orders] = await connection.execute(`SELECT o.id, o.user_id as userId,
  JSON_ARRAYAGG(pr.id) as productsIds
  FROM Trybesmith.orders as o
  INNER JOIN Trybesmith.products as pr
  ON o.id = pr.order_id
  GROUP BY o.id;`);
  return orders as Order[];
}
