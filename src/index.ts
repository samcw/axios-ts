import { AxiosRequestConfig } from './types/index';
import xhr from './xhr';
import { buildURL } from './helps/url';
import { transformRequest } from './helps/data'


function axios(config: AxiosRequestConfig): void {
  xhr(config);
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transfromURL(config);
  config.data = transformRequest(config);
}

function transfromURL(config: AxiosRequestConfig): string {
  const {url, params} = config;
  return buildURL(url, params);
}

function transformRequestData(config: AxiosRequestConfig):any {
  return transformRequest(config.data);
}

export default axios;
