import { UserTypes } from '@prisma/client';
import signUpDto from './signUp.dto';
import userTypeDto from './userType.dto';

export default class signUpAdminDto extends signUpDto implements userTypeDto {
  userType: UserTypes = 'Admin';
}
