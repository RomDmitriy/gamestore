import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import TokensEntity from 'src/entities/tokens.entity';
import TokensDto from '../dto/tokens.dto';
import SignInDto from '../dto/sign-in.dto';
import signUpClientDto from '../dto/sign-up-client.dto';
import signUpEmployerDto from '../dto/sign-up-employer.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @ApiTags('auth')
  @ApiOperation({ summary: 'Войти в аккаунт' })
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'Пользователь найден',
    type: TokensEntity,
  })
  @Post('login')
  signIn(@Body() signInInfo: SignInDto): Promise<TokensDto> {
    return this.authenticationService.signIn(signInInfo);
  }

  @ApiTags('auth')
  @ApiOperation({ summary: 'Зарегистрировать клиента' })
  @ApiResponse({
    status: 201,
    description: 'Клиент зарегистрирован',
    type: TokensEntity,
  })
  @Post('register/client')
  signUpClient(@Body() signUpClientInfo: signUpClientDto): Promise<TokensDto> {
    return this.authenticationService.signUpClient(signUpClientInfo);
  }

  @ApiTags('auth')
  @ApiOperation({ summary: 'Зарегистрировать сотрудника' })
  @ApiResponse({
    status: 201,
    description: 'Сотрудник зарегистрирован',
    type: TokensEntity,
  })
  @Post('register/employer')
  signUpEmployer(@Body() signUpEmployerInfo: signUpEmployerDto): Promise<void> {
    return this.authenticationService.signUpEmployer(signUpEmployerInfo);
  }
}
