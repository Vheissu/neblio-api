import { JsonRpc } from './rpc-client';
import { NeblioRoutes } from './routes';
import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

const app = express();
const port = process.env.PORT || 3000;

const rpcClient = new JsonRpc(process.env.rpchost, process.env.rpcuser, process.env.rpcpass);

const neblioRoutes = new NeblioRoutes(rpcClient);

app.get('/', (req, res) => {
  res.send(`Hello, world`);
});

app.use('/', neblioRoutes.router);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});