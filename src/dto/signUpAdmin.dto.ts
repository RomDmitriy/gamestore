import { UserTypes } from '@prisma/client';
import signUpDto from './signUp.dto';

export default class signUpAdminDto extends signUpDto {
  userType: UserTypes = 'Admin';
}
