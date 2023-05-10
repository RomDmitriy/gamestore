import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import jwtInfo from 'src/modules/auth/jwt/dto/jwt-info.dto';
import jwtPayloadDto from '../dto/jwt-payload.dto';

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_ACCESS_KEY'),
    });
  }

  validate(payload: jwtPayloadDto): jwtInfo {
    // так-то здесь нужна проверка на то, что токен нужного типа, но
    // у нас стоят разные ключи для ACCESS и REFRESH токенов, из-за чего
    // токен при валидации не пройдёт, поэтому смысла в дополнительной проверки нет.
    //if (payload.type !== TokenTypes.ACCESS) throw new UnauthorizedException();
    return payload.userInfo;
  }
}
