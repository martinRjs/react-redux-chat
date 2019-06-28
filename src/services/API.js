import axios from 'axios';

export class API {
  constructor(baseUrl = 'http://localhost:9000/api') {
    this.baseUrl = baseUrl;
  }

  makeRequest(url, method, data) {
    return axios({
      url: `${this.baseUrl}/${url}`,
      method,
      data
    }).then(data => data.data);
  }
}
