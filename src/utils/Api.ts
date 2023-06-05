export enum METHOD  {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

type Options = {
    timeout: number,
    headers: any,
    method: METHOD,
    data: any
}

function queryStringify(data: { [key: string]: any }) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }


    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}

export class HTTPTransport {
    get = (url: string, options: Options) => {

        return this.request(url, { ...options, method: METHOD.GET }, options.timeout);
    };

    put = (url: string, options: Options) => {

        return this.request(url, { ...options, method: METHOD.PUT }, options.timeout);
    };
    post = (url: string, options: Options) => {

        return this.request(url, { ...options, method: METHOD.POST }, options.timeout);
    };

    delete = (url: string, options: Options) => {

        return this.request(url, { ...options, method: METHOD.DELETE }, options.timeout);
    };
   
    request = (url: string, options: Options, timeout = 5000) => {
        const { headers = {}, method, data } = options;

        return new Promise(function (resolve, reject) {
            if (!method) {
                reject('Метод отсутствует');
                return;
            }


            const xhr = new XMLHttpRequest();


            xhr.open(
                method,
                (method === METHOD.GET) && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );


            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });


            xhr.onload = function () {
                resolve(xhr);
            };


            xhr.onabort = reject;
            xhr.onerror = reject;


            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }


        });
    };
}