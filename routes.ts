import { JsonRpc } from './rpc-client';
import express from 'express';

export class NeblioRoutes {
    public path = '/neblio';
    public router = express.Router();
    public rpcClient: JsonRpc;

    constructor(rpcClient: JsonRpc) {
        this.rpcClient = rpcClient;

        this.router.get(`${this.path}/getlatestblock`, this.getLatestBlock);
        this.router.get(`${this.path}/getblockbynumber/:blocknumber`, this.getBlockByNumber);
        this.router.get(`${this.path}/getblockhash/:blocknumber`, this.getBlockHash);
        this.router.get(`${this.path}/getblock/:hash`, this.getBlock);
    }

    public getLatestBlock = async (request: express.Request, response: express.Response) => {
        const rpcResponse = await this.rpcClient.request('getblockcount');

        return response.json(rpcResponse.result);
    }

    public getBlockByNumber = async (request: express.Request, response: express.Response) => {
        const blockNumber = request.params.blocknumber;

        const rpcResponse = await this.rpcClient.request('getblockbynumber', [parseInt(blockNumber), true]);

        return response.json(rpcResponse.result);
    }

    public getBlockHash = async (request: express.Request, response: express.Response) => {
        const blockNumber = request.params.blocknumber;

        const rpcResponse = await this.rpcClient.request('getblockhash', [parseInt(blockNumber)]);

        return response.json(rpcResponse.result);
    }

    public getBlock = async (request: express.Request, response: express.Response) => {
        const blockHash = request.params.hash;

        const rpcResponse = await this.rpcClient.request('getblock', [blockHash, true, true]);

        return response.json(rpcResponse.result);
    }
}