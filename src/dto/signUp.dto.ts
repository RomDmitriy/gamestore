import { Length } from 'class-validator';

// стандартный интерфейс для авторизации, использовать только для наследования
export default class signUpDto {
  @Length(4, 16)
  login: string;

  @Length(6, 32)
  password: string;

  @Length(1, 16)
  first_name: string;

  @Length(1, 16)
  second_name: string;

  @Length(1, 16)
  third_name: string;
}
