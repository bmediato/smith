import express from 'express';
import * as productController from './controllers/productController';
import userController from './controllers/userController';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.post('/products', productController.create);
app.post('/users', userController);

export default app;
