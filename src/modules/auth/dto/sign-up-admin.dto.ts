import { User_types } from '@prisma/client';
import signUpDto from './sign-up.dto';

export default class signUpAdminDto extends signUpDto {
  userType: User_types = 'Admin';
}
