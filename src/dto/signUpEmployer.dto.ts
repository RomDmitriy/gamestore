import { UserTypes } from '@prisma/client';
import signUpDto from './signUp.dto';
import { IsMobilePhone } from 'class-validator';

export default class signUpEmployerDto extends signUpDto {
  userType: UserTypes = 'Employer';

  @IsMobilePhone('ru-RU')
  tel: string;
}
