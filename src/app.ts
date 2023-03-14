import express from 'express';
import * as productController from './controllers/productController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.post('/products', productController.create);
app.post('/users', userController);
app.get('/orders', orderController);

export default app;
