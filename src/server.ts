import express from 'express';
import './database';
import { routes } from './routes'

const app = express();

app.use(express.json());

app.use(routes);

app.listen(7777, () => console.log("Server is running on port 7777."));