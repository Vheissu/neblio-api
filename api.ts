import { JsonRpc } from './rpc-client';
import { NeblioRoutes } from './routes';
import fetch from 'node-fetch';
import express from 'express';

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

const app = express();
const port = 3000;

const rpcClient = new JsonRpc('127.0.0.1:6326', 'user', 'password');

const neblioRoutes = new NeblioRoutes(rpcClient);

app.get('/', (req, res) => {
  res.send(`Hello, world`);
});

app.use('/', neblioRoutes.router);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});