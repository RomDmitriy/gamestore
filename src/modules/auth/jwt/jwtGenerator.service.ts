import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtInfo from 'src/dto/jwtInfo.dto';
import TokensDto from 'src/dto/tokens.dto';

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

  generateTokens(userInfo: jwtInfo): TokensDto {
    return {
      access_token: this.jwt.sign(
        { userInfo, type: TOKEN_TYPES.access },
        {
          privateKey: this.configService.getOrThrow('JWT_ACCESS_KEY'),
          expiresIn: 900,
        },
      ),
      refresh_token: this.jwt.sign(
        { userInfo, type: TOKEN_TYPES.refresh },
        {
          privateKey: this.configService.getOrThrow('JWT_REFRESH_KEY'),
          expiresIn: '30d',
        },
      ),
    };
  }

  /**
   * @deprecated
   */
  generateAccessToken(userInfo: jwtInfo): string {
    return this.jwt.sign(
      { userInfo, type: TOKEN_TYPES.access },
      {
        privateKey: this.configService.getOrThrow('JWT_ACCESS_KEY'),
        expiresIn: 900,
      },
    );
  }

  /**
   * @deprecated
   */
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
