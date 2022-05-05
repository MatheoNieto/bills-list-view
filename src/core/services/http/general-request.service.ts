import axios, {AxiosStatic} from 'axios';
import {HttpCommonService} from './http-common.service';

type FetchType = {
  path: string;
  body?: any;
  headers?: any;
};

class GeneralRequestService {
  private httpService: AxiosStatic;
  private httpCommonService: HttpCommonService;

  constructor() {
    this.httpService = axios;
    this.httpCommonService = new HttpCommonService();
  }

  async get({path, headers}: FetchType) {
    try {
      const response = await this.httpService.get(path, {
        headers: {...headers},
      });
      return response.data;
    } catch (err) {
      console.log("=>err",err.response)
      this.httpCommonService.handleError(err);
    }
  }

  async post({path, body, headers}: FetchType) {
    try {
      const response = await this.httpService.post(path, body, {
        headers: {...headers},
      });
      return response.data;
    } catch (err) {
      this.httpCommonService.handleError(err);
    }
  }
}

export default new GeneralRequestService();