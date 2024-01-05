import { API_ENDPOINT } from "../api/apiURL";
export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Options = {
  timeout?: number;
  headers?: { [key: string]: string };
  method: METHOD;
  data?: object | string;
}

interface DataResponse {
  response: string
  status: number
}

type OptionsWithoutMethod = Omit<Options, 'method'>;

function queryStringify(data = {}) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const arr = [...Object.entries(data)];
  return (data) ? arr.reduce((prev, item, index) => {
    return prev += `${item[0]}=${item[1]}${(index !== arr.length - 1) ? '&' : ''}`;
  }, '?') : '';
}

type HTTPMethod = <T extends any>(url: string, options?: OptionsWithoutMethod) => Promise<T>;

class HTTPTransport {
  get: HTTPMethod = (url, options = {}) => {
    return this.request(url + queryStringify(options.data), { ...options, method: METHOD.GET }, options.timeout);
  };

  put: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHOD.PUT }, options.timeout);
  };

  post: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHOD.POST }, options.timeout);
  };

  delete: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHOD.DELETE }, options.timeout);
  };

  request<T extends any>(url: string, options: Options, timeout = 5000): Promise<T> {
    const { headers = {}, method, data } = options;
    const fullUrl = `${API_ENDPOINT}${url}`;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject('Метод отсутствует');
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(
        method,
        (method === METHOD.GET) && !!data
          ? `${fullUrl}${queryStringify(data)}`
          : fullUrl,
      );

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });
      xhr.withCredentials = true;

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
        if (typeof FormData === "function" && data instanceof FormData) {
          xhr.send(data);
        } else {
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(JSON.stringify(data));
        }
      }
    })
      .then((response) => {
        try {
          
          if ((response as DataResponse).response === 'OK') {
            return { status: 200 };
          }
        
          const parsedResponse = JSON.parse((response as DataResponse)?.response)
         
          if ((response as DataResponse)?.status !== 200) {
            throw Error(parsedResponse.reason)
          } else {
            return parsedResponse
          }
        } catch (err) {
          throw Error(err as string)
        }
        
      });
  };
}

export default new HTTPTransport();
