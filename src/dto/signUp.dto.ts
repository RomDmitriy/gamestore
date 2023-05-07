import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';
import SignInDto from './signIn.dto';

// стандартный интерфейс для авторизации, использовать только для наследования
export default class signUpDto extends SignInDto {
  @ApiProperty({
    example: 'Алексей',
    minLength: 1,
    maxLength: 16,
  })
  @Length(1, 16)
  first_name: string;

  @ApiProperty({
    example: 'Ивашкин',
    minLength: 1,
    maxLength: 16,
  })
  @Length(1, 16)
  second_name: string;

  @ApiProperty({
    example: 'Диович',
    minLength: 1,
    maxLength: 16,
  })
  @Length(1, 16)
  third_name: string;
}
