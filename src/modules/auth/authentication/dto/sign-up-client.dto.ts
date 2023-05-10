import { User_types } from '@prisma/client';
import signUpDto from './sign-up.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export default class signUpClientDto extends signUpDto {
  userType: User_types = 'Client';

  @ApiPropertyOptional({
    example: 'https://i.imgur.com/UoyR0Wc_d.webp',
  })
  avatar_url: string;
}
