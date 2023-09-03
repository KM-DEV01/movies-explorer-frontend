import { MainAPI } from '@shared/api';
import { userApi } from '@entities/user';
import { ILogin } from '@features/authentication/login';

interface ILoginMessage {
  message: string;
}

class LoginAPI extends MainAPI {
  async signin(data: ILogin) {
    const { email, password } = data;
    return fetch(`${this.baseUrl}/signin`, {
      ...this.options,
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
      .then((res) => this.getResponse<ILoginMessage>(res))
      .then((res) => console.log(res))
      .then(() => userApi.getUserInfo());
  }
}

export const loginApi = new LoginAPI();
