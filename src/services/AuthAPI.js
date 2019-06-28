import { API } from './API';

class AuthAPI extends API {
  constructor(baseUrl = 'http://localhost:9000/api') {
    super(baseUrl);
  }

  signUp = ({ username, email, name, password }) => {
    debugger;
    return this.makeRequest("users", "POST", {
      username,
      email,
      name,
      password
    });
  };

  signIn = (login, password) => {
    return this.makeRequest("auth/token", "POST", {
      login,
      password
    });
  };
}

export default new AuthAPI();