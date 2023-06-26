import axios from 'axios';
import { LoginProps } from '../models/login.model';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

interface ApiResponse {
  ok: boolean;
  message: string;
  data?: any;
}

export class ApiService {
  public static async listErrands(id: string): Promise<ApiResponse> {
    try {
      const result = await api.get(`/user/${id}/errands`);

      return result.data;
    } catch (error: any) {
      console.log(error.response.data);

      return error.response.data;
    }
  }

  public static async login(props: LoginProps): Promise<ApiResponse> {
    try {
      const result = await api.post('/user/login', props);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);

      return error.response.data;
    }
  }
}
