import { UserTypes } from '@prisma/client';
import signUpDto from './signUp.dto';
import userTypeDto from './userType.dto';

export default class signUpClientDto extends signUpDto implements userTypeDto {
  userType: UserTypes = 'Client';
}
