import express from 'express';
import * as productController from './controllers/productController';
import * as userController from './controllers/userController';
import orderController from './controllers/orderController';
import validateLogin from './middleware/validateLogin';
import validateProduct from './middleware/validateProducts';

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.post('/products', validateProduct, productController.create);
app.post('/users', userController.create);
app.get('/orders', orderController);
app.post('/login', validateLogin, userController.login);

export default app;
