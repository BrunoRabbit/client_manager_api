import express from 'express';
import cors, { CorsOptions } from 'cors';
const app = express();
import config from 'config';
import routerClient from './api/index';

const corsOptions : CorsOptions = {
  origin: `http://localhost:8080`,
  optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions))
app.use(routerClient);

app.get('/' , (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(config.get('api.port'), () => {
  console.log(`Server is running on port ${config.get('api.port')}`);
});