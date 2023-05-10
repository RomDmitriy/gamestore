import { Jobs, User_types } from '@prisma/client';
import signUpDto from './sign-up.dto';
import { IsEnum, IsMobilePhone } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class signUpEmployerDto extends signUpDto {
  userType: User_types = 'Employer';

  @ApiProperty({
    enum: Jobs,
  })
  @IsEnum(Jobs)
  job: Jobs;

  @ApiProperty({
    example: '88005553535',
  })
  @IsMobilePhone()
  tel: string;
}
