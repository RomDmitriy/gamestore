import { UserTypes } from '@prisma/client';
import signUpDto from './signUp.dto';
import { IsMobilePhone } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class signUpEmployerDto extends signUpDto {
  userType: UserTypes = 'Employer';

  @ApiProperty({
    example: '88005553535',
  })
  @IsMobilePhone()
  tel: string;
}
