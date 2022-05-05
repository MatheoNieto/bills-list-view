import {AlertService} from './alert';
export class HttpCommonService {
  private alertService: AlertService;

  constructor() {
    this.alertService = new AlertService();
  }

  handleError(error:any) {
    if (error.response.status === 0) {
      this.showAlertOffline();
      return;
    }

    if (error.response.status === 403) {
      this.showError(error, 'Alert!', 'Not Authenticated.');
      return;
    }

    this.showError(error.response);
  }

  showError(appError:any, title?:string, message?:string) {
    const description = message ? message : appError.data.message;
    this.alertService.show(title, description);
  }

  showAlertOffline() {
    this.alertService.show('Alert!', 'No connection internet.');
  }
}
