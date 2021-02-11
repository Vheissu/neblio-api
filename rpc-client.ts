export class JsonRpc {
    private endpoint = null;
    private lastId = 1;
    private debug = false;
    private headers = new Headers();

    constructor(endpoint: string, user = '', password = '', debug = false) {
        this.endpoint = endpoint;
        this.debug = debug;

        this.headers.set('Accept', 'application/json, text/plain, */*');
        this.headers.set('Content-Type', 'application/json');

        if (user != '' || password != '') {
            const authString = `${user}:${password}`;
            this.headers.set('Authorization', `Basic ${Buffer.from(authString).toString('base64')}`);
        }
    }

    request(method, params = []) {
        const id = this.lastId++;
    
        const req = {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
              jsonrpc: '2.0',
              id: id,
              method,
              params
            })
        };
    
        return fetch(this.endpoint, req)
            .then(res => this.checkStatus(res))
            .then(res => res.json())
            .then(res => this.errorCheck(res, req, this.debug))
    }

    private checkStatus(response: Response) {
        if (response.status >= 200 && response.status <= 400) {
            return response;
        }

        const error = new Error(response.statusText);
        (error as any).response = response;
        throw error;
    }

    private errorCheck(response: any, req, debug: boolean) {
        if (response.error) {
            if (debug) {
                console.error(`Request ID ${response.id} failed with error: ${response.error}`);
            }

            throw new Error(`${response.error.message}`);
        }

        return response;
    }
}