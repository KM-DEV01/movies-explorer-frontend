import { MainAPI } from '@shared/api/mainApi.ts';
import { IUpdateUser, IUser } from '@entities/user';

class UserAPI extends MainAPI {
  async getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      ...this.options,
      method: 'GET',
    }).then((res) => this.getResponseData<IUser>(res));
  }

  async updateUserInfo(userInfo: IUpdateUser) {
    return fetch(`${this.baseUrl}/users/me`, {
      ...this.options,
      method: 'PATCH',
      body: JSON.stringify(userInfo),
    }).then((res) => this.getResponseData<IUpdateUser>(res));
  }
}

export const userApi = new UserAPI();
