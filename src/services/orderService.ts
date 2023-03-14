import orderModel from '../models/orderModel';

export default async function getAll() {
  const result = await orderModel();
  return result;
}