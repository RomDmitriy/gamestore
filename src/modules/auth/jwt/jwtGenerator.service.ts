import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import jwtInfo from 'src/dto/jwtInfo.dto';
import { TokenTypes } from 'src/dto/jwtPayload.dto';
import TokensDto from 'src/dto/tokens.dto';

@Injectable()
export class JwtGeneratorService {
  constructor(
    private readonly jwt: JwtService,
    private readonly configService: ConfigService,
  ) {}

  generateTokens(userInfo: jwtInfo): TokensDto {
    return {
      access_token: this.jwt.sign(
        { userInfo, type: TokenTypes.ACCESS },
        {
          privateKey: this.configService.getOrThrow('JWT_ACCESS_KEY'),
          expiresIn: 900,
        },
      ),
      refresh_token: this.jwt.sign(
        { userInfo, type: TokenTypes.REFRESH },
        {
          privateKey: this.configService.getOrThrow('JWT_REFRESH_KEY'),
          expiresIn: '30d',
        },
      ),
    };
  }

  /**
   * @deprecated нет необходимости генерировать токены обособленно,
   * используйте метод generateTokens()
   */
  generateAccessToken(userInfo: jwtInfo): string {
    return this.jwt.sign(
      { userInfo, type: TokenTypes.ACCESS },
      {
        privateKey: this.configService.getOrThrow('JWT_ACCESS_KEY'),
        expiresIn: 900,
      },
    );
  }

  /**
   * @deprecated нет необходимости генерировать токены обособленно,
   * используйте метод generateTokens()
   */
  generateRefreshToken(userInfo: jwtInfo): string {
    return this.jwt.sign(
      { userInfo, type: TokenTypes.REFRESH },
      {
        privateKey: this.configService.getOrThrow('JWT_REFRESH_KEY'),
        expiresIn: '30d',
      },
    );
  }
}
