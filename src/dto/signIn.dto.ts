import { ApiProperty } from '@nestjs/swagger';
import { UserTypes } from '@prisma/client';
import { Length } from 'class-validator';

export default class SignInDto {
  @ApiProperty({
    example: 'lololowka',
    minLength: 4,
    maxLength: 16,
  })
  @Length(4, 16)
  login: string;

  @ApiProperty({
    example: 'rayaprime',
    minLength: 6,
    maxLength: 32,
  })
  @Length(6, 32)
  password: string;

  userType: UserTypes;
}
