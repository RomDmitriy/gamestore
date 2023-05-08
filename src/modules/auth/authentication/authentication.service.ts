import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { JwtGeneratorService } from '../jwt/jwtGenerator.service';
import { User_types } from '@prisma/client';
import SignInDto from '../dto/sign-in.dto';
import TokensDto from '../dto/tokens.dto';
import signUpEmployerDto from '../dto/sign-up-employer.dto';
import signUpClientDto from '../dto/sign-up-client.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private prismaService: PrismaService,
    private jwtGeneratorService: JwtGeneratorService,
  ) {}

  async signIn(signInInfo: SignInDto): Promise<TokensDto> {
    const user = await this.prismaService.users.findFirst({
      where: {
        login: signInInfo.login,
        user_type: signInInfo.userType,
      },
      select: {
        id: true,
        password_hash: true,
        password_salt: true,
      },
    });

    if (!user) {
      throw new NotFoundException();
    }

    const crypted_password = await bcrypt.hash(
      signInInfo.password,
      user.password_salt,
    );

    if (user.password_hash !== crypted_password) {
      throw new NotFoundException();
    }

    return this.jwtGeneratorService.generateTokens({
      id: user.id,
    });
  }

  async signUpClient(signUpClientInfo: signUpClientDto): Promise<TokensDto> {
    const password_salt = await bcrypt.genSalt();
    const password_hash = await bcrypt.hash(
      signUpClientInfo.password,
      password_salt,
    );

    const user = await this.prismaService.users
      .create({
        data: {
          login: signUpClientInfo.login,
          password_hash: password_hash,
          password_salt: password_salt,
          first_name: signUpClientInfo.first_name,
          second_name: signUpClientInfo.second_name,
          third_name: signUpClientInfo.third_name,
          user_type: User_types.Client,
        },
        select: {
          id: true,
        },
      })
      .catch(() => {
        throw new ConflictException();
      });

    await this.prismaService.clients.create({
      data: {
        id: user.id,
        avatar_url: signUpClientInfo.avatar_url,
      },
    });

    return this.jwtGeneratorService.generateTokens(user);
  }

  async signUpEmployer(signUpEmployerInfo: signUpEmployerDto): Promise<void> {
    //TODO: доделать
    return null;
  }
}
