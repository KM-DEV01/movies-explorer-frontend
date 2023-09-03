export class MainAPI {
  protected options: RequestInit;

  protected baseUrl;

  constructor(options?: RequestInit) {
    this.options = {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      ...options,
    };
    this.baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8000';
  }

  protected async getResponse<T>(res: Response): Promise<T> {
    if (res && res.ok) {
      return res.json();
    }
    return Promise.reject((await res.json()) as Promise<T>);
  }

  protected async getResponseData<T>(res: Response): Promise<{ data: T }> {
    if (res && res.ok) {
      return res.json();
    }
    return Promise.reject((await res.json()) as Promise<T>);
  }
}
