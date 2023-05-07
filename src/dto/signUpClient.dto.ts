import { UserTypes } from '@prisma/client';
import signUpDto from './signUp.dto';

export default class signUpClientDto extends signUpDto {
  userType: UserTypes = 'Client';
}
