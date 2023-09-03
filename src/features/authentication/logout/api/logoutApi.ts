import { MainAPI } from '@shared/api';
import { ILogout } from '@features/authentication/logout';

class LogoutAPI extends MainAPI {
  async logout() {
    return fetch(`${this.baseUrl}/logout`, {
      ...this.options,
      method: 'POST',
    }).then((res) => this.getResponse<ILogout>(res));
  }
}

export const logoutApi = new LogoutAPI();
