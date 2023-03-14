export interface NewProduct {
  name: string,
  amount: string,
}

export interface ReturnProduct extends NewProduct {
  id: number,
}

export interface Products extends ReturnProduct {
  orderId: number | null;
}