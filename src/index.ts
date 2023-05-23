import route from './routes';
import { connectDB } from './config/db';
import express from 'express';
import { Context } from './types/Context';
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

// Connect mongoDb
connectDB();

app.get('/', ({ res }: Context) => {
    res.json('Hello World');
});

app.use(express.json());

route(app);

app.listen(PORT, () => {
    console.log(`Server được chạy trên cổng http://localhost:${PORT}`);
});
