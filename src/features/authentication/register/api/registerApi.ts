import { MainAPI } from '@shared/api';
import { IUser } from '@entities/user';
import { loginApi } from '@features/authentication/login';
import { IRegister } from '@features/authentication/register';

class RegisterAPI extends MainAPI {
  async signup(data: IRegister) {
    return fetch(`${this.baseUrl}/signup`, {
      ...this.options,
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res): Promise<IUser> => this.getResponse(res))
      .then(() => loginApi.signin(data));
  }
}

export const registerApi = new RegisterAPI();
