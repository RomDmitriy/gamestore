import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { JwtService } from '@nestjs/jwt';
import { JwtGeneratorService } from './jwt/jwtGenerator.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';
import { AccessStrategy } from './jwt/strategies/access.strategy';
import { RefreshStrategy } from './jwt/strategies/refresh.strategy';

@Module({
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    JwtGeneratorService,
    PrismaService,
    ConfigService,
    JwtService,
    AccessStrategy,
    RefreshStrategy,
  ],
  exports: [JwtGeneratorService],
})
export class AuthModule {}
