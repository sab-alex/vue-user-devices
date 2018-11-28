import axios from 'axios';

export class AbstractHttpService  {
  public root = process.env.VUE_APP_API_URL;
  public http: any;

  constructor() {
    this.http = axios.create({
      baseURL: this.root,
      timeout: 5000,
    });
  }

  public handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
