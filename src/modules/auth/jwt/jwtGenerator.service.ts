import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtInfo from 'src/dto/jwtInfo.dto';

const enum TOKEN_TYPES {
  'access' = 'access',
  'refresh' = 'refresh',
}

@Injectable()
export class JwtGeneratorService {
  constructor(
    private readonly jwt: JwtService,
    private readonly configService: ConfigService,
  ) {}

  generateAccessToken(userInfo: jwtInfo): string {
    return this.jwt.sign(
      { userInfo, type: TOKEN_TYPES.access },
      {
        privateKey: this.configService.getOrThrow('JWT_ACCESS_KEY'),
        expiresIn: 900,
      },
    );
  }

  generateRefreshToken(userInfo: jwtInfo): string {
    return this.jwt.sign(
      { userInfo, type: TOKEN_TYPES.refresh },
      {
        privateKey: this.configService.getOrThrow('JWT_REFRESH_KEY'),
        expiresIn: '30d',
      },
    );
  }
}
