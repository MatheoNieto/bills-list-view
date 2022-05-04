import axios, {AxiosStatic, AxiosError} from 'axios';
import {HttpCommonService} from './http-common.service';

type FetchType = {
  path: string;
  body?: any;
  headers?: any | {};
};

class GeneralRequestService {
  private httpService: AxiosStatic;
  private httpCommonService: HttpCommonService;

  constructor() {
    this.httpService = axios;
    this.httpCommonService = new HttpCommonService();
  }

  async get({path}: FetchType) {
    console.log('=>path', path);
    fetch('http://localhost:3000/bills')
    .then((data)=>console.log("data", data))
    .catch((err)=> console.log("=err", err))
  }

  // async post({path, body, headers}: FetchType) {
  //   try {
  //     const response = await this.httpService.post(path, body, {
  //       headers: {...headers},
  //     });
  //     return response.data;
  //   } catch (err) {
  //     this.httpCommonService.handleError(err);
  //   }
  // }
}

export default new GeneralRequestService();
