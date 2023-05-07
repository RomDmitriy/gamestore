import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { JwtService } from '@nestjs/jwt';
import { JwtGeneratorService } from './jwt/jwtGenerator.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    JwtGeneratorService,
    PrismaService,
    ConfigService,
    JwtService,
  ],
  exports: [JwtGeneratorService],
})
export class AuthModule {}
