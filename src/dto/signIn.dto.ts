import { Length } from 'class-validator';

export default class SignInDto {
  @Length(4, 16)
  login: string;

  @Length(6, 32)
  password: string;
}
