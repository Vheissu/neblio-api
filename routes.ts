import { JsonRpc } from './rpc-client';
import express from 'express';

export class NeblioRoutes {
    public path = '/neblio';
    public router = express.Router();
    public rpcClient: JsonRpc;

    constructor(rpcClient: JsonRpc) {
        this.rpcClient = rpcClient;

        this.router.get(`${this.path}/getlatestblock`, this.getLatestBlock);
        this.router.get(`${this.path}/getblockbynumber`, this.getBlockByNumber);
    }

    public getLatestBlock = async (request: express.Request, response: express.Response) => {
        const rpcResponse = await this.rpcClient.request('getblockcount');

        return rpcResponse.result;
    }

    public getBlockByNumber = async (request: express.Request, response: express.Response) => {
        const blockNumber = request.params.number;

        const rpcResponse = await this.rpcClient.request('getblockbynumber', [blockNumber, true]);

        return rpcResponse.result;
    }
}