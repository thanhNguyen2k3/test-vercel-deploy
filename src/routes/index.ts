import productsRouter from './productRoute';
import categoryRoute from './categoryRoute';
import { Express } from 'express';

const route = (app: Express) => {
    app.use('/api', productsRouter);
    app.use('/api', categoryRoute);
};

export default route;
