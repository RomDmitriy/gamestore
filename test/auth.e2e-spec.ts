import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AuthenticationController } from 'src/modules/auth/authentication/authentication.controller';
import { AppController } from 'src/app.controller';

describe('AuthenticationController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Authentification', () => {
    const URL = '/auth/login';
    it('should login', () => {
      return request(app.getHttpServer()).post(URL).send({
        login: 'lololowka',
        password: 'rayaprime',
      });
    });
  });
});
