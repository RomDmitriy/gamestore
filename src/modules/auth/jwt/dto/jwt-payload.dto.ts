import jwtInfo from './jwt-info.dto';

export enum TokenTypes {
  'ACCESS',
  'REFRESH',
}

export default class jwtPayloadDto {
  userInfo: jwtInfo;
  type: TokenTypes;
}
