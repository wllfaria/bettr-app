import { User } from 'types/user';

import { HttpResponse } from './httpResponse';

export type UserResponse = HttpResponse<User>;
