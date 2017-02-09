import fetch        from 'isomorphic-fetch';
import queryString  from 'query-string';
import Promise      from 'bluebird';

export default class ApiClient {
    constructor({ prefix = 'api/v1'} = {}){
        this.prefix = prefix;
    }

    get(requestUrl, payload = {}, params = {}){
        return this.request({
            url   : requestUrl,
            method: 'get',
            body  : payload,
            params
        });
    }

    request({ url, method, params = {}, body}){
        const urlWithQuery = `${url}?${queryString.stringify(params)}`;

        const init = {
            method,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
        };

        if (method !== 'get' && method !== 'head'){
            init.body = JSON.stringify(body);
        }

        return fetch(`${this.prefix}/${urlWithQuery}`, init).then(res => {
           if(res.statusCode >= 400){
               throw new Error('Bad response from the server');
           }

           return res.json();
        }).then(data => {
            console.log('then', data);

            return (data && data.status === 1)
                    ? data
                    : Promise.reject(data.error);
        });
    }
}