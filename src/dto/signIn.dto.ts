import { UserTypes } from '@prisma/client';

export default interface signInDto {
  login: string;
  password: string;
  userType: UserTypes;
}
