import { UserTypes } from '@prisma/client';
import signUpDto from './signUp.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export default class signUpClientDto extends signUpDto {
  userType: UserTypes = 'Client';

  @ApiPropertyOptional({
    example: 'https://i.imgur.com/UoyR0Wc_d.webp',
  })
  avatar_url: string;
}
