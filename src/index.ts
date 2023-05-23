import express, { Response } from 'express';
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res: Response) => {
    return res.json('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server được chạy trên cổng http://localhost:${PORT}`);
});
