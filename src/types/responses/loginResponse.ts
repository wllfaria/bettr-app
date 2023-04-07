import { HttpResponse } from './httpResponse';

export type LoginResponse = HttpResponse<{
  accessToken: string;
}>;
