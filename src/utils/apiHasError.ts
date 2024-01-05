import { APIRequest } from '../api/types';

export function hasError(response: any): response is APIRequest<any> {
  return response && response.hasOwnProperty('reason');
}
