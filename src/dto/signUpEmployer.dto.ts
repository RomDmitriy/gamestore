import { UserTypes } from '@prisma/client';
import signUpDto from './signUp.dto';
import userTypeDto from './userType.dto';
import { IsMobilePhone } from 'class-validator';

export default class signUpEmployerDto
  extends signUpDto
  implements userTypeDto
{
  userType: UserTypes = 'Employer';

  @IsMobilePhone('ru-RU')
  tel: string;
}
